import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import React from 'react';
import { CheckboxRoot, CheckboxIndicator, CheckboxGroup } from './Checkbox';

const meta = {
    title: 'Sparks/Checkbox',
    component: CheckboxRoot,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        defaultChecked: { control: 'boolean' }
    }
} satisfies Meta<typeof CheckboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <label className="flex items-center gap-2 text-sm text-pecan cursor-pointer select-none">
            <CheckboxRoot {...args}>
                <CheckboxIndicator />
            </CheckboxRoot>
            Accept terms and conditions
        </label>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole('checkbox');
        await expect(checkbox).toBeInTheDocument();
        await userEvent.click(checkbox);
        await expect(checkbox).toBeChecked();
    }
};

export const Checked: Story = {
    render: (args) => (
        <label className="flex items-center gap-2 text-sm text-pecan cursor-pointer select-none">
            <CheckboxRoot {...args}>
                <CheckboxIndicator />
            </CheckboxRoot>
            Stay signed in
        </label>
    ),
    args: { defaultChecked: true }
};

export const Disabled: Story = {
    render: (args) => (
        <label className="flex items-center gap-2 text-sm text-pecan/50 cursor-not-allowed select-none">
            <CheckboxRoot {...args}>
                <CheckboxIndicator />
            </CheckboxRoot>
            Disabled option
        </label>
    ),
    args: { disabled: true },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole('checkbox');
        await expect(checkbox).toBeDisabled();
    }
};

export const DisabledChecked: Story = {
    render: (args) => (
        <label className="flex items-center gap-2 text-sm text-pecan/50 cursor-not-allowed select-none">
            <CheckboxRoot {...args}>
                <CheckboxIndicator />
            </CheckboxRoot>
            Locked preference
        </label>
    ),
    args: { disabled: true, defaultChecked: true }
};

export const Group: Story = {
    render: () => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-pecan mb-1">Texas regions</p>
            <CheckboxGroup defaultValue={['central']}>
                {[
                    { value: 'central', label: 'Central Texas' },
                    { value: 'coast', label: 'Gulf Coast' },
                    { value: 'west', label: 'West Texas' },
                    { value: 'panhandle', label: 'Panhandle' }
                ].map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-pecan cursor-pointer select-none"
                    >
                        <CheckboxRoot name="region" value={value}>
                            <CheckboxIndicator />
                        </CheckboxRoot>
                        {label}
                    </label>
                ))}
            </CheckboxGroup>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkboxes = canvas.getAllByRole('checkbox');
        await expect(checkboxes).toHaveLength(4);
        await expect(checkboxes[0]).toBeChecked();
    }
};
