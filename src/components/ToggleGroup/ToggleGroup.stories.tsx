import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroupRoot } from './ToggleGroup';
import { ToggleRoot } from '../Toggle';

const meta: Meta = {
    title: 'Sparks/ToggleGroup',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <ToggleGroupRoot aria-label="Text alignment">
            <ToggleRoot value="left" aria-label="Left align">
                Left
            </ToggleRoot>
            <ToggleRoot value="center" aria-label="Center align">
                Center
            </ToggleRoot>
            <ToggleRoot value="right" aria-label="Right align">
                Right
            </ToggleRoot>
        </ToggleGroupRoot>
    )
};

export const Multiple: Story = {
    render: () => (
        <ToggleGroupRoot multiple aria-label="Text formatting">
            <ToggleRoot value="bold" aria-label="Bold">
                B
            </ToggleRoot>
            <ToggleRoot value="italic" aria-label="Italic">
                I
            </ToggleRoot>
            <ToggleRoot value="underline" aria-label="Underline">
                U
            </ToggleRoot>
        </ToggleGroupRoot>
    )
};
