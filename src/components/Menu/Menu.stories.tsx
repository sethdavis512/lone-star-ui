import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { expect, userEvent, within, waitFor } from 'storybook/test';
import {
    MenuRoot,
    MenuTrigger,
    MenuPortal,
    MenuPositioner,
    MenuPopup,
    MenuViewport,
    MenuItem,
    MenuSeparator,
    MenuCheckboxItem,
    MenuCheckboxItemIndicator,
    MenuRadioGroup,
    MenuRadioItem,
    MenuRadioItemIndicator,
    MenuGroup,
    MenuGroupLabel,
    MenuSubmenuRoot,
    MenuSubmenuTrigger,
    createMenuHandle
} from './Menu';

const meta: Meta = {
    title: 'Sparks/Menu',
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

function CircleIcon() {
    return (
        <svg fill="currentColor" width="8" height="8" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
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
        <MenuRoot>
            <MenuTrigger>Actions</MenuTrigger>
            <MenuPortal>
                <MenuPositioner sideOffset={8}>
                    <MenuPopup>
                        <MenuItem>New file</MenuItem>
                        <MenuItem>Open file</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Save as…</MenuItem>
                        <MenuSeparator />
                        <MenuItem disabled>Delete</MenuItem>
                    </MenuPopup>
                </MenuPositioner>
            </MenuPortal>
        </MenuRoot>
    )
};

export const WithGroups: Story = {
    render: () => (
        <MenuRoot>
            <MenuTrigger>Song</MenuTrigger>
            <MenuPortal>
                <MenuPositioner sideOffset={8}>
                    <MenuPopup>
                        <MenuGroup>
                            <MenuGroupLabel>Library</MenuGroupLabel>
                            <MenuItem>Add to Library</MenuItem>
                            <MenuItem>Add to Playlist…</MenuItem>
                        </MenuGroup>
                        <MenuSeparator />
                        <MenuGroup>
                            <MenuGroupLabel>Playback</MenuGroupLabel>
                            <MenuItem>Play Next</MenuItem>
                            <MenuItem>Play Last</MenuItem>
                        </MenuGroup>
                        <MenuSeparator />
                        <MenuItem>Share</MenuItem>
                    </MenuPopup>
                </MenuPositioner>
            </MenuPortal>
        </MenuRoot>
    )
};

function CheckboxMenuDemo() {
    const [showRuler, setShowRuler] = React.useState(true);
    const [showGrid, setShowGrid] = React.useState(false);
    const [showSidebar, setShowSidebar] = React.useState(true);
    return (
        <MenuRoot>
            <MenuTrigger>View</MenuTrigger>
            <MenuPortal>
                <MenuPositioner sideOffset={8}>
                    <MenuPopup>
                        <MenuCheckboxItem
                            checked={showRuler}
                            onCheckedChange={setShowRuler}
                        >
                            <MenuCheckboxItemIndicator>
                                {showRuler && <CheckIcon />}
                            </MenuCheckboxItemIndicator>
                            Ruler
                        </MenuCheckboxItem>
                        <MenuCheckboxItem
                            checked={showGrid}
                            onCheckedChange={setShowGrid}
                        >
                            <MenuCheckboxItemIndicator>
                                {showGrid && <CheckIcon />}
                            </MenuCheckboxItemIndicator>
                            Grid
                        </MenuCheckboxItem>
                        <MenuCheckboxItem
                            checked={showSidebar}
                            onCheckedChange={setShowSidebar}
                        >
                            <MenuCheckboxItemIndicator>
                                {showSidebar && <CheckIcon />}
                            </MenuCheckboxItemIndicator>
                            Sidebar
                        </MenuCheckboxItem>
                    </MenuPopup>
                </MenuPositioner>
            </MenuPortal>
        </MenuRoot>
    );
}

export const WithCheckboxItems: Story = {
    render: () => <CheckboxMenuDemo />
};

function RadioMenuDemo() {
    const [sort, setSort] = React.useState('date');
    return (
        <MenuRoot>
            <MenuTrigger>Sort by: {sort}</MenuTrigger>
            <MenuPortal>
                <MenuPositioner sideOffset={8}>
                    <MenuPopup>
                        <MenuRadioGroup value={sort} onValueChange={setSort}>
                            {['date', 'name', 'size', 'type'].map((value) => (
                                <MenuRadioItem key={value} value={value}>
                                    <MenuRadioItemIndicator>
                                        {sort === value && <CircleIcon />}
                                    </MenuRadioItemIndicator>
                                    {value.charAt(0).toUpperCase() +
                                        value.slice(1)}
                                </MenuRadioItem>
                            ))}
                        </MenuRadioGroup>
                    </MenuPopup>
                </MenuPositioner>
            </MenuPortal>
        </MenuRoot>
    );
}

export const WithRadioItems: Story = {
    render: () => <RadioMenuDemo />
};

export const WithSubmenu: Story = {
    render: () => (
        <MenuRoot>
            <MenuTrigger>File</MenuTrigger>
            <MenuPortal>
                <MenuPositioner sideOffset={8}>
                    <MenuPopup>
                        <MenuItem>New</MenuItem>
                        <MenuItem>Open</MenuItem>
                        <MenuSeparator />
                        <MenuSubmenuRoot>
                            <MenuSubmenuTrigger>
                                Export
                                <ChevronRightIcon />
                            </MenuSubmenuTrigger>
                            <MenuPortal>
                                <MenuPositioner>
                                    <MenuPopup>
                                        <MenuItem>PDF</MenuItem>
                                        <MenuItem>PNG</MenuItem>
                                        <MenuItem>SVG</MenuItem>
                                    </MenuPopup>
                                </MenuPositioner>
                            </MenuPortal>
                        </MenuSubmenuRoot>
                        <MenuSeparator />
                        <MenuItem>Print</MenuItem>
                    </MenuPopup>
                </MenuPositioner>
            </MenuPortal>
        </MenuRoot>
    )
};

const detachedMenus = {
    library: {
        heading: 'Library',
        items: ['Add to Library', 'Add to Playlist…', 'Download']
    },
    playback: {
        heading: 'Playback',
        items: ['Play Next', 'Play Last']
    }
} as const;

const detachedMenu = createMenuHandle<keyof typeof detachedMenus>();

export const DetachedTriggers: Story = {
    render: () => (
        <div className="flex gap-2">
            <MenuTrigger handle={detachedMenu} payload="library">
                Library
            </MenuTrigger>
            <MenuTrigger handle={detachedMenu} payload="playback">
                Playback
            </MenuTrigger>
            <MenuRoot handle={detachedMenu} modal={false}>
                {({ payload }) => (
                    <MenuPortal>
                        <MenuPositioner
                            sideOffset={8}
                            align="start"
                            className="h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none"
                        >
                            <MenuPopup className="relative h-[var(--popup-height,auto)] w-[var(--popup-width,auto)] p-0 transition-[width,height,opacity,scale] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                                <MenuViewport>
                                    {payload && (
                                        <MenuGroup>
                                            <MenuGroupLabel>
                                                {detachedMenus[payload].heading}
                                            </MenuGroupLabel>
                                            {detachedMenus[payload].items.map(
                                                (item) => (
                                                    <MenuItem key={item}>
                                                        {item}
                                                    </MenuItem>
                                                )
                                            )}
                                        </MenuGroup>
                                    )}
                                </MenuViewport>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                )}
            </MenuRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const body = within(document.body);

        await userEvent.click(canvas.getByRole('button', { name: 'Library' }));
        const menu = await body.findByRole('menu');
        await waitFor(() => expect(menu).toBeVisible());
        expect(
            await within(menu).findByRole('menuitem', { name: 'Download' })
        ).toBeVisible();

        // Clicking another detached trigger swaps the menu content in place
        await userEvent.click(canvas.getByRole('button', { name: 'Playback' }));
        const playNext = await body.findByRole('menuitem', {
            name: 'Play Next'
        });
        await waitFor(() => expect(playNext).toBeVisible());
        await waitFor(() =>
            expect(
                body.queryByRole('menuitem', { name: 'Download' })
            ).toBeNull()
        );

        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    }
};
