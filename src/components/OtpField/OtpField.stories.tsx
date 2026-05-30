import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { OtpFieldRoot, OtpFieldInput, OtpFieldSeparator } from './OtpField';

const meta: Meta = {
    title: 'Sparks/OtpField',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

const OTP_LENGTH = 6;

export const Default: Story = {
    render: () => (
        <div className="space-y-1">
            <label className="text-sm font-medium text-pecan" htmlFor="otp">
                Verification code
            </label>
            <OtpFieldRoot id="otp" length={OTP_LENGTH}>
                {Array.from({ length: OTP_LENGTH }, (_, index) => (
                    <OtpFieldInput
                        key={index}
                        aria-label={`Character ${index + 1} of ${OTP_LENGTH}`}
                    />
                ))}
            </OtpFieldRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole('textbox');
        await expect(inputs).toHaveLength(OTP_LENGTH);
        await userEvent.type(inputs[0]!, '123456');
        await expect(inputs[0]).toHaveValue('1');
        await expect(inputs[5]).toHaveValue('6');
    }
};

export const Grouped: Story = {
    render: () => (
        <OtpFieldRoot length={OTP_LENGTH}>
            <div className="flex items-center gap-2">
                {Array.from({ length: 3 }, (_, index) => (
                    <OtpFieldInput
                        key={index}
                        aria-label={`Character ${index + 1} of ${OTP_LENGTH}`}
                    />
                ))}
            </div>
            <OtpFieldSeparator />
            <div className="flex items-center gap-2">
                {Array.from({ length: 3 }, (_, index) => (
                    <OtpFieldInput
                        key={index + 3}
                        aria-label={`Character ${index + 4} of ${OTP_LENGTH}`}
                    />
                ))}
            </div>
        </OtpFieldRoot>
    )
};

export const Masked: Story = {
    render: () => (
        <OtpFieldRoot length={4} mask>
            {Array.from({ length: 4 }, (_, index) => (
                <OtpFieldInput
                    key={index}
                    aria-label={`Character ${index + 1} of 4`}
                />
            ))}
        </OtpFieldRoot>
    )
};

export const Disabled: Story = {
    render: () => (
        <OtpFieldRoot length={OTP_LENGTH} disabled defaultValue="12">
            {Array.from({ length: OTP_LENGTH }, (_, index) => (
                <OtpFieldInput
                    key={index}
                    aria-label={`Character ${index + 1} of ${OTP_LENGTH}`}
                />
            ))}
        </OtpFieldRoot>
    )
};
