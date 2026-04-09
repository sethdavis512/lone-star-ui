import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { Textarea } from './Textarea';

const meta = {
    title: 'Sparks/Textarea',
    component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { placeholder: 'Enter text...' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole('textbox');
        await expect(textarea).toBeInTheDocument();
        await userEvent.type(textarea, 'hello');
        await expect(textarea).toHaveValue('hello');
    }
};

export const Error: Story = {
    args: { placeholder: 'Invalid input', variant: 'error' }
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
        const textarea = canvas.getByRole('textbox');
        await expect(textarea).toBeDisabled();
    }
};
