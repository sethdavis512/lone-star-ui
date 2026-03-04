import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Badge } from './Badge';

const meta = {
    title: 'Sparks/Badge',
    component: Badge,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'sky',
                'longhorn',
                'pecan',
                'bluebonnet',
                'prickly-pear',
                'outline'
            ]
        }
    }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sky: Story = {
    args: { children: 'Sky', variant: 'sky' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('Sky')).toBeInTheDocument();
    }
};

export const Longhorn: Story = {
    args: { children: 'Longhorn', variant: 'longhorn' }
};

export const Pecan: Story = {
    args: { children: 'Pecan', variant: 'pecan' }
};

export const Bluebonnet: Story = {
    args: { children: 'Bluebonnet', variant: 'bluebonnet' }
};

export const PricklyPear: Story = {
    args: { children: 'Prickly Pear', variant: 'prickly-pear' }
};

export const Outline: Story = {
    args: { children: 'Outline', variant: 'outline' }
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge variant="sky">Sky</Badge>
            <Badge variant="longhorn">Longhorn</Badge>
            <Badge variant="pecan">Pecan</Badge>
            <Badge variant="bluebonnet">Bluebonnet</Badge>
            <Badge variant="prickly-pear">Prickly Pear</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    )
};
