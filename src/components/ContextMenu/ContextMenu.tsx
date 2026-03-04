import * as React from 'react';
import { ContextMenu } from '@base-ui/react/context-menu';
import { cn } from '../../utils/cn';

// Pass-throughs
export const ContextMenuRoot = ContextMenu.Root;
export const ContextMenuPortal = ContextMenu.Portal;
export const ContextMenuBackdrop = ContextMenu.Backdrop;
export const ContextMenuGroup = ContextMenu.Group;
export const ContextMenuRadioGroup = ContextMenu.RadioGroup;
export const ContextMenuSubmenuRoot = ContextMenu.SubmenuRoot;

// Styled parts

export const ContextMenuTrigger = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.Trigger>
>(({ className, ...props }, ref) => (
    <ContextMenu.Trigger
        ref={ref}
        className={cn('select-none', className)}
        {...props}
    />
));
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

export const ContextMenuPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.Positioner>
>(({ className, ...props }, ref) => (
    <ContextMenu.Positioner
        ref={ref}
        className={cn('outline-none', className)}
        {...props}
    />
));
ContextMenuPositioner.displayName = 'ContextMenuPositioner';

export const ContextMenuPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.Popup>
>(({ className, ...props }, ref) => (
    <ContextMenu.Popup
        ref={ref}
        className={cn(
            'min-w-[8rem] rounded-md border border-pecan/15 bg-white p-1 shadow-md',
            'transition-opacity duration-150',
            'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
            className
        )}
        {...props}
    />
));
ContextMenuPopup.displayName = 'ContextMenuPopup';

export const ContextMenuArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.Arrow>
>(({ className, ...props }, ref) => (
    <ContextMenu.Arrow
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
ContextMenuArrow.displayName = 'ContextMenuArrow';

const itemClasses =
    'relative flex cursor-default items-center gap-2 rounded-sm px-3 py-1.5 text-sm text-pecan select-none outline-none ' +
    'data-[highlighted]:bg-mesa/60 data-[popup-open]:bg-mesa/40 ' +
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50';

export const ContextMenuItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.Item>
>(({ className, ...props }, ref) => (
    <ContextMenu.Item
        ref={ref}
        className={cn(itemClasses, className)}
        {...props}
    />
));
ContextMenuItem.displayName = 'ContextMenuItem';

export const ContextMenuLinkItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.LinkItem>
>(({ className, ...props }, ref) => (
    <ContextMenu.LinkItem
        ref={ref}
        className={cn(itemClasses, 'no-underline', className)}
        {...props}
    />
));
ContextMenuLinkItem.displayName = 'ContextMenuLinkItem';

export const ContextMenuSeparator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.Separator>
>(({ className, ...props }, ref) => (
    <ContextMenu.Separator
        ref={ref}
        className={cn('my-1 h-px bg-pecan/10', className)}
        {...props}
    />
));
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export const ContextMenuGroupLabel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.GroupLabel>
>(({ className, ...props }, ref) => (
    <ContextMenu.GroupLabel
        ref={ref}
        className={cn(
            'px-3 py-1 text-xs font-semibold tracking-wide text-pecan/50',
            className
        )}
        {...props}
    />
));
ContextMenuGroupLabel.displayName = 'ContextMenuGroupLabel';

export const ContextMenuRadioItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.RadioItem>
>(({ className, ...props }, ref) => (
    <ContextMenu.RadioItem
        ref={ref}
        className={cn(itemClasses, 'pl-8', className)}
        {...props}
    />
));
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

export const ContextMenuRadioItemIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.RadioItemIndicator>
>(({ className, ...props }, ref) => (
    <ContextMenu.RadioItemIndicator
        ref={ref}
        className={cn(
            'absolute left-2 flex size-4 items-center justify-center',
            className
        )}
        {...props}
    />
));
ContextMenuRadioItemIndicator.displayName = 'ContextMenuRadioItemIndicator';

export const ContextMenuCheckboxItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.CheckboxItem>
>(({ className, ...props }, ref) => (
    <ContextMenu.CheckboxItem
        ref={ref}
        className={cn(itemClasses, 'pl-8', className)}
        {...props}
    />
));
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

export const ContextMenuCheckboxItemIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.CheckboxItemIndicator>
>(({ className, ...props }, ref) => (
    <ContextMenu.CheckboxItemIndicator
        ref={ref}
        className={cn(
            'absolute left-2 flex size-4 items-center justify-center',
            className
        )}
        {...props}
    />
));
ContextMenuCheckboxItemIndicator.displayName =
    'ContextMenuCheckboxItemIndicator';

export const ContextMenuSubmenuTrigger = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ContextMenu.SubmenuTrigger>
>(({ className, ...props }, ref) => (
    <ContextMenu.SubmenuTrigger
        ref={ref}
        className={cn(itemClasses, 'justify-between', className)}
        {...props}
    />
));
ContextMenuSubmenuTrigger.displayName = 'ContextMenuSubmenuTrigger';
