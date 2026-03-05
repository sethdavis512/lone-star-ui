import * as React from 'react';
import { Toast } from '@base-ui/react/toast';
import { cn } from '../../utils/cn';

export const ToastProvider = Toast.Provider;
export const ToastPortal: typeof Toast.Portal = Toast.Portal;
export const { useToastManager, createToastManager } = Toast;

export const ToastViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toast.Viewport>
>(({ className, ...props }, ref) => (
    <Toast.Viewport
        ref={ref}
        className={cn(
            'fixed bottom-0 right-0 z-50 flex w-full flex-col gap-2 p-4 sm:max-w-sm',
            className
        )}
        {...props}
    />
));
ToastViewport.displayName = 'ToastViewport';

export const ToastRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toast.Root>
>(({ className, ...props }, ref) => (
    <Toast.Root
        ref={ref}
        className={cn(
            'group relative flex w-full items-start gap-3 rounded-xl border border-pecan/15 bg-surface p-4 shadow-lg shadow-pecan/10',
            'transition-all duration-300 data-starting-style:translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0',
            className
        )}
        {...props}
    />
));
ToastRoot.displayName = 'ToastRoot';

export const ToastContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toast.Content>
>(({ className, ...props }, ref) => (
    <Toast.Content
        ref={ref}
        className={cn('flex flex-1 flex-col gap-1', className)}
        {...props}
    />
));
ToastContent.displayName = 'ToastContent';

export const ToastTitle = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toast.Title>
>(({ className, ...props }, ref) => (
    <Toast.Title
        ref={ref}
        className={cn('text-sm font-semibold text-pecan', className)}
        {...props}
    />
));
ToastTitle.displayName = 'ToastTitle';

export const ToastDescription = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toast.Description>
>(({ className, ...props }, ref) => (
    <Toast.Description
        ref={ref}
        className={cn('text-sm text-pecan/70', className)}
        {...props}
    />
));
ToastDescription.displayName = 'ToastDescription';

export const ToastClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Toast.Close>
>(({ className, children, ...props }, ref) => (
    <Toast.Close
        ref={ref}
        className={cn(
            'absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-md text-pecan/40 transition-colors hover:text-pecan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky',
            className
        )}
        {...props}
    >
        {children ?? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        )}
    </Toast.Close>
));
ToastClose.displayName = 'ToastClose';

export const ToastAction = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Toast.Action>
>(({ className, ...props }, ref) => (
    <Toast.Action
        ref={ref}
        className={cn(
            'mt-1 inline-flex h-7 items-center rounded-md border border-pecan/20 bg-transparent px-2.5 text-xs font-medium text-pecan transition-colors hover:bg-mesa/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky',
            className
        )}
        {...props}
    />
));
ToastAction.displayName = 'ToastAction';

export const ToastPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toast.Positioner>
>(({ className, ...props }, ref) => (
    <Toast.Positioner
        ref={ref}
        className={cn('fixed z-50', className)}
        {...props}
    />
));
ToastPositioner.displayName = 'ToastPositioner';

// Convenience component: renders all active toasts. Place inside ToastProvider.
export function Toaster() {
    const { toasts } = Toast.useToastManager();
    return (
        <ToastViewport>
            {toasts.map((toast) => (
                <ToastRoot key={toast.id} toast={toast}>
                    <ToastContent>
                        {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
                        {toast.description && (
                            <ToastDescription>
                                {toast.description}
                            </ToastDescription>
                        )}
                        {toast.actionProps && (
                            <ToastAction {...toast.actionProps} />
                        )}
                    </ToastContent>
                    <ToastClose />
                </ToastRoot>
            ))}
        </ToastViewport>
    );
}
