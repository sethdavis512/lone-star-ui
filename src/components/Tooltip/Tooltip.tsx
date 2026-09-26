import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import React from 'react';
import { cn } from '../../utils/cn';

export const TooltipProvider = BaseTooltip.Provider;
export const TooltipRoot = BaseTooltip.Root;
export const TooltipPortal = BaseTooltip.Portal;
export const createTooltipHandle = BaseTooltip.createHandle;

export const TooltipTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseTooltip.Trigger>
>(({ className, ...props }, ref) => (
    <BaseTooltip.Trigger
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
TooltipTrigger.displayName = 'TooltipTrigger';

export const TooltipPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseTooltip.Positioner>
>(({ className, sideOffset = 8, ...props }, ref) => (
    <BaseTooltip.Positioner
        ref={ref}
        sideOffset={sideOffset}
        className={cn('z-50', className)}
        {...props}
    />
));
TooltipPositioner.displayName = 'TooltipPositioner';

export const TooltipPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup>
>(({ className, ...props }, ref) => (
    <BaseTooltip.Popup
        ref={ref}
        className={cn(
            'origin-[var(--transform-origin)] rounded-md bg-pecan px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-[transform,opacity] duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0',
            className
        )}
        {...props}
    />
));
TooltipPopup.displayName = 'TooltipPopup';

export const TooltipViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseTooltip.Viewport>
>(({ className, ...props }, ref) => (
    <BaseTooltip.Viewport
        ref={ref}
        className={cn(
            'relative h-full w-full overflow-clip [--viewport-inline-padding:0.625rem] px-[var(--viewport-inline-padding)] py-1.5',
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
TooltipViewport.displayName = 'TooltipViewport';

export const TooltipArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseTooltip.Arrow>
>(({ className, ...props }, ref) => (
    <BaseTooltip.Arrow
        ref={ref}
        className={cn(
            'flex data-[side=bottom]:top-[-8px] data-[side=bottom]:rotate-0 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
            className
        )}
        {...props}
    />
));
TooltipArrow.displayName = 'TooltipArrow';
