import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Pass-through parts ────────────────────────────────────────────────────────
export const TooltipProvider = BaseTooltip.Provider;
export const TooltipRoot = BaseTooltip.Root;
export const TooltipPortal = BaseTooltip.Portal;

// ── TooltipTrigger ─────────────────────────────────────────────────────────────
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

// ── TooltipPositioner ─────────────────────────────────────────────────────────
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

// ── TooltipPopup ──────────────────────────────────────────────────────────────
export const TooltipPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup>
>(({ className, ...props }, ref) => (
    <BaseTooltip.Popup
        ref={ref}
        className={cn(
            'origin-[var(--transform-origin)] rounded-md bg-pecan px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-[transform,opacity] duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0',
            className
        )}
        {...props}
    />
));
TooltipPopup.displayName = 'TooltipPopup';

// ── TooltipArrow ──────────────────────────────────────────────────────────────
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
