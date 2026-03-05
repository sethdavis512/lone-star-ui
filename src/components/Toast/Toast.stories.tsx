import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { ToastProvider, Toaster, useToastManager } from './Toast';
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
