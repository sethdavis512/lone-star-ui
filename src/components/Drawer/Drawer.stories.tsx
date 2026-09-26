import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import {
    DrawerRoot,
    DrawerPortal,
    DrawerProvider,
    DrawerIndent,
    DrawerIndentBackground,
    DrawerSwipeArea,
    createDrawerHandle,
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
                    <DrawerPopup className="box-border w-80 max-h-none h-full mb-0 rounded-none rounded-l-2xl border-r-0 px-6 py-6 [transform:translateX(var(--drawer-swipe-movement-x))] data-ending-style:[transform:translateX(calc(100%-0rem))] data-starting-style:[transform:translateX(calc(100%-0rem))]">
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

function IndentDemo() {
    const [container, setContainer] = React.useState<HTMLDivElement | null>(
        null
    );

    return (
        <DrawerProvider>
            <div ref={setContainer} className="relative w-full overflow-hidden">
                <DrawerIndentBackground />
                <DrawerIndent
                    data-testid="indent"
                    className="min-h-80 border border-pecan/15 p-4"
                >
                    <div className="flex min-h-80 flex-col items-center justify-center gap-3 text-center">
                        <p className="text-sm text-pecan/60">
                            The page scales back when the drawer opens.
                        </p>
                        <DrawerRoot modal={false}>
                            <DrawerTrigger>Open Indent Drawer</DrawerTrigger>
                            <DrawerPortal container={container}>
                                <DrawerBackdrop className="absolute" />
                                <DrawerViewport className="absolute">
                                    <DrawerPopup>
                                        <DrawerHandle />
                                        <DrawerContent>
                                            <DrawerTitle>Indented</DrawerTitle>
                                            <DrawerDescription>
                                                The content behind this drawer
                                                is scaled down while it is open.
                                            </DrawerDescription>
                                            <div className="flex justify-end">
                                                <DrawerClose>Close</DrawerClose>
                                            </div>
                                        </DrawerContent>
                                    </DrawerPopup>
                                </DrawerViewport>
                            </DrawerPortal>
                        </DrawerRoot>
                    </div>
                </DrawerIndent>
            </div>
        </DrawerProvider>
    );
}

export const Indent: StoryObj = {
    render: () => <IndentDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const indent = canvas.getByTestId('indent');
        expect(indent).not.toHaveAttribute('data-active');
        await userEvent.click(
            canvas.getByRole('button', { name: 'Open Indent Drawer' })
        );
        const dialog = await within(document.body).findByRole('dialog');
        expect(dialog).toBeVisible();
        await waitFor(() => expect(indent).toHaveAttribute('data-active'));
        // The indent scales down to 0.98 once the drawer is open
        await waitFor(() =>
            expect(getComputedStyle(indent).transform).toMatch(
                /^matrix\(0\.98, 0, 0, 0\.98,/
            )
        );
        await userEvent.click(
            within(dialog).getByRole('button', { name: 'Close' })
        );
        await waitFor(() => expect(indent).not.toHaveAttribute('data-active'));
    }
};

function SwipeAreaDemo() {
    const [container, setContainer] = React.useState<HTMLDivElement | null>(
        null
    );

    return (
        <div
            ref={setContainer}
            className="relative min-h-80 w-full overflow-hidden border border-pecan/15 bg-surface text-pecan"
        >
            <DrawerRoot swipeDirection="right" modal={false}>
                <DrawerSwipeArea
                    data-testid="swipe-area"
                    className="absolute border-l-2 border-dashed border-sky bg-sky/10"
                >
                    <span className="pointer-events-none absolute right-0 top-1/2 mr-2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-sky">
                        Swipe here
                    </span>
                </DrawerSwipeArea>
                <div className="flex min-h-80 flex-col items-center justify-center gap-3 p-4 pr-14 text-center">
                    <p className="text-sm text-pecan/60">
                        Swipe from the right edge to open the drawer.
                    </p>
                    <DrawerTrigger>Open Library</DrawerTrigger>
                </div>
                <DrawerPortal container={container}>
                    <DrawerBackdrop className="absolute" />
                    <DrawerViewport className="absolute items-stretch justify-end">
                        <DrawerPopup className="box-border mb-0 h-full max-h-none w-80 rounded-none rounded-l-2xl border-r-0 border-b px-6 py-6 [transform:translateX(var(--drawer-swipe-movement-x))] data-ending-style:[transform:translateX(100%)] data-starting-style:[transform:translateX(100%)]">
                            <DrawerContent className="max-w-none">
                                <DrawerTitle>Library</DrawerTitle>
                                <DrawerDescription>
                                    Swipe from the edge whenever you want to
                                    jump back into your playlists.
                                </DrawerDescription>
                                <div className="flex justify-end">
                                    <DrawerClose>Close</DrawerClose>
                                </div>
                            </DrawerContent>
                        </DrawerPopup>
                    </DrawerViewport>
                </DrawerPortal>
            </DrawerRoot>
        </div>
    );
}

export const SwipeArea: StoryObj = {
    render: () => <SwipeAreaDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const swipeArea = canvas.getByTestId('swipe-area');
        // Opens by swiping left, the opposite of the root's dismiss direction
        expect(swipeArea).toHaveAttribute('data-swipe-direction', 'left');
        expect(swipeArea).toHaveAttribute('data-closed');
        await userEvent.click(
            canvas.getByRole('button', { name: 'Open Library' })
        );
        const dialog = await within(document.body).findByRole('dialog');
        expect(dialog).toBeVisible();
        await waitFor(() => expect(swipeArea).toHaveAttribute('data-open'));
        await userEvent.click(
            within(dialog).getByRole('button', { name: 'Close' })
        );
    }
};

