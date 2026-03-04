import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import {
    PopoverRoot,
    PopoverPortal,
    PopoverTrigger,
    PopoverPositioner,
    PopoverPopup,
    PopoverTitle,
    PopoverDescription,
    PopoverClose
} from './Popover';

const meta = {
    title: 'Components/Popover',
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
        const dialog = within(document.body).getByRole('dialog');
        expect(dialog).toBeVisible();
        expect(within(dialog).getByText('Notifications')).toBeVisible();
        const close = within(dialog).getByRole('button', { name: 'Dismiss' });
        await userEvent.click(close);
        expect(within(document.body).queryByRole('dialog')).toBeNull();
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
                            <a href="#" className="text-pecan/70 no-underline hover:text-pecan">
                                Profile settings
                            </a>
                            <a href="#" className="text-pecan/70 no-underline hover:text-pecan">
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
