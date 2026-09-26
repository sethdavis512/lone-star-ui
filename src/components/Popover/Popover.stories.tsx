import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, waitFor } from 'storybook/test';
import {
    PopoverRoot,
    PopoverPortal,
    PopoverTrigger,
    PopoverPositioner,
    PopoverPopup,
    PopoverViewport,
    PopoverTitle,
    PopoverDescription,
    PopoverClose,
    createPopoverHandle
} from './Popover';

const meta = {
    title: 'Sparks/Popover',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

function PopoverDemo({
    title = 'Notifications',
    description = "You're all caught up. Good job!"
}: {
    title?: string;
    description?: string;
}) {
    return (
        <PopoverRoot>
            <PopoverTrigger>Open Popover</PopoverTrigger>
            <PopoverPortal>
                <PopoverPositioner>
                    <PopoverPopup>
                        <PopoverTitle>{title}</PopoverTitle>
                        <PopoverDescription>{description}</PopoverDescription>
                        <div className="mt-4 flex justify-end">
                            <PopoverClose>Dismiss</PopoverClose>
                        </div>
                    </PopoverPopup>
                </PopoverPositioner>
            </PopoverPortal>
        </PopoverRoot>
    );
}

export const Default: StoryObj = {
    render: () => <PopoverDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Open Popover' });
        await userEvent.click(trigger);
        const dialog = await within(document.body).findByRole('dialog');
        await waitFor(() => expect(dialog).toBeVisible());
        expect(within(dialog).getByText('Notifications')).toBeVisible();
        const close = within(dialog).getByRole('button', { name: 'Dismiss' });
        await userEvent.click(close);
        await waitFor(() =>
            expect(within(document.body).queryByRole('dialog')).toBeNull()
        );
    }
};

export const RichContent: StoryObj = {
    render: () => (
        <PopoverRoot>
            <PopoverTrigger>Account</PopoverTrigger>
            <PopoverPortal>
                <PopoverPositioner>
                    <PopoverPopup className="w-64">
                        <PopoverTitle>Jason Everton</PopoverTitle>
                        <PopoverDescription className="mb-3">
                            Pro plan
                        </PopoverDescription>
                        <div className="flex flex-col gap-1 border-t border-pecan/10 pt-3 text-sm">
                            <a
                                href="#"
                                className="text-pecan/70 no-underline hover:text-pecan"
                            >
                                Profile settings
                            </a>
                            <a
                                href="#"
                                className="text-pecan/70 no-underline hover:text-pecan"
                            >
                                Log out
                            </a>
                        </div>
                    </PopoverPopup>
                </PopoverPositioner>
            </PopoverPortal>
        </PopoverRoot>
    )
};

export const OpenOnHover: StoryObj = {
    render: () => (
        <PopoverRoot>
            <PopoverTrigger openOnHover delay={200}>
                Hover me
            </PopoverTrigger>
            <PopoverPortal>
                <PopoverPositioner>
                    <PopoverPopup>
                        <PopoverTitle>Hovered!</PopoverTitle>
                        <PopoverDescription>
                            This popover opens on hover.
                        </PopoverDescription>
                    </PopoverPopup>
                </PopoverPositioner>
            </PopoverPortal>
        </PopoverRoot>
    )
};

const detachedPanels = {
    notifications: {
        title: 'Notifications',
        description: "You're all caught up. Good job!"
    },
    activity: {
        title: 'Activity',
        description: 'Three teammates commented on your pull request today.'
    }
} as const;

const detachedPopover = createPopoverHandle<keyof typeof detachedPanels>();

export const DetachedTriggers: StoryObj = {
    render: () => (
        <div className="flex gap-2">
            <PopoverTrigger handle={detachedPopover} payload="notifications">
                Notifications
            </PopoverTrigger>
            <PopoverTrigger handle={detachedPopover} payload="activity">
                Activity
            </PopoverTrigger>
            <PopoverRoot handle={detachedPopover}>
                {({ payload }) => (
                    <PopoverPortal>
                        {/* Positioner and popup size variables let the popup morph between panels */}
                        <PopoverPositioner className="h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none">
                            <PopoverPopup className="relative h-[var(--popup-height,auto)] w-[var(--popup-width,auto)] max-w-80 p-0 transition-[width,height,opacity,scale] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                                <PopoverViewport>
                                    {payload && (
                                        <div>
                                            <PopoverTitle>
                                                {detachedPanels[payload].title}
                                            </PopoverTitle>
                                            <PopoverDescription>
                                                {
                                                    detachedPanels[payload]
                                                        .description
                                                }
                                            </PopoverDescription>
                                        </div>
                                    )}
                                </PopoverViewport>
                            </PopoverPopup>
                        </PopoverPositioner>
                    </PopoverPortal>
                )}
            </PopoverRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const body = within(document.body);

        await userEvent.click(canvas.getByRole('button', { name: 'Activity' }));
        const popover = await body.findByRole('dialog');
        await waitFor(() => expect(popover).toBeVisible());
        expect(
            await within(popover).findByText(
                'Three teammates commented on your pull request today.'
            )
        ).toBeVisible();

        // Clicking another detached trigger swaps the content in place
        await userEvent.click(
            canvas.getByRole('button', { name: 'Notifications' })
        );
        const switched = await body.findByText(
            "You're all caught up. Good job!"
        );
        await waitFor(() => expect(switched).toBeVisible());
        await waitFor(() =>
            expect(
                body.queryByText(
                    'Three teammates commented on your pull request today.'
                )
            ).toBeNull()
        );

        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
    }
};
