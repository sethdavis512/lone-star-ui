import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import React from 'react';
import { cn } from '../../utils/cn';

export const PreviewCardRoot = BasePreviewCard.Root;
export const PreviewCardPortal = BasePreviewCard.Portal;

// PreviewCard.Trigger renders an <a> element — use HTMLAnchorElement
export const PreviewCardTrigger = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Trigger>
>(({ className, ...props }, ref) => (
    <BasePreviewCard.Trigger
        ref={ref}
        className={cn(
            'text-sky underline decoration-sky/60 decoration-1 underline-offset-2 outline-none hover:decoration-sky focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-sky data-popup-open:decoration-sky',
            className
        )}
        {...props}
    />
));
PreviewCardTrigger.displayName = 'PreviewCardTrigger';

export const PreviewCardBackdrop = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Backdrop>
>(({ className, ...props }, ref) => (
    <BasePreviewCard.Backdrop
        ref={ref}
        className={cn('fixed inset-0', className)}
        {...props}
    />
));
PreviewCardBackdrop.displayName = 'PreviewCardBackdrop';

export const PreviewCardPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Positioner>
>(({ className, sideOffset = 8, ...props }, ref) => (
    <BasePreviewCard.Positioner
        ref={ref}
        sideOffset={sideOffset}
        className={cn('z-50', className)}
        {...props}
    />
));
PreviewCardPositioner.displayName = 'PreviewCardPositioner';

export const PreviewCardPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Popup>
>(({ className, ...props }, ref) => (
    <BasePreviewCard.Popup
        ref={ref}
        className={cn(
            'origin-[var(--transform-origin)] rounded-lg border border-pecan/15 bg-surface text-pecan shadow-lg transition-[transform,opacity] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
            className
        )}
        {...props}
    />
));
PreviewCardPopup.displayName = 'PreviewCardPopup';

export const PreviewCardArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Arrow>
>(({ className, ...props }, ref) => (
    <BasePreviewCard.Arrow
        ref={ref}
        className={cn(
            'flex data-[side=bottom]:top-[-8px] data-[side=bottom]:rotate-0 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180',
            className
        )}
        {...props}
    />
));
PreviewCardArrow.displayName = 'PreviewCardArrow';
