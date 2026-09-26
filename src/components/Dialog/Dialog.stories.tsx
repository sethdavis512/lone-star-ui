import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, waitFor } from 'storybook/test';
import {
    DialogRoot,
    DialogPortal,
    DialogBackdrop,
    DialogViewport,
    DialogPopup,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogTrigger,
    createDialogHandle
} from './Dialog';

const meta = {
    title: 'Sparks/Dialog',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

function DialogDemo({
    title = 'Example Dialog',
    description = 'This is a dialog. You can put any content here.',
    confirmLabel = 'Confirm'
}: {
    title?: string;
    description?: string;
    confirmLabel?: string;
}) {
    return (
        <DialogRoot>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogPortal>
                <DialogBackdrop />
                <DialogViewport>
                    <DialogPopup>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                        <div className="flex justify-end gap-2">
                            <DialogClose>{confirmLabel}</DialogClose>
                        </div>
                    </DialogPopup>
                </DialogViewport>
            </DialogPortal>
        </DialogRoot>
    );
}

export const Default: StoryObj = {
    render: () => <DialogDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Open Dialog' });
        await userEvent.click(trigger);
        const dialog = await within(document.body).findByRole('dialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Example Dialog')).toBeVisible();
        const close = within(dialog).getByRole('button', { name: 'Confirm' });
        await userEvent.click(close);
        await waitFor(() =>
            expect(within(document.body).queryByRole('dialog')).toBeNull()
        );
    }
};

export const WithCustomContent: StoryObj = {
    render: () => (
        <DialogRoot>
            <DialogTrigger>Open Settings</DialogTrigger>
            <DialogPortal>
                <DialogBackdrop />
                <DialogViewport>
                    <DialogPopup>
                        <DialogTitle>Settings</DialogTitle>
                        <DialogDescription>
                            Manage your account preferences below.
                        </DialogDescription>
                        <div className="mb-6 space-y-3">
                            <label className="flex items-center gap-3 text-sm text-pecan">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="rounded"
                                />
                                Enable notifications
                            </label>
                            <label className="flex items-center gap-3 text-sm text-pecan">
                                <input type="checkbox" className="rounded" />
                                Dark mode
                            </label>
                        </div>
                        <div className="flex justify-end gap-2">
                            <DialogClose>Cancel</DialogClose>
                            <DialogClose className="bg-sky text-white border-sky hover:bg-sky/90">
                                Save
                            </DialogClose>
                        </div>
                    </DialogPopup>
                </DialogViewport>
            </DialogPortal>
        </DialogRoot>
    )
};

export const DestructiveAction: StoryObj = {
    render: () => (
        <DialogRoot>
            <DialogTrigger className="border-prickly-pear/40 text-prickly-pear hover:bg-prickly-pear/5">
                Delete Account
            </DialogTrigger>
            <DialogPortal>
                <DialogBackdrop />
                <DialogViewport>
                    <DialogPopup>
                        <DialogTitle>Delete Account?</DialogTitle>
                        <DialogDescription>
                            This will permanently delete your account and all
                            associated data. This action cannot be undone.
                        </DialogDescription>
                        <div className="flex justify-end gap-2">
                            <DialogClose>Cancel</DialogClose>
                            <DialogClose className="border-prickly-pear/40 text-prickly-pear hover:bg-prickly-pear/5">
                                Delete
                            </DialogClose>
                        </div>
                    </DialogPopup>
                </DialogViewport>
            </DialogPortal>
        </DialogRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Delete Account' });
        await userEvent.click(trigger);
        const dialog = await within(document.body).findByRole('dialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Delete Account?')).toBeVisible();
        const cancel = within(dialog).getByRole('button', { name: 'Cancel' });
        await userEvent.click(cancel);
    }
};

export const Nested: StoryObj = {
    render: () => (
        <DialogRoot>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogPortal>
                <DialogBackdrop />
                <DialogViewport>
                    <DialogPopup>
                        <DialogTitle>Outer Dialog</DialogTitle>
                        <DialogDescription>
                            You can open another dialog on top of this one.
                        </DialogDescription>
                        <div className="mb-4">
                            <DialogRoot>
                                <DialogTrigger>
                                    Open Nested Dialog
                                </DialogTrigger>
                                <DialogPortal>
                                    <DialogBackdrop />
                                    <DialogViewport>
                                        <DialogPopup>
                                            <DialogTitle>
                                                Nested Dialog
                                            </DialogTitle>
                                            <DialogDescription>
                                                This is a nested dialog.
                                            </DialogDescription>
                                            <div className="flex justify-end">
                                                <DialogClose>Close</DialogClose>
                                            </div>
                                        </DialogPopup>
                                    </DialogViewport>
                                </DialogPortal>
                            </DialogRoot>
                        </div>
                        <div className="flex justify-end">
                            <DialogClose>Close</DialogClose>
                        </div>
                    </DialogPopup>
                </DialogViewport>
            </DialogPortal>
        </DialogRoot>
    )
};

type DetachedDialogPayload = { title: string; description: string };

const detachedDialog = createDialogHandle<DetachedDialogPayload>();

export const DetachedTriggers: StoryObj = {
    render: () => (
        <div className="flex gap-2">
            <DialogTrigger
                handle={detachedDialog}
                payload={{
                    title: 'Edit profile',
                    description: 'Update your name, photo, and bio.'
                }}
            >
                Edit profile
            </DialogTrigger>
            <DialogTrigger
                handle={detachedDialog}
                payload={{
                    title: 'Invite teammate',
                    description: 'Send an invite link to a new teammate.'
                }}
            >
                Invite teammate
            </DialogTrigger>
            <DialogRoot handle={detachedDialog}>
                {({ payload }) => (
                    <DialogPortal>
                        <DialogBackdrop />
                        <DialogViewport>
                            <DialogPopup>
                                <DialogTitle>{payload?.title}</DialogTitle>
                                <DialogDescription>
                                    {payload?.description}
                                </DialogDescription>
                                <div className="flex justify-end gap-2">
                                    <DialogClose>Close</DialogClose>
                                </div>
                            </DialogPopup>
                        </DialogViewport>
                    </DialogPortal>
                )}
            </DialogRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const body = within(document.body);

        await userEvent.click(
            canvas.getByRole('button', { name: 'Invite teammate' })
        );
        let dialog = await body.findByRole('dialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Invite teammate')).toBeVisible();
        await userEvent.click(
            within(dialog).getByRole('button', { name: 'Close' })
        );
        await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());

        await userEvent.click(
            canvas.getByRole('button', { name: 'Edit profile' })
        );
        dialog = await body.findByRole('dialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Edit profile')).toBeVisible();
        expect(
            within(dialog).getByText('Update your name, photo, and bio.')
        ).toBeVisible();
        await userEvent.click(
            within(dialog).getByRole('button', { name: 'Close' })
        );
        await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
    }
};
