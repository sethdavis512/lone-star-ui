import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import {
    ToastProvider,
    ToastPortal,
    ToastViewport,
    ToastPositioner,
    ToastRoot,
    ToastArrow,
    ToastContent,
    ToastDescription,
    Toaster,
    useToastManager
} from './Toast';
import { Button } from '../Button';

const meta: Meta = {
    title: 'Sparks/Toast',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

function ToastDemo({
    title,
    description
}: {
    title: string;
    description?: string;
}) {
    const { add } = useToastManager();
    return (
        <Button onClick={() => add({ title, description })}>Show Toast</Button>
    );
}

export const Default: Story = {
    render: () => (
        <ToastProvider>
            <ToastDemo
                title="Saved successfully"
                description="Your changes have been saved."
            />
            <Toaster />
        </ToastProvider>
    )
};

export const TitleOnly: Story = {
    render: () => (
        <ToastProvider>
            <ToastDemo title="Copied to clipboard" />
            <Toaster />
        </ToastProvider>
    )
};

export const WithAction: Story = {
    render: () => {
        function Demo() {
            const { add } = useToastManager();
            return (
                <Button
                    onClick={() =>
                        add({
                            title: 'Item deleted',
                            description: 'The item has been removed.',
                            actionProps: {
                                children: 'Undo',
                                onClick: () => alert('Undone!')
                            }
                        })
                    }
                >
                    Delete Item
                </Button>
            );
        }
        return (
            <ToastProvider>
                <Demo />
                <Toaster />
            </ToastProvider>
        );
    }
};

export const ErrorType: Story = {
    render: () => {
        function Demo() {
            const { add } = useToastManager();
            return (
                <Button
                    variant="destructive"
                    onClick={() =>
                        add({
                            title: 'Upload failed',
                            description:
                                'The file could not be uploaded. Please try again.',
                            type: 'error'
                        })
                    }
                >
                    Trigger Error
                </Button>
            );
        }
        return (
            <ToastProvider>
                <Demo />
                <Toaster />
            </ToastProvider>
        );
    }
};

function AnchoredToasts() {
    const { toasts } = useToastManager();
    return (
        <ToastPortal>
            <ToastViewport className="static w-auto p-0 outline-none">
                {toasts.map((toast) => (
                    <ToastPositioner key={toast.id} toast={toast}>
                        <ToastRoot
                            toast={toast}
                            className="w-max rounded-md px-3 py-1.5"
                        >
                            <ToastArrow data-testid="toast-arrow">
                                <svg
                                    width="20"
                                    height="10"
                                    viewBox="0 0 20 10"
                                    fill="none"
                                    aria-hidden
                                >
                                    <path
                                        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                                        className="fill-surface"
                                    />
                                </svg>
                            </ToastArrow>
                            <ToastContent>
                                <ToastDescription>
                                    {toast.description}
                                </ToastDescription>
                            </ToastContent>
                        </ToastRoot>
                    </ToastPositioner>
                ))}
            </ToastViewport>
        </ToastPortal>
    );
}

function CopyButton() {
    const { add } = useToastManager();
    return (
        <Button
            onClick={(event) =>
                add({
                    description: 'Copied',
                    positionerProps: {
                        anchor: event.currentTarget,
                        side: 'top',
                        sideOffset: 10
                    }
                })
            }
        >
            Copy to clipboard
        </Button>
    );
}

export const AnchoredWithArrow: Story = {
    render: () => (
        <ToastProvider>
            <CopyButton />
            <AnchoredToasts />
        </ToastProvider>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(
            canvas.getByRole('button', { name: 'Copy to clipboard' })
        );
        const body = within(document.body);
        await body.findByText('Copied', undefined, { timeout: 3000 });
        // The toast prefers the top side but may flip when there is no room,
        // so only assert that the arrow was positioned against the anchor.
        const arrow = await body.findByTestId('toast-arrow');
        await expect(arrow).toHaveAttribute('data-side');
    }
};
