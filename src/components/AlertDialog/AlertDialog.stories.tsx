import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
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
} from './AlertDialog';

const meta = {
    title: 'Components/AlertDialog',
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

function AlertDialogDemo({
    triggerLabel = 'Delete Item',
    title = 'Are you sure?',
    description = 'This action cannot be undone.',
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
                        <AlertDialogDescription>{description}</AlertDialogDescription>
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
        const dialog = within(document.body).getByRole('alertdialog');
        expect(dialog).toBeVisible();
        expect(within(dialog).getByText('Are you sure?')).toBeVisible();
        const cancel = within(dialog).getByRole('button', { name: 'Cancel' });
        await userEvent.click(cancel);
        expect(within(document.body).queryByRole('alertdialog')).toBeNull();
    },
};

export const DiscardDraft: StoryObj = {
    render: () => (
        <AlertDialogDemo
            triggerLabel="Discard Draft"
            title="Discard draft?"
            description="You have unsaved changes. Discarding will permanently delete your draft."
        />
    ),
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
        const dialog = within(document.body).getByRole('alertdialog');
        expect(dialog).toBeVisible();
        const confirm = within(dialog).getByRole('button', { name: 'Sign Out' });
        await userEvent.click(confirm);
        expect(within(document.body).queryByRole('alertdialog')).toBeNull();
    },
};
