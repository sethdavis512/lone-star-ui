import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import {
    DrawerRoot,
    DrawerPortal,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerViewport,
    DrawerPopup,
    DrawerContent,
    DrawerHandle,
    DrawerTitle,
    DrawerDescription,
    DrawerClose
} from './Drawer';

const meta = {
    title: 'Sparks/Drawer',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

function BottomDrawerDemo() {
    return (
        <DrawerRoot>
            <DrawerTrigger>Open Drawer</DrawerTrigger>
            <DrawerPortal>
                <DrawerBackdrop />
                <DrawerViewport>
                    <DrawerPopup>
                        <DrawerHandle />
                        <DrawerContent>
                            <DrawerTitle>Drawer Title</DrawerTitle>
                            <DrawerDescription>
                                Swipe down or click the button below to close
                                this drawer.
                            </DrawerDescription>
                            <div className="flex justify-end">
                                <DrawerClose>Close</DrawerClose>
                            </div>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerViewport>
            </DrawerPortal>
        </DrawerRoot>
    );
}

export const Default: StoryObj = {
    render: () => <BottomDrawerDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Open Drawer' });
        await userEvent.click(trigger);
        const dialog = within(document.body).getByRole('dialog');
        expect(dialog).toBeVisible();
        expect(within(dialog).getByText('Drawer Title')).toBeVisible();
        const close = within(dialog).getByRole('button', { name: 'Close' });
        await userEvent.click(close);
    }
};

export const RightSide: StoryObj = {
    render: () => (
        <DrawerRoot swipeDirection="right">
            <DrawerTrigger>Open Side Drawer</DrawerTrigger>
            <DrawerPortal>
                <DrawerBackdrop />
                <DrawerViewport className="fixed inset-0 flex items-stretch justify-end">
                    <DrawerPopup className="box-border w-80 max-h-none h-full mb-0 rounded-none rounded-l-2xl border-r-0 px-6 py-6 [transform:translateX(var(--drawer-swipe-movement-x))] data-[ending-style]:[transform:translateX(calc(100%-0rem))] data-[starting-style]:[transform:translateX(calc(100%-0rem))]">
                        <DrawerContent className="max-w-none">
                            <DrawerTitle>Side Drawer</DrawerTitle>
                            <DrawerDescription>
                                This drawer slides in from the right side.
                            </DrawerDescription>
                            <div className="flex justify-start mt-4">
                                <DrawerClose>Close</DrawerClose>
                            </div>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerViewport>
            </DrawerPortal>
        </DrawerRoot>
    )
};

export const WithActions: StoryObj = {
    render: () => (
        <DrawerRoot>
            <DrawerTrigger>Notifications</DrawerTrigger>
            <DrawerPortal>
                <DrawerBackdrop />
                <DrawerViewport>
                    <DrawerPopup>
                        <DrawerHandle />
                        <DrawerContent>
                            <DrawerTitle>Notifications</DrawerTitle>
                            <DrawerDescription>
                                You have 3 unread notifications.
                            </DrawerDescription>
                            <ul className="mb-6 space-y-2">
                                {[
                                    'New message from Alex',
                                    'Your report is ready',
                                    'Reminder: meeting at 3pm'
                                ].map((n) => (
                                    <li
                                        key={n}
                                        className="rounded-lg border border-pecan/10 bg-mesa/30 px-3 py-2.5 text-sm text-pecan"
                                    >
                                        {n}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-end gap-2">
                                <DrawerClose className="text-pecan/60 border-pecan/15">
                                    Mark all read
                                </DrawerClose>
                                <DrawerClose>Done</DrawerClose>
                            </div>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerViewport>
            </DrawerPortal>
        </DrawerRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Notifications' });
        await userEvent.click(trigger);
        const dialog = within(document.body).getByRole('dialog');
        expect(dialog).toBeVisible();
        expect(within(dialog).getByText('Notifications')).toBeVisible();
        expect(within(dialog).getAllByRole('listitem')).toHaveLength(3);
        const close = within(dialog).getByRole('button', { name: 'Done' });
        await userEvent.click(close);
    }
};
