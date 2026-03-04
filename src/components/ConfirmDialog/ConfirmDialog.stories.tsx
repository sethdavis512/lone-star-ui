import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ConfirmDialog } from './ConfirmDialog';
import { Button } from '../Button';
import { expect, fn, userEvent, within } from 'storybook/test';

const meta: Meta<typeof ConfirmDialog> = {
    title: 'Bonfire/ConfirmDialog',
    component: ConfirmDialog,
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
    args: {
        title: 'Are you sure?',
        description: 'This action cannot be undone.',
        trigger: <Button variant="outline">Open Dialog</Button>
    }
};

export const Destructive: Story = {
    args: {
        title: 'Delete contact?',
        description:
            'This will permanently delete Jesse Rodriguez and remove all associated data. This cannot be undone.',
        confirmLabel: 'Delete',
        cancelLabel: 'Keep',
        variant: 'destructive',
        trigger: (
            <Button variant="destructive" size="sm">
                Delete
            </Button>
        )
    }
};

export const NoDescription: Story = {
    args: {
        title: 'Publish this draft?',
        confirmLabel: 'Publish',
        trigger: <Button size="sm">Publish</Button>
    }
};

export const WithCallbacks: Story = {
    args: {
        title: 'Save changes?',
        description:
            'Your unsaved changes will be lost if you leave without saving.',
        confirmLabel: 'Save',
        cancelLabel: 'Discard',
        onConfirm: fn(),
        onCancel: fn(),
        trigger: <Button variant="outline">Open</Button>
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Open' }));
        const dialog = within(document.body);
        await userEvent.click(dialog.getByRole('button', { name: 'Save' }));
        await expect(args.onConfirm).toHaveBeenCalledOnce();
    }
};

function ControlledDemo() {
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState<string | null>(null);
    return (
        <div className="flex flex-col items-center gap-4">
            <Button onClick={() => setOpen(true)}>Delete account</Button>
            <ConfirmDialog
                open={open}
                onOpenChange={setOpen}
                title="Delete your account?"
                description="All of your data will be permanently removed from our servers. This action cannot be undone."
                confirmLabel="Yes, delete my account"
                cancelLabel="Never mind"
                variant="destructive"
                onConfirm={() => {
                    setOpen(false);
                    setStatus('Account deleted');
                }}
                onCancel={() => setStatus('Cancelled')}
            />
            {status && <p className="text-sm text-pecan/70">{status}</p>}
        </div>
    );
}

export const Controlled: Story = {
    render: () => <ControlledDemo />
};
