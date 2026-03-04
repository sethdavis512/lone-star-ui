import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';
import { Button } from '../Button/Button';

const meta = {
    title: 'Sparks/Card',
    component: Card,
    parameters: { layout: 'centered' },
    tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500">Card content goes here.</p>
            </CardContent>
            <CardFooter>
                <Button size="sm">Action</Button>
            </CardFooter>
        </Card>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('Card Title')).toBeInTheDocument();
        await expect(
            canvas.getByText('Card content goes here.')
        ).toBeInTheDocument();
        await userEvent.click(canvas.getByRole('button', { name: 'Action' }));
    }
};

export const Simple: Story = {
    render: () => (
        <Card className="w-80">
            <CardContent>
                <p className="text-sm text-gray-500">
                    A simple card with just content.
                </p>
            </CardContent>
        </Card>
    )
};
