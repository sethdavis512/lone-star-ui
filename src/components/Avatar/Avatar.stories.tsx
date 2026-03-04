import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Avatar } from './Avatar';

const meta = {
    title: 'Sparks/Avatar',
    component: Avatar,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: [
                'sky',
                'longhorn',
                'pecan',
                'bluebonnet',
                'prickly-pear',
                'mesa'
            ]
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { initials: 'TX', color: 'sky', size: 'md' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('TX')).toBeInTheDocument();
    }
};

export const Longhorn: Story = {
    args: { initials: 'UT', color: 'longhorn', size: 'md' }
};

export const Pecan: Story = {
    args: { initials: 'PC', color: 'pecan', size: 'md' }
};

export const Bluebonnet: Story = {
    args: { initials: 'BB', color: 'bluebonnet', size: 'md' }
};

export const PricklyPear: Story = {
    args: { initials: 'PP', color: 'prickly-pear', size: 'md' }
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar initials="SM" color="sky" size="sm" />
            <Avatar initials="MD" color="sky" size="md" />
            <Avatar initials="LG" color="sky" size="lg" />
        </div>
    )
};

export const AllColors: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Avatar initials="SK" color="sky" />
            <Avatar initials="LH" color="longhorn" />
            <Avatar initials="PC" color="pecan" />
            <Avatar initials="BB" color="bluebonnet" />
            <Avatar initials="PP" color="prickly-pear" />
            <Avatar initials="MS" color="mesa" />
        </div>
    )
};
