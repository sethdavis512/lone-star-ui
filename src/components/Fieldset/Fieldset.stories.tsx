import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import React from 'react';
import { FieldsetRoot, FieldsetLegend } from './Fieldset';
import { FieldRoot, FieldLabel, FieldControl } from '../Field/Field';

const meta = {
    title: 'Components/Fieldset',
    component: FieldsetRoot,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
} satisfies Meta<typeof FieldsetRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <FieldsetRoot className="w-80" {...args}>
            <FieldsetLegend>Billing details</FieldsetLegend>

            <FieldRoot>
                <FieldLabel>Company name</FieldLabel>
                <FieldControl
                    placeholder="Lone Star Inc."
                    className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
                />
            </FieldRoot>

            <FieldRoot>
                <FieldLabel>Tax ID</FieldLabel>
                <FieldControl
                    placeholder="XX-XXXXXXX"
                    className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
                />
            </FieldRoot>

            <FieldRoot>
                <FieldLabel>Billing address</FieldLabel>
                <FieldControl
                    placeholder="1600 Congress Ave, Austin TX"
                    className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
                />
            </FieldRoot>
        </FieldsetRoot>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputs = canvas.getAllByRole('textbox');
        await expect(inputs).toHaveLength(3);
    },
};

export const ContactInfo: Story = {
    render: () => (
        <FieldsetRoot className="w-80">
            <FieldsetLegend>Contact information</FieldsetLegend>

            <div className="grid grid-cols-2 gap-4">
                <FieldRoot>
                    <FieldLabel>First name</FieldLabel>
                    <FieldControl
                        placeholder="Sam"
                        className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
                    />
                </FieldRoot>

                <FieldRoot>
                    <FieldLabel>Last name</FieldLabel>
                    <FieldControl
                        placeholder="Houston"
                        className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
                    />
                </FieldRoot>
            </div>

            <FieldRoot>
                <FieldLabel>Email</FieldLabel>
                <FieldControl
                    type="email"
                    placeholder="sam@texas.gov"
                    className="h-10 w-full rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan placeholder:text-pecan/40 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2"
                />
            </FieldRoot>
        </FieldsetRoot>
    ),
};
