import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
    ContextMenuRoot,
    ContextMenuTrigger,
    ContextMenuPortal,
    ContextMenuPositioner,
    ContextMenuPopup,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuCheckboxItem,
    ContextMenuCheckboxItemIndicator,
    ContextMenuSubmenuRoot,
    ContextMenuSubmenuTrigger
} from './ContextMenu';

const meta: Meta = {
    title: 'Sparks/ContextMenu',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj;

function CheckIcon() {
    return (
        <svg fill="currentColor" width="10" height="10" viewBox="0 0 10 10">
            <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
                d="M3.5 9L7.5 5L3.5 1"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}

export const Basic: Story = {
    render: () => (
        <ContextMenuRoot>
            <ContextMenuTrigger className="flex h-32 w-48 items-center justify-center rounded-md border border-pecan/15 text-sm text-pecan/60">
                Right-click here
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuPositioner>
                    <ContextMenuPopup>
                        <ContextMenuItem>Add to Library</ContextMenuItem>
                        <ContextMenuItem>Add to Playlist…</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Play Next</ContextMenuItem>
                        <ContextMenuItem>Play Last</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Favorite</ContextMenuItem>
                        <ContextMenuItem>Share</ContextMenuItem>
                    </ContextMenuPopup>
                </ContextMenuPositioner>
            </ContextMenuPortal>
        </ContextMenuRoot>
    )
};

function CheckboxContextMenuDemo() {
    const [showRuler, setShowRuler] = React.useState(true);
    const [showGrid, setShowGrid] = React.useState(false);
    return (
        <ContextMenuRoot>
            <ContextMenuTrigger className="flex h-32 w-48 items-center justify-center rounded-md border border-pecan/15 text-sm text-pecan/60">
                Right-click here
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuPositioner>
                    <ContextMenuPopup>
                        <ContextMenuCheckboxItem
                            checked={showRuler}
                            onCheckedChange={setShowRuler}
                        >
                            <ContextMenuCheckboxItemIndicator>
                                {showRuler && <CheckIcon />}
                            </ContextMenuCheckboxItemIndicator>
                            Show Ruler
                        </ContextMenuCheckboxItem>
                        <ContextMenuCheckboxItem
                            checked={showGrid}
                            onCheckedChange={setShowGrid}
                        >
                            <ContextMenuCheckboxItemIndicator>
                                {showGrid && <CheckIcon />}
                            </ContextMenuCheckboxItemIndicator>
                            Show Grid
                        </ContextMenuCheckboxItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Reset View</ContextMenuItem>
                    </ContextMenuPopup>
                </ContextMenuPositioner>
            </ContextMenuPortal>
        </ContextMenuRoot>
    );
}

export const WithCheckboxItems: Story = {
    render: () => <CheckboxContextMenuDemo />
};

export const WithSubmenu: Story = {
    render: () => (
        <ContextMenuRoot>
            <ContextMenuTrigger className="flex h-32 w-48 items-center justify-center rounded-md border border-pecan/15 text-sm text-pecan/60">
                Right-click here
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuPositioner>
                    <ContextMenuPopup>
                        <ContextMenuItem>Add to Library</ContextMenuItem>
                        <ContextMenuSubmenuRoot>
                            <ContextMenuSubmenuTrigger>
                                Add to Playlist
                                <ChevronRightIcon />
                            </ContextMenuSubmenuTrigger>
                            <ContextMenuPortal>
                                <ContextMenuPositioner
                                    alignOffset={-4}
                                    sideOffset={-4}
                                >
                                    <ContextMenuPopup>
                                        <ContextMenuItem>
                                            Get Up!
                                        </ContextMenuItem>
                                        <ContextMenuItem>
                                            Inside Out
                                        </ContextMenuItem>
                                        <ContextMenuItem>
                                            Night Beats
                                        </ContextMenuItem>
                                        <ContextMenuSeparator />
                                        <ContextMenuItem>
                                            New playlist…
                                        </ContextMenuItem>
                                    </ContextMenuPopup>
                                </ContextMenuPositioner>
                            </ContextMenuPortal>
                        </ContextMenuSubmenuRoot>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Play Next</ContextMenuItem>
                        <ContextMenuItem>Share</ContextMenuItem>
                    </ContextMenuPopup>
                </ContextMenuPositioner>
            </ContextMenuPortal>
        </ContextMenuRoot>
    )
};
