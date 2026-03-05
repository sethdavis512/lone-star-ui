import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import React from 'react';
import { cn } from '../../utils/cn';

export const DialogRoot = BaseDialog.Root;
export const DialogPortal = BaseDialog.Portal;

export const DialogBackdrop = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
    <BaseDialog.Backdrop
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 min-h-dvh bg-black/40 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
            className
        )}
        {...props}
    />
));
DialogBackdrop.displayName = 'DialogBackdrop';

export const DialogViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Viewport>
>(({ className, ...props }, ref) => (
    <BaseDialog.Viewport
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 flex items-center justify-center p-4',
            className
        )}
        {...props}
    />
));
DialogViewport.displayName = 'DialogViewport';

export const DialogPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, ...props }, ref) => (
    <BaseDialog.Popup
        ref={ref}
        className={cn(
            'w-full max-w-md rounded-xl border border-pecan/15 bg-surface p-6 text-pecan shadow-xl transition-all duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
            className
        )}
        {...props}
    />
));
DialogPopup.displayName = 'DialogPopup';

export const DialogTitle = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
    <BaseDialog.Title
        ref={ref}
        className={cn('mb-1 text-lg font-semibold text-pecan', className)}
        {...props}
    />
));
DialogTitle.displayName = 'DialogTitle';

export const DialogDescription = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
    <BaseDialog.Description
        ref={ref}
        className={cn('mb-6 text-sm text-pecan/60', className)}
        {...props}
    />
));
DialogDescription.displayName = 'DialogDescription';

export const DialogClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Close>
>(({ className, ...props }, ref) => (
    <BaseDialog.Close
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
DialogClose.displayName = 'DialogClose';

export const DialogTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseDialog.Trigger>
>(({ className, ...props }, ref) => (
    <BaseDialog.Trigger
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-surface px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
DialogTrigger.displayName = 'DialogTrigger';
