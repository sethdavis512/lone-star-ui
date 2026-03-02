import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive', 'outline', 'ghost']
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        disabled: { control: 'boolean' }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { children: 'Button', variant: 'primary' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: 'Button' });
        await expect(button).toBeInTheDocument();
        await expect(button).toHaveClass('bg-blue-600');
        await userEvent.click(button);
    }
};

export const Secondary: Story = {
    args: { children: 'Button', variant: 'secondary' }
};

export const Destructive: Story = {
    args: { children: 'Delete', variant: 'destructive' }
};

export const Outline: Story = {
    args: { children: 'Button', variant: 'outline' }
};

export const Ghost: Story = {
    args: { children: 'Button', variant: 'ghost' }
};

export const Small: Story = {
    args: { children: 'Button', size: 'sm' }
};

export const Large: Story = {
    args: { children: 'Button', size: 'lg' }
};

export const Disabled: Story = {
    args: { children: 'Button', disabled: true },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: 'Button' });
        await expect(button).toBeDisabled();
    }
};
