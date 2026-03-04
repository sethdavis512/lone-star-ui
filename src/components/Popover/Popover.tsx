import { Popover as BasePopover } from '@base-ui/react/popover';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Pass-through parts ────────────────────────────────────────────────────────
export const PopoverRoot = BasePopover.Root;
export const PopoverPortal = BasePopover.Portal;

// ── PopoverTrigger ────────────────────────────────────────────────────────────
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
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-[popup-open]:bg-mesa',
            className
        )}
        {...props}
    />
));
PopoverTrigger.displayName = 'PopoverTrigger';

// ── PopoverBackdrop ───────────────────────────────────────────────────────────
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

// ── PopoverPositioner ─────────────────────────────────────────────────────────
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

// ── PopoverPopup ──────────────────────────────────────────────────────────────
export const PopoverPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(({ className, ...props }, ref) => (
    <BasePopover.Popup
        ref={ref}
        className={cn(
            'origin-[var(--transform-origin)] rounded-lg border border-pecan/15 bg-white p-4 text-pecan shadow-lg transition-[transform,opacity] duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[instant]:transition-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
        )}
        {...props}
    />
));
PopoverPopup.displayName = 'PopoverPopup';

// ── PopoverTitle ──────────────────────────────────────────────────────────────
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

// ── PopoverDescription ────────────────────────────────────────────────────────
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

// ── PopoverClose ──────────────────────────────────────────────────────────────
export const PopoverClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BasePopover.Close>
>(({ className, ...props }, ref) => (
    <BasePopover.Close
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
PopoverClose.displayName = 'PopoverClose';

// ── PopoverArrow ──────────────────────────────────────────────────────────────
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
