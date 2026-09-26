import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import React from 'react';
import { cn } from '../../utils/cn';

export const PreviewCardRoot = BasePreviewCard.Root;
export const PreviewCardPortal = BasePreviewCard.Portal;
export const createPreviewCardHandle = BasePreviewCard.createHandle;

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

export const PreviewCardViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BasePreviewCard.Viewport>
>(({ className, ...props }, ref) => (
    <BasePreviewCard.Viewport
        ref={ref}
        className={cn(
            'relative h-full w-full overflow-clip [--viewport-inline-padding:0px] px-[var(--viewport-inline-padding)] py-0',
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
PreviewCardViewport.displayName = 'PreviewCardViewport';

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
