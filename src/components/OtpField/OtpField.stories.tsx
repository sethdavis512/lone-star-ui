import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { OtpFieldRoot, OtpFieldInput, OtpFieldSeparator } from './OtpField';
import { FieldRoot, FieldLabel, FieldDescription } from '../Field';

const meta: Meta = {
    title: 'Sparks/OtpField',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

const OTP_LENGTH = 6;

// The first input takes its accessible name from the field label (a native
// `<label>` pointing at the root `id`, or `<FieldLabel>`). Base UI ignores
// `aria-label` on it and warns, so only the remaining slots get one.
function slotLabel(index: number, length: number) {
    return index === 0 ? undefined : `Character ${index + 1} of ${length}`;
}

const labelClassName = 'text-sm font-medium leading-none text-pecan';

export const Default: Story = {
    render: () => (
        <div className="flex flex-col gap-2">
            <label className={labelClassName} htmlFor="otp-default">
                Verification code
            </label>
            <OtpFieldRoot id="otp-default" length={OTP_LENGTH}>
                {Array.from({ length: OTP_LENGTH }, (_, index) => (
                    <OtpFieldInput
                        key={index}
                        aria-label={slotLabel(index, OTP_LENGTH)}
                    />
                ))}
            </OtpFieldRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole('textbox');
        await expect(inputs).toHaveLength(OTP_LENGTH);
        await expect(inputs[0]).toHaveAccessibleName('Verification code');
        await expect(inputs[1]).toHaveAccessibleName('Character 2 of 6');
        await userEvent.type(inputs[0]!, '123456');
        await expect(inputs[0]).toHaveValue('1');
        await expect(inputs[5]).toHaveValue('6');
    }
};

export const WithField: Story = {
    render: () => (
        <FieldRoot className="flex flex-col gap-2">
            <FieldLabel>Verification code</FieldLabel>
            <OtpFieldRoot length={OTP_LENGTH}>
                {Array.from({ length: OTP_LENGTH }, (_, index) => (
                    <OtpFieldInput
                        key={index}
                        aria-label={slotLabel(index, OTP_LENGTH)}
                    />
                ))}
            </OtpFieldRoot>
            <FieldDescription>
                Enter the 6-character code we sent to your phone.
            </FieldDescription>
        </FieldRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole('textbox');
        await expect(inputs).toHaveLength(OTP_LENGTH);
        await expect(inputs[0]).toHaveAccessibleName('Verification code');
        await expect(inputs[5]).toHaveAccessibleName('Character 6 of 6');
    }
};

export const Grouped: Story = {
    render: () => (
        <div className="flex flex-col gap-2">
            <label className={labelClassName} htmlFor="otp-grouped">
                Verification code
            </label>
            <OtpFieldRoot id="otp-grouped" length={OTP_LENGTH}>
                <div className="flex items-center gap-2">
                    {Array.from({ length: 3 }, (_, index) => (
                        <OtpFieldInput
                            key={index}
                            aria-label={slotLabel(index, OTP_LENGTH)}
                        />
                    ))}
                </div>
                <OtpFieldSeparator />
                <div className="flex items-center gap-2">
                    {Array.from({ length: 3 }, (_, index) => (
                        <OtpFieldInput
                            key={index + 3}
                            aria-label={slotLabel(index + 3, OTP_LENGTH)}
                        />
                    ))}
                </div>
            </OtpFieldRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole('textbox');
        await expect(inputs).toHaveLength(OTP_LENGTH);
        await expect(inputs[0]).toHaveAccessibleName('Verification code');
        await expect(inputs[3]).toHaveAccessibleName('Character 4 of 6');
    }
};

export const Masked: Story = {
    render: () => (
        <div className="flex flex-col gap-2">
            <label className={labelClassName} htmlFor="otp-masked">
                PIN
            </label>
            <OtpFieldRoot id="otp-masked" length={4} mask>
                {Array.from({ length: 4 }, (_, index) => (
                    <OtpFieldInput
                        key={index}
                        aria-label={slotLabel(index, 4)}
                    />
                ))}
            </OtpFieldRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const first = canvas.getByLabelText('PIN', { selector: 'input' });
        await expect(first).toHaveAttribute('type', 'password');
    }
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-col gap-2">
            <label
                className={`${labelClassName} opacity-50`}
                htmlFor="otp-disabled"
            >
                Verification code
            </label>
            <OtpFieldRoot
                id="otp-disabled"
                length={OTP_LENGTH}
                disabled
                defaultValue="12"
            >
                {Array.from({ length: OTP_LENGTH }, (_, index) => (
                    <OtpFieldInput
                        key={index}
                        aria-label={slotLabel(index, OTP_LENGTH)}
                    />
                ))}
            </OtpFieldRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const first = canvas.getByLabelText('Verification code', {
            selector: 'input'
        });
        await expect(first).toBeDisabled();
        await expect(first).toHaveValue('1');
    }
};
