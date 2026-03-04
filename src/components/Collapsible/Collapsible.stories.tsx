import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import {
    CollapsibleRoot,
    CollapsibleTrigger,
    CollapsiblePanel
} from './Collapsible';

const meta = {
    title: 'Components/Collapsible',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <CollapsibleRoot className="flex flex-col gap-2">
            <CollapsibleTrigger>Toggle details</CollapsibleTrigger>
            <CollapsiblePanel>
                <div className="rounded-md border border-pecan/15 bg-mesa/40 p-3 text-sm text-pecan/80">
                    <p>
                        Here are the hidden details that appear when the panel
                        is open.
                    </p>
                    <p className="mt-1">You can put any content in here.</p>
                </div>
            </CollapsiblePanel>
        </CollapsibleRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Toggle details' });
        await expect(trigger).toBeInTheDocument();
    }
};

export const DefaultOpen: Story = {
    render: () => (
        <CollapsibleRoot defaultOpen className="flex flex-col gap-2">
            <CollapsibleTrigger>Hide details</CollapsibleTrigger>
            <CollapsiblePanel>
                <div className="rounded-md border border-pecan/15 bg-mesa/40 p-3 text-sm text-pecan/80">
                    <p>These details are visible by default.</p>
                </div>
            </CollapsiblePanel>
        </CollapsibleRoot>
    )
};

export const Disabled: Story = {
    render: () => (
        <CollapsibleRoot disabled className="flex flex-col gap-2">
            <CollapsibleTrigger>Cannot toggle</CollapsibleTrigger>
            <CollapsiblePanel>
                <div className="rounded-md border border-pecan/15 bg-mesa/40 p-3 text-sm text-pecan/80">
                    <p>This panel cannot be opened.</p>
                </div>
            </CollapsiblePanel>
        </CollapsibleRoot>
    )
};
