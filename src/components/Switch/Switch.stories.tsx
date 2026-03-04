import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import React from 'react';
import { SwitchRoot, SwitchThumb } from './Switch';

const meta = {
    title: 'Components/Switch',
    component: SwitchRoot,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        defaultChecked: { control: 'boolean' }
    }
} satisfies Meta<typeof SwitchRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <label className="flex items-center gap-3 text-sm text-pecan cursor-pointer select-none">
            <SwitchRoot {...args}>
                <SwitchThumb />
            </SwitchRoot>
            Enable notifications
        </label>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const switchEl = canvas.getByRole('switch');
        await expect(switchEl).toBeInTheDocument();
        await expect(switchEl).not.toBeChecked();
        await userEvent.click(switchEl);
        await expect(switchEl).toBeChecked();
    }
};

export const Checked: Story = {
    render: (args) => (
        <label className="flex items-center gap-3 text-sm text-pecan cursor-pointer select-none">
            <SwitchRoot {...args}>
                <SwitchThumb />
            </SwitchRoot>
            Dark mode
        </label>
    ),
    args: { defaultChecked: true }
};

export const Disabled: Story = {
    render: (args) => (
        <label className="flex items-center gap-3 text-sm text-pecan/50 cursor-not-allowed select-none">
            <SwitchRoot {...args}>
                <SwitchThumb />
            </SwitchRoot>
            Marketing emails
        </label>
    ),
    args: { disabled: true },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const switchEl = canvas.getByRole('switch');
        await expect(switchEl).toBeDisabled();
    }
};

export const MultipleToggles: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-56">
            {[
                { label: 'Push notifications', defaultChecked: true },
                { label: 'Email digest', defaultChecked: false },
                { label: 'SMS alerts', defaultChecked: true },
                {
                    label: 'Marketing emails',
                    disabled: true,
                    defaultChecked: false
                }
            ].map(({ label, defaultChecked, disabled }) => (
                <label
                    key={label}
                    className={`flex items-center justify-between text-sm cursor-pointer select-none ${
                        disabled
                            ? 'text-pecan/50 cursor-not-allowed'
                            : 'text-pecan'
                    }`}
                >
                    {label}
                    <SwitchRoot
                        defaultChecked={defaultChecked}
                        disabled={disabled}
                    >
                        <SwitchThumb />
                    </SwitchRoot>
                </label>
            ))}
        </div>
    )
};
