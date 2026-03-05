import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    NumberFieldRoot,
    NumberFieldGroup,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput
} from './NumberField';

const meta: Meta = {
    title: 'Sparks/NumberField',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <div className="space-y-1">
            <label className="text-sm font-medium text-pecan" htmlFor="qty">
                Quantity
            </label>
            <NumberFieldRoot id="qty" defaultValue={1} min={0} max={99}>
                <NumberFieldGroup>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                </NumberFieldGroup>
            </NumberFieldRoot>
        </div>
    )
};

export const WithStep: Story = {
    render: () => (
        <NumberFieldRoot defaultValue={0} step={5} min={0} max={100}>
            <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
            </NumberFieldGroup>
        </NumberFieldRoot>
    )
};

export const Disabled: Story = {
    render: () => (
        <NumberFieldRoot defaultValue={10} disabled>
            <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
            </NumberFieldGroup>
        </NumberFieldRoot>
    )
};
