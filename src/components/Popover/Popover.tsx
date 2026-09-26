import { Popover as BasePopover } from '@base-ui/react/popover';
import React from 'react';
import { cn } from '../../utils/cn';

export const PopoverRoot = BasePopover.Root;
export const PopoverPortal = BasePopover.Portal;
export const createPopoverHandle = BasePopover.createHandle;

export const PopoverTrigger: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof BasePopover.Trigger> &
        React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Trigger>
>(({ className, ...props }, ref) => (
    <BasePopover.Trigger
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-popup-open:bg-mesa',
            className
        )}
        {...props}
    />
));
PopoverTrigger.displayName = 'PopoverTrigger';

export const PopoverBackdrop = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Backdrop>
>(({ className, ...props }, ref) => (
    <BasePopover.Backdrop
        ref={ref}
        className={cn('fixed inset-0', className)}
        {...props}
    />
));
PopoverBackdrop.displayName = 'PopoverBackdrop';

export const PopoverPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Positioner>
>(({ className, sideOffset = 8, ...props }, ref) => (
    <BasePopover.Positioner
        ref={ref}
        sideOffset={sideOffset}
        className={cn('z-50', className)}
        {...props}
    />
));
PopoverPositioner.displayName = 'PopoverPositioner';

export const PopoverPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(({ className, ...props }, ref) => (
    <BasePopover.Popup
        ref={ref}
        className={cn(
            'origin-[var(--transform-origin)] rounded-lg border border-pecan/15 bg-surface p-4 text-pecan shadow-lg transition-[transform,opacity] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-95 data-starting-style:opacity-0',
            className
        )}
        {...props}
    />
));
PopoverPopup.displayName = 'PopoverPopup';

export const PopoverViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Viewport>
>(({ className, ...props }, ref) => (
    <BasePopover.Viewport
        ref={ref}
        className={cn(
            'relative h-full w-full overflow-clip [--viewport-inline-padding:1rem] px-[var(--viewport-inline-padding)] py-4',
            '[&_[data-current]]:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] [&_[data-previous]]:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]',
            '[&_[data-current]]:translate-x-0 [&_[data-current]]:opacity-100 [&_[data-previous]]:translate-x-0 [&_[data-previous]]:opacity-100',
            '[&_[data-current]]:transition-[translate,opacity] [&_[data-current]]:duration-[350ms,175ms] [&_[data-current]]:ease-[cubic-bezier(0.22,1,0.36,1)]',
            '[&_[data-previous]]:transition-[translate,opacity] [&_[data-previous]]:duration-[350ms,175ms] [&_[data-previous]]:ease-[cubic-bezier(0.22,1,0.36,1)]',
            "data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2 data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0",
            "data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2 data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0",
            "data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2 data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0",
            "data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2 data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0",
            'data-instant:[&_[data-current]]:transition-none data-instant:[&_[data-previous]]:transition-none',
            className
        )}
        {...props}
    />
));
PopoverViewport.displayName = 'PopoverViewport';

export const PopoverTitle = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Title>
>(({ className, ...props }, ref) => (
    <BasePopover.Title
        ref={ref}
        className={cn('mb-1 text-base font-semibold text-pecan', className)}
        {...props}
    />
));
PopoverTitle.displayName = 'PopoverTitle';

export const PopoverDescription = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Description>
>(({ className, ...props }, ref) => (
    <BasePopover.Description
        ref={ref}
        className={cn('text-sm text-pecan/60', className)}
        {...props}
    />
));
PopoverDescription.displayName = 'PopoverDescription';

export const PopoverClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Close>
>(({ className, ...props }, ref) => (
    <BasePopover.Close
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
PopoverClose.displayName = 'PopoverClose';

export const PopoverArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>
>(({ className, ...props }, ref) => (
    <BasePopover.Arrow
        ref={ref}
        className={cn(
            'flex data-[side=bottom]:top-[-8px] data-[side=bottom]:rotate-0 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
            className
        )}
        {...props}
    />
));
PopoverArrow.displayName = 'PopoverArrow';
