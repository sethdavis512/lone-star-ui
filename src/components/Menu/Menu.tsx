import * as React from 'react';
import { Menu } from '@base-ui/react/menu';
import { cn } from '../../utils/cn';

// Pass-throughs
export const MenuRoot = Menu.Root;
export const MenuPortal = Menu.Portal;
export const MenuBackdrop = Menu.Backdrop;
export const MenuGroup = Menu.Group;
export const MenuRadioGroup = Menu.RadioGroup;
export const MenuSubmenuRoot = Menu.SubmenuRoot;

// Styled parts

export const MenuTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Menu.Trigger>
>(({ className, ...props }, ref) => (
    <Menu.Trigger
        ref={ref}
        className={cn(
            'inline-flex h-8 cursor-default items-center gap-1 rounded-sm px-3 text-sm font-medium text-pecan select-none outline-none',
            'hover:bg-mesa/60 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-sky-500',
            'data-popup-open:bg-mesa/60',
            'data-disabled:cursor-not-allowed data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
MenuTrigger.displayName = 'MenuTrigger';

export const MenuPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.Positioner>
>(({ className, ...props }, ref) => (
    <Menu.Positioner
        ref={ref}
        className={cn('outline-none', className)}
        {...props}
    />
));
MenuPositioner.displayName = 'MenuPositioner';

export const MenuPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.Popup>
>(({ className, ...props }, ref) => (
    <Menu.Popup
        ref={ref}
        className={cn(
            'min-w-[8rem] rounded-md border border-pecan/15 bg-surface p-1 shadow-md',
            'origin-[var(--transform-origin)] transition-[transform,scale,opacity] duration-150',
            'data-starting-style:scale-95 data-starting-style:opacity-0',
            'data-ending-style:scale-95 data-ending-style:opacity-0',
            className
        )}
        {...props}
    />
));
MenuPopup.displayName = 'MenuPopup';

export const MenuArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.Arrow>
>(({ className, ...props }, ref) => (
    <Menu.Arrow
        ref={ref}
        className={cn(
            'flex text-pecan/15',
            'data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
            'data-[side=bottom]:top-[-8px]',
            'data-[side=left]:right-[-13px] data-[side=left]:rotate-90',
            'data-[side=right]:left-[-13px] data-[side=right]:-rotate-90',
            className
        )}
        {...props}
    />
));
MenuArrow.displayName = 'MenuArrow';

const itemClasses =
    'relative flex cursor-default items-center gap-2 rounded-sm px-3 py-1.5 text-sm text-pecan select-none outline-none ' +
    'data-highlighted:bg-mesa/60 data-popup-open:bg-mesa/40 ' +
    'data-disabled:pointer-events-none data-disabled:opacity-50';

export const MenuItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => (
    <Menu.Item ref={ref} className={cn(itemClasses, className)} {...props} />
));
MenuItem.displayName = 'MenuItem';

export const MenuLinkItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof Menu.LinkItem>
>(({ className, ...props }, ref) => (
    <Menu.LinkItem
        ref={ref}
        className={cn(itemClasses, 'no-underline', className)}
        {...props}
    />
));
MenuLinkItem.displayName = 'MenuLinkItem';

export const MenuSeparator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => (
    <Menu.Separator
        ref={ref}
        className={cn('my-1 h-px bg-pecan/10', className)}
        {...props}
    />
));
MenuSeparator.displayName = 'MenuSeparator';

export const MenuGroupLabel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.GroupLabel>
>(({ className, ...props }, ref) => (
    <Menu.GroupLabel
        ref={ref}
        className={cn(
            'px-3 py-1 text-xs font-semibold tracking-wide text-pecan/50',
            className
        )}
        {...props}
    />
));
MenuGroupLabel.displayName = 'MenuGroupLabel';

export const MenuRadioItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.RadioItem>
>(({ className, ...props }, ref) => (
    <Menu.RadioItem
        ref={ref}
        className={cn(itemClasses, 'pl-8', className)}
        {...props}
    />
));
MenuRadioItem.displayName = 'MenuRadioItem';

export const MenuRadioItemIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Menu.RadioItemIndicator>
>(({ className, ...props }, ref) => (
    <Menu.RadioItemIndicator
        ref={ref}
        className={cn(
            'absolute left-2 flex size-4 items-center justify-center',
            className
        )}
        {...props}
    />
));
MenuRadioItemIndicator.displayName = 'MenuRadioItemIndicator';

export const MenuCheckboxItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>
>(({ className, ...props }, ref) => (
    <Menu.CheckboxItem
        ref={ref}
        className={cn(itemClasses, 'pl-8', className)}
        {...props}
    />
));
MenuCheckboxItem.displayName = 'MenuCheckboxItem';

export const MenuCheckboxItemIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Menu.CheckboxItemIndicator>
>(({ className, ...props }, ref) => (
    <Menu.CheckboxItemIndicator
        ref={ref}
        className={cn(
            'absolute left-2 flex size-4 items-center justify-center',
            className
        )}
        {...props}
    />
));
MenuCheckboxItemIndicator.displayName = 'MenuCheckboxItemIndicator';

export const MenuSubmenuTrigger = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>
>(({ className, ...props }, ref) => (
    <Menu.SubmenuTrigger
        ref={ref}
        className={cn(itemClasses, 'justify-between', className)}
        {...props}
    />
));
MenuSubmenuTrigger.displayName = 'MenuSubmenuTrigger';
