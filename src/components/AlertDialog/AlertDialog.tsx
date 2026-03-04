import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Pass-through parts ────────────────────────────────────────────────────────
export const AlertDialogRoot = BaseAlertDialog.Root;
export const AlertDialogPortal = BaseAlertDialog.Portal;

// ── AlertDialogBackdrop ────────────────────────────────────────────────────────
export const AlertDialogBackdrop = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Backdrop
        ref={ref}
        className={cn(
            'fixed inset-0 min-h-dvh bg-black/40 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
            className
        )}
        {...props}
    />
));
AlertDialogBackdrop.displayName = 'AlertDialogBackdrop';

// ── AlertDialogViewport ────────────────────────────────────────────────────────
export const AlertDialogViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Viewport>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Viewport
        ref={ref}
        className={cn(
            'fixed inset-0 flex items-center justify-center p-4',
            className
        )}
        {...props}
    />
));
AlertDialogViewport.displayName = 'AlertDialogViewport';

// ── AlertDialogPopup ──────────────────────────────────────────────────────────
export const AlertDialogPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Popup
        ref={ref}
        className={cn(
            'w-full max-w-md rounded-xl border border-pecan/15 bg-white p-6 text-pecan shadow-xl transition-all duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
        )}
        {...props}
    />
));
AlertDialogPopup.displayName = 'AlertDialogPopup';

// ── AlertDialogTitle ──────────────────────────────────────────────────────────
export const AlertDialogTitle = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Title
        ref={ref}
        className={cn('mb-1 text-lg font-semibold text-pecan', className)}
        {...props}
    />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

// ── AlertDialogDescription ────────────────────────────────────────────────────
export const AlertDialogDescription = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Description
        ref={ref}
        className={cn('mb-6 text-sm text-pecan/60', className)}
        {...props}
    />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

// ── AlertDialogClose ──────────────────────────────────────────────────────────
export const AlertDialogClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Close>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Close
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors select-none hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
AlertDialogClose.displayName = 'AlertDialogClose';

// ── AlertDialogTrigger ────────────────────────────────────────────────────────
export const AlertDialogTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Trigger>
>(({ className, ...props }, ref) => (
    <BaseAlertDialog.Trigger
        ref={ref}
        className={cn(
            'inline-flex h-9 items-center justify-center rounded-md border border-prickly-pear/40 bg-white px-4 text-sm font-medium text-prickly-pear transition-colors select-none hover:bg-prickly-pear/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prickly-pear focus-visible:ring-offset-2',
            className
        )}
        {...props}
    />
));
AlertDialogTrigger.displayName = 'AlertDialogTrigger';
