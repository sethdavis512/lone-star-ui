import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Menu } from '@base-ui/react/menu';
import { MenubarRoot } from './Menubar';

const meta: Meta = {
    title: 'Sparks/Menubar',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj;

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

const triggerCls =
    'h-8 cursor-default rounded-sm px-3 text-sm font-medium text-pecan select-none outline-none ' +
    'hover:bg-mesa/60 focus-visible:bg-mesa/60 data-[popup-open]:bg-mesa/60 ' +
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50';

const popupCls =
    'min-w-[10rem] rounded-md border border-pecan/15 bg-white p-1 shadow-md ' +
    'transition-opacity data-[ending-style]:opacity-0 data-[instant]:transition-none';

const itemCls =
    'relative flex w-full cursor-default items-center justify-between gap-4 rounded-sm px-3 py-1.5 text-sm text-pecan select-none outline-none ' +
    'data-[highlighted]:bg-mesa/60 data-[popup-open]:bg-mesa/40 ' +
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50';

function handleClick(event: React.MouseEvent<HTMLElement>) {
    // eslint-disable-next-line no-console
    console.log(`${event.currentTarget.textContent?.trim()} clicked`);
}

export const Basic: Story = {
    render: () => (
        <MenubarRoot>
            <Menu.Root>
                <Menu.Trigger className={triggerCls}>File</Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner className="outline-none" sideOffset={6}>
                        <Menu.Popup className={popupCls}>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                New
                            </Menu.Item>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Open
                            </Menu.Item>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Save
                            </Menu.Item>
                            <Menu.SubmenuRoot>
                                <Menu.SubmenuTrigger className={itemCls}>
                                    Export
                                    <ChevronRightIcon />
                                </Menu.SubmenuTrigger>
                                <Menu.Portal>
                                    <Menu.Positioner alignOffset={-4}>
                                        <Menu.Popup className={popupCls}>
                                            <Menu.Item
                                                className={itemCls}
                                                onClick={handleClick}
                                            >
                                                PDF
                                            </Menu.Item>
                                            <Menu.Item
                                                className={itemCls}
                                                onClick={handleClick}
                                            >
                                                PNG
                                            </Menu.Item>
                                            <Menu.Item
                                                className={itemCls}
                                                onClick={handleClick}
                                            >
                                                SVG
                                            </Menu.Item>
                                        </Menu.Popup>
                                    </Menu.Positioner>
                                </Menu.Portal>
                            </Menu.SubmenuRoot>
                            <Menu.Separator className="my-1 h-px bg-pecan/10" />
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Print
                            </Menu.Item>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>

            <Menu.Root>
                <Menu.Trigger className={triggerCls}>Edit</Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner className="outline-none" sideOffset={6}>
                        <Menu.Popup className={popupCls}>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Cut
                            </Menu.Item>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Copy
                            </Menu.Item>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Paste
                            </Menu.Item>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>

            <Menu.Root>
                <Menu.Trigger className={triggerCls}>View</Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner className="outline-none" sideOffset={6}>
                        <Menu.Popup className={popupCls}>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Zoom In
                            </Menu.Item>
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Zoom Out
                            </Menu.Item>
                            <Menu.Separator className="my-1 h-px bg-pecan/10" />
                            <Menu.Item
                                className={itemCls}
                                onClick={handleClick}
                            >
                                Full Screen
                            </Menu.Item>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>

            <Menu.Root disabled>
                <Menu.Trigger className={triggerCls}>Help</Menu.Trigger>
            </Menu.Root>
        </MenubarRoot>
    )
};
