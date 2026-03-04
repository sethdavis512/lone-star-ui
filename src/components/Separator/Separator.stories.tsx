import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import { SeparatorRoot } from './Separator';

const meta = {
    title: 'Sparks/Separator',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Horizontal: Story = {
    render: () => (
        <div className="w-64">
            <p className="text-sm text-pecan">Above the line</p>
            <SeparatorRoot className="my-3" />
            <p className="text-sm text-pecan">Below the line</p>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const separator = canvas.getByRole('separator');
        await expect(separator).toBeInTheDocument();
    }
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-8 items-center gap-3 text-sm text-pecan">
            <span>Home</span>
            <SeparatorRoot orientation="vertical" />
            <span>About</span>
            <SeparatorRoot orientation="vertical" />
            <span>Contact</span>
        </div>
    )
};

export const InNav: Story = {
    render: () => (
        <nav className="flex items-center gap-4 text-sm">
            <a href="#" className="font-medium text-pecan hover:text-pecan/70">
                Docs
            </a>
            <a href="#" className="text-pecan/60 hover:text-pecan">
                Blog
            </a>
            <a href="#" className="text-pecan/60 hover:text-pecan">
                Examples
            </a>
            <SeparatorRoot orientation="vertical" className="mx-1 h-5" />
            <a href="#" className="text-pecan/60 hover:text-pecan">
                GitHub
            </a>
        </nav>
    )
};
