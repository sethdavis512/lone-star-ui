import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import React from 'react';
import { cn } from '../../utils/cn';

export const DrawerRoot = BaseDrawer.Root;
export const DrawerPortal = BaseDrawer.Portal;
export const DrawerProvider = BaseDrawer.Provider;
export const DrawerVirtualKeyboardProvider = BaseDrawer.VirtualKeyboardProvider;
export const createDrawerHandle = BaseDrawer.createHandle;

// Background layer placed before DrawerIndent; visible around the scaled indent while a drawer is open
export const DrawerIndentBackground = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.IndentBackground>
>(({ className, ...props }, ref) => (
    <BaseDrawer.IndentBackground
        ref={ref}
        className={cn('absolute inset-0 bg-pecan', className)}
        {...props}
    />
));
DrawerIndentBackground.displayName = 'DrawerIndentBackground';

// Wraps the app's main UI; scales down and rounds its top corners while any drawer in the DrawerProvider is open
export const DrawerIndent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Indent>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Indent
        ref={ref}
        className={cn(
            'relative origin-[center_top] bg-surface text-pecan will-change-transform [--indent-radius:calc(1rem*(1-var(--drawer-swipe-progress)))] [--indent-transition:calc(1-clamp(0,calc(var(--drawer-swipe-progress)*100000),1))] [transition:transform_calc(400ms*var(--indent-transition))_cubic-bezier(0.32,0.72,0,1),border-radius_calc(250ms*var(--indent-transition))_cubic-bezier(0.32,0.72,0,1)] [transform:scale(1)_translateY(0)] data-active:[transform:scale(calc(0.98+(0.02*var(--drawer-swipe-progress))))_translateY(calc(0.5rem*(1-var(--drawer-swipe-progress))))] data-active:rounded-t-(--indent-radius)',
            className
        )}
        {...props}
    />
));
DrawerIndent.displayName = 'DrawerIndent';

// Invisible edge area for swipe-to-open; positions itself on the edge matching its swipe direction
export const DrawerSwipeArea = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.SwipeArea>
>(({ className, ...props }, ref) => (
    <BaseDrawer.SwipeArea
        ref={ref}
        className={cn(
            'fixed z-[1] touch-none data-disabled:pointer-events-none data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:bottom-0 data-[swipe-direction=up]:h-10 data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:top-0 data-[swipe-direction=down]:h-10 data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:right-0 data-[swipe-direction=left]:w-10 data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:left-0 data-[swipe-direction=right]:w-10',
            className
        )}
        {...props}
    />
));
DrawerSwipeArea.displayName = 'DrawerSwipeArea';

export const DrawerTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Trigger>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Trigger
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
DrawerTrigger.displayName = 'DrawerTrigger';

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

export const DrawerPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Popup>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Popup
        ref={ref}
        className={cn(
            'box-border w-full max-h-[85vh] -mb-12 overflow-y-auto overscroll-contain rounded-t-2xl border border-b-0 border-pecan/10 bg-surface px-6 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] pt-4 text-pecan shadow-2xl transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] [transform:translateY(var(--drawer-swipe-movement-y))] data-swiping:select-none data-ending-style:[transform:translateY(calc(100%-3rem))] data-starting-style:[transform:translateY(calc(100%-3rem))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
            className
        )}
        {...props}
    />
));
DrawerPopup.displayName = 'DrawerPopup';

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

export const DrawerClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseDrawer.Close>
>(({ className, ...props }, ref) => (
    <BaseDrawer.Close
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
DrawerClose.displayName = 'DrawerClose';
