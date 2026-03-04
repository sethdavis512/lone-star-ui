import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta = {
    title: 'Sparks/Alert',
    component: Alert,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'info', 'warning', 'error']
        }
    }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert variant="default" className="w-96">
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
                Everything looks good out on the range.
            </AlertDescription>
        </Alert>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByRole('alert')).toBeInTheDocument();
        await expect(canvas.getByText('Heads up')).toBeInTheDocument();
    }
};

export const Info: Story = {
    render: () => (
        <Alert variant="info" className="w-96">
            <AlertTitle>Bluebonnet season is here</AlertTitle>
            <AlertDescription>
                Hit the highway on 290 toward Fredericksburg for peak wildflower
                views.
            </AlertDescription>
        </Alert>
    )
};

export const Warning: Story = {
    render: () => (
        <Alert variant="warning" className="w-96">
            <AlertTitle>Heat advisory in effect</AlertTitle>
            <AlertDescription>
                Temperatures expected to reach 108°F in the Hill Country this
                afternoon.
            </AlertDescription>
        </Alert>
    )
};

export const Error: Story = {
    render: () => (
        <Alert variant="error" className="w-96">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
                The cattle got out. Check the fence line on the south pasture.
            </AlertDescription>
        </Alert>
    )
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-3 w-96">
            <Alert variant="default">
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>
                    A standard message from the ranch.
                </AlertDescription>
            </Alert>
            <Alert variant="info">
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                    Something worth knowing out on the trail.
                </AlertDescription>
            </Alert>
            <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                    Watch out — there's weather rolling in from the west.
                </AlertDescription>
            </Alert>
            <Alert variant="error">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Something went sideways. Time to rodeo.
                </AlertDescription>
            </Alert>
        </div>
    )
};
