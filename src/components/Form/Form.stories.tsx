import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormRoot } from './Form';
import {
    FieldRoot,
    FieldLabel,
    FieldControl,
    FieldDescription,
    FieldError
} from '../Field';
import { Input } from '../Input';
import { Button } from '../Button';

const meta: Meta = {
    title: 'Sparks/Form',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <FormRoot className="w-80">
            <FieldRoot name="name">
                <FieldLabel>Full name</FieldLabel>
                <FieldControl render={<Input placeholder="Jane Smith" />} />
                <FieldDescription>Your display name.</FieldDescription>
                <FieldError />
            </FieldRoot>
            <FieldRoot name="email">
                <FieldLabel>Email</FieldLabel>
                <FieldControl
                    render={
                        <Input type="email" placeholder="jane@example.com" />
                    }
                />
                <FieldError />
            </FieldRoot>
            <Button type="submit" className="w-full">
                Submit
            </Button>
        </FormRoot>
    )
};
