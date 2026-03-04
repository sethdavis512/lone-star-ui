import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import React from 'react';
import { RadioGroup, RadioRoot, RadioIndicator } from './Radio';

const meta = {
    title: 'Sparks/Radio',
    component: RadioGroup,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' }
    }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const texasOptions = [
    { value: 'austin', label: 'Austin' },
    { value: 'houston', label: 'Houston' },
    { value: 'dallas', label: 'Dallas' },
    { value: 'san-antonio', label: 'San Antonio' }
];

export const Default: Story = {
    render: (args) => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-pecan mb-1">
                Favorite Texas city
            </p>
            <RadioGroup defaultValue="austin" {...args}>
                {texasOptions.map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-pecan cursor-pointer select-none"
                    >
                        <RadioRoot value={value}>
                            <RadioIndicator />
                        </RadioRoot>
                        {label}
                    </label>
                ))}
            </RadioGroup>
        </div>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const radios = canvas.getAllByRole('radio');
        await expect(radios).toHaveLength(4);
        await expect(radios[0]).toBeChecked();
    }
};

export const Disabled: Story = {
    render: (args) => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-pecan/50 mb-1">
                Favorite Texas city
            </p>
            <RadioGroup defaultValue="austin" disabled {...args}>
                {texasOptions.map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-pecan/50 cursor-not-allowed select-none"
                    >
                        <RadioRoot value={value}>
                            <RadioIndicator />
                        </RadioRoot>
                        {label}
                    </label>
                ))}
            </RadioGroup>
        </div>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const radios = canvas.getAllByRole('radio');
        await expect(radios[0]).toBeDisabled();
    }
};

export const Horizontal: Story = {
    render: (args) => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-pecan mb-1">Trip type</p>
            <RadioGroup
                defaultValue="one-way"
                className="flex flex-row gap-4"
                {...args}
            >
                {[
                    { value: 'one-way', label: 'One-way' },
                    { value: 'round-trip', label: 'Round trip' },
                    { value: 'multi-city', label: 'Multi-city' }
                ].map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-pecan cursor-pointer select-none"
                    >
                        <RadioRoot value={value}>
                            <RadioIndicator />
                        </RadioRoot>
                        {label}
                    </label>
                ))}
            </RadioGroup>
        </div>
    ),
    args: {}
};
