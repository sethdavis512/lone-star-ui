import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, waitFor } from 'storybook/test';
import {
    AlertDialogRoot,
    AlertDialogPortal,
    AlertDialogBackdrop,
    AlertDialogViewport,
    AlertDialogPopup,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogClose,
    AlertDialogTrigger,
    createAlertDialogHandle
} from './AlertDialog';

const meta = {
    title: 'Sparks/AlertDialog',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

function AlertDialogDemo({
    triggerLabel = 'Delete Item',
    title = 'Are you sure?',
    description = 'This action cannot be undone.'
}: {
    triggerLabel?: string;
    title?: string;
    description?: string;
}) {
    return (
        <AlertDialogRoot>
            <AlertDialogTrigger>{triggerLabel}</AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogBackdrop />
                <AlertDialogViewport>
                    <AlertDialogPopup>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {description}
                        </AlertDialogDescription>
                        <div className="flex justify-end gap-2">
                            <AlertDialogClose className="border-pecan/25 text-pecan hover:bg-mesa">
                                Cancel
                            </AlertDialogClose>
                            <AlertDialogClose>Confirm</AlertDialogClose>
                        </div>
                    </AlertDialogPopup>
                </AlertDialogViewport>
            </AlertDialogPortal>
        </AlertDialogRoot>
    );
}

export const Default: StoryObj = {
    render: () => <AlertDialogDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Delete Item' });
        await userEvent.click(trigger);
        const dialog = await within(document.body).findByRole('alertdialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Are you sure?')).toBeVisible();
        const cancel = within(dialog).getByRole('button', { name: 'Cancel' });
        await userEvent.click(cancel);
        await waitFor(() =>
            expect(
                within(document.body).queryByRole('alertdialog')
            ).toBeNull()
        );
    }
};

export const DiscardDraft: StoryObj = {
    render: () => (
        <AlertDialogDemo
            triggerLabel="Discard Draft"
            title="Discard draft?"
            description="You have unsaved changes. Discarding will permanently delete your draft."
        />
    )
};

export const SignOut: StoryObj = {
    render: () => (
        <AlertDialogRoot>
            <AlertDialogTrigger className="border-pecan/25 text-pecan hover:bg-mesa">
                Sign Out
            </AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogBackdrop />
                <AlertDialogViewport>
                    <AlertDialogPopup>
                        <AlertDialogTitle>Sign out?</AlertDialogTitle>
                        <AlertDialogDescription>
                            You'll need to sign in again to access your account.
                        </AlertDialogDescription>
                        <div className="flex justify-end gap-2">
                            <AlertDialogClose className="border-pecan/25 text-pecan hover:bg-mesa">
                                Cancel
                            </AlertDialogClose>
                            <AlertDialogClose>Sign Out</AlertDialogClose>
                        </div>
                    </AlertDialogPopup>
                </AlertDialogViewport>
            </AlertDialogPortal>
        </AlertDialogRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Sign Out' });
        await userEvent.click(trigger);
        const dialog = await within(document.body).findByRole('alertdialog');
        await waitFor(() => expect(dialog).toBeVisible());
        const confirm = within(dialog).getByRole('button', {
            name: 'Sign Out'
        });
        await userEvent.click(confirm);
        await waitFor(() =>
            expect(
                within(document.body).queryByRole('alertdialog')
            ).toBeNull()
        );
    }
};

type DetachedAlertPayload = { title: string; confirmLabel: string };

const detachedAlertDialog = createAlertDialogHandle<DetachedAlertPayload>();

export const DetachedTriggers: StoryObj = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <AlertDialogTrigger
                handle={detachedAlertDialog}
                payload={{ title: 'Delete file?', confirmLabel: 'Delete' }}
            >
                Delete file
            </AlertDialogTrigger>
            <AlertDialogTrigger
                handle={detachedAlertDialog}
                payload={{ title: 'Archive file?', confirmLabel: 'Archive' }}
            >
                Archive file
            </AlertDialogTrigger>
            <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2"
                onClick={() =>
                    detachedAlertDialog.openWithPayload({
                        title: 'Empty trash?',
                        confirmLabel: 'Empty'
                    })
                }
            >
                Open imperatively
            </button>
            <AlertDialogRoot handle={detachedAlertDialog}>
                {({ payload }) => (
                    <AlertDialogPortal>
                        <AlertDialogBackdrop />
                        <AlertDialogViewport>
                            <AlertDialogPopup>
                                <AlertDialogTitle>
                                    {payload?.title}
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone.
                                </AlertDialogDescription>
                                <div className="flex justify-end gap-2">
                                    <AlertDialogClose>Cancel</AlertDialogClose>
                                    <AlertDialogClose className="border-prickly-pear/40 text-prickly-pear hover:bg-prickly-pear/5">
                                        {payload?.confirmLabel}
                                    </AlertDialogClose>
                                </div>
                            </AlertDialogPopup>
                        </AlertDialogViewport>
                    </AlertDialogPortal>
                )}
            </AlertDialogRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const body = within(document.body);

        await userEvent.click(
            canvas.getByRole('button', { name: 'Archive file' })
        );
        let dialog = await body.findByRole('alertdialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Archive file?')).toBeVisible();
        expect(
            within(dialog).getByRole('button', { name: 'Archive' })
        ).toBeVisible();
        await userEvent.click(
            within(dialog).getByRole('button', { name: 'Cancel' })
        );
        await waitFor(() =>
            expect(body.queryByRole('alertdialog')).toBeNull()
        );

        await userEvent.click(
            canvas.getByRole('button', { name: 'Open imperatively' })
        );
        dialog = await body.findByRole('alertdialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Empty trash?')).toBeVisible();
        await userEvent.click(
            within(dialog).getByRole('button', { name: 'Cancel' })
        );
        await waitFor(() =>
            expect(body.queryByRole('alertdialog')).toBeNull()
        );
    }
};