type DetachedPayload = { title: string; description: string };

function DetachedTriggerDemo() {
    const [handle] = React.useState(() =>
        createDrawerHandle<DetachedPayload>()
    );

    return (
        <div className="flex gap-2">
            <DrawerTrigger
                handle={handle}
                payload={{
                    title: 'Profile',
                    description: 'Update your name, photo, and bio.'
                }}
            >
                Profile
            </DrawerTrigger>
            <DrawerTrigger
                handle={handle}
                payload={{
                    title: 'Settings',
                    description: 'Tune notifications and privacy.'
                }}
            >
                Settings
            </DrawerTrigger>
            <DrawerRoot handle={handle}>
                {({ payload }) => (
                    <DrawerPortal>
                        <DrawerBackdrop />
                        <DrawerViewport>
                            <DrawerPopup>
                                <DrawerHandle />
                                <DrawerContent>
                                    <DrawerTitle>{payload?.title}</DrawerTitle>
                                    <DrawerDescription>
                                        {payload?.description}
                                    </DrawerDescription>
                                    <div className="flex justify-end">
                                        <DrawerClose>Close</DrawerClose>
                                    </div>
                                </DrawerContent>
                            </DrawerPopup>
                        </DrawerViewport>
                    </DrawerPortal>
                )}
            </DrawerRoot>
        </div>
    );
}

export const DetachedTrigger: StoryObj = {
    render: () => <DetachedTriggerDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const body = within(document.body);

        await userEvent.click(canvas.getByRole('button', { name: 'Profile' }));
        const profileDialog = await body.findByRole('dialog');
        expect(within(profileDialog).getByText('Profile')).toBeVisible();
        await userEvent.click(
            within(profileDialog).getByRole('button', { name: 'Close' })
        );
        await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());

        await userEvent.click(canvas.getByRole('button', { name: 'Settings' }));
        const settingsDialog = await body.findByRole('dialog');
        expect(within(settingsDialog).getByText('Settings')).toBeVisible();
        await userEvent.click(
            within(settingsDialog).getByRole('button', { name: 'Close' })
        );
    }
};
