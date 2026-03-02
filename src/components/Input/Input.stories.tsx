import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'error']
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' }
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { placeholder: 'Enter text...' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await expect(input).toBeInTheDocument();
        await userEvent.type(input, 'hello');
        await expect(input).toHaveValue('hello');
    },
};

export const Error: Story = {
    args: { placeholder: 'Invalid input', variant: 'error' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await expect(input).toHaveClass('border-red-500');
    },
};

export const Small: Story = {
    args: { placeholder: 'Small', size: 'sm' }
};

export const Large: Story = {
    args: { placeholder: 'Large', size: 'lg' }
};

export const Disabled: Story = {
    args: { placeholder: 'Disabled', disabled: true },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await expect(input).toBeDisabled();
    },
};
