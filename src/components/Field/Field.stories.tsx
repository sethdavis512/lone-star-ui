import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import React from 'react';
import {
    FieldRoot,
    FieldLabel,
    FieldControl,
    FieldDescription,
    FieldError
} from './Field';

const meta = {
    title: 'Sparks/Field',
    component: FieldRoot,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' }
    }
} satisfies Meta<typeof FieldRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <FieldRoot className="w-72" {...args}>
            <FieldLabel>Full name</FieldLabel>
            <FieldControl
                placeholder="John Smith"
                className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
            />
        </FieldRoot>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await expect(input).toBeInTheDocument();
        await userEvent.type(input, 'Jane Doe');
        await expect(input).toHaveValue('Jane Doe');
    }
};

export const WithDescription: Story = {
    render: (args) => (
        <FieldRoot className="w-72" {...args}>
            <FieldLabel>Email address</FieldLabel>
            <FieldControl
                type="email"
                placeholder="you@example.com"
                className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
            />
            <FieldDescription>
                Used for account recovery and notifications.
            </FieldDescription>
        </FieldRoot>
    ),
    args: {}
};

export const WithValidation: Story = {
    render: (args) => (
        <FieldRoot className="w-72" {...args}>
            <FieldLabel>Username</FieldLabel>
            <FieldControl
                required
                placeholder="Required"
                className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 data-[invalid]:border-prickly-pear data-[invalid]:ring-prickly-pear"
            />
            <FieldError match="valueMissing">Username is required.</FieldError>
            <FieldDescription>
                Must be unique across all accounts.
            </FieldDescription>
        </FieldRoot>
    ),
    args: {}
};

export const Disabled: Story = {
    render: (args) => (
        <FieldRoot className="w-72" disabled {...args}>
            <FieldLabel>API key</FieldLabel>
            <FieldControl
                defaultValue="sk-••••••••••••••••"
                readOnly
                className="h-10 w-full rounded-md border border-pecan/25 bg-mesa px-3 text-sm text-pecan/50 focus:outline-none"
            />
            <FieldDescription>
                Contact support to rotate your API key.
            </FieldDescription>
        </FieldRoot>
    ),
    args: {}
};
