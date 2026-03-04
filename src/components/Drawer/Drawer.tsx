import { DrawerPreview as BaseDrawer } from '@base-ui/react/drawer';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Pass-through parts ────────────────────────────────────────────────────────
export const DrawerRoot = BaseDrawer.Root;
export const DrawerPortal = BaseDrawer.Portal;

// ── DrawerTrigger ─────────────────────────────────────────────────────────────
export const DrawerTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Trigger>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Trigger
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
DrawerTrigger.displayName = 'DrawerTrigger';

// ── DrawerBackdrop ────────────────────────────────────────────────────────────
export const DrawerBackdrop = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Backdrop>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Backdrop
        ref={ref}
        className={cn(
            'fixed inset-0 min-h-dvh bg-black opacity-[calc(0.4*(1-var(--drawer-swipe-progress)))] transition-opacity duration-[450ms]',
            className
        )}
        {...props}
    />
));
DrawerBackdrop.displayName = 'DrawerBackdrop';

// ── DrawerViewport ────────────────────────────────────────────────────────────
// Bottom-sheet layout by default; override className for side drawers
export const DrawerViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Viewport>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Viewport
        ref={ref}
        className={cn('fixed inset-0 flex items-end justify-center', className)}
        {...props}
    />
));
DrawerViewport.displayName = 'DrawerViewport';

// ── DrawerPopup ───────────────────────────────────────────────────────────────
export const DrawerPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Popup>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Popup
        ref={ref}
        className={cn(
            'box-border w-full max-h-[85vh] -mb-12 overflow-y-auto overscroll-contain rounded-t-2xl border border-b-0 border-pecan/10 bg-white px-6 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] pt-4 text-pecan shadow-2xl transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] [transform:translateY(var(--drawer-swipe-movement-y))] data-[swiping]:select-none data-[ending-style]:[transform:translateY(calc(100%-3rem))] data-[starting-style]:[transform:translateY(calc(100%-3rem))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
            className
        )}
        {...props}
    />
));
DrawerPopup.displayName = 'DrawerPopup';

// ── DrawerContent ─────────────────────────────────────────────────────────────
export const DrawerContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Content>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Content
        ref={ref}
        className={cn('mx-auto w-full max-w-lg', className)}
        {...props}
    />
));
DrawerContent.displayName = 'DrawerContent';

// ── DrawerHandle (decorative drag indicator) ───────────────────────────────────
export const DrawerHandle = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        aria-hidden
        className={cn(
            'mx-auto mb-4 h-1 w-12 rounded-full bg-pecan/15',
            className
        )}
        {...props}
    />
));
DrawerHandle.displayName = 'DrawerHandle';

// ── DrawerTitle ───────────────────────────────────────────────────────────────
export const DrawerTitle = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Title>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Title
        ref={ref}
        className={cn('mb-1 text-lg font-semibold text-pecan', className)}
        {...props}
    />
));
DrawerTitle.displayName = 'DrawerTitle';

// ── DrawerDescription ─────────────────────────────────────────────────────────
export const DrawerDescription = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Description>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Description
        ref={ref}
        className={cn('mb-6 text-sm text-pecan/60', className)}
        {...props}
    />
));
DrawerDescription.displayName = 'DrawerDescription';

// ── DrawerClose ───────────────────────────────────────────────────────────────
export const DrawerClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Close>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Close
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
DrawerClose.displayName = 'DrawerClose';
