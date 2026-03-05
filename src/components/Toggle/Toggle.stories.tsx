import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleRoot } from './Toggle';

const meta: Meta = {
    title: 'Sparks/Toggle',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <ToggleRoot aria-label="Bold">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className="h-4 w-4"
                aria-hidden
            >
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
            </svg>
        </ToggleRoot>
    )
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <ToggleRoot aria-label="Toggle bold">Bold</ToggleRoot>
            <ToggleRoot aria-label="Toggle italic">Italic</ToggleRoot>
            <ToggleRoot aria-label="Toggle underline">Underline</ToggleRoot>
        </div>
    )
};

export const Pressed: Story = {
    render: () => (
        <ToggleRoot defaultPressed aria-label="Bold">
            Bold
        </ToggleRoot>
    )
};

export const Disabled: Story = {
    render: () => (
        <ToggleRoot disabled aria-label="Bold">
            Bold
        </ToggleRoot>
    )
};
