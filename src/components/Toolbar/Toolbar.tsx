import * as React from 'react';
import { Toolbar } from '@base-ui/react/toolbar';
import { cn } from '../../utils/cn';

// Pass-through
export const ToolbarGroup = Toolbar.Group;

export const ToolbarRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toolbar.Root>
>(({ className, ...props }, ref) => (
    <Toolbar.Root
        ref={ref}
        className={cn(
            'flex items-center gap-px rounded-md border border-pecan/15 bg-surface p-0.5',
            className
        )}
        {...props}
    />
));
ToolbarRoot.displayName = 'ToolbarRoot';

export const ToolbarButton = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Toolbar.Button>
>(({ className, ...props }, ref) => (
    <Toolbar.Button
        ref={ref}
        className={cn(
            'flex h-8 min-w-8 cursor-default items-center justify-center rounded-sm px-2 text-sm font-medium text-pecan/70 select-none outline-none',
            'hover:bg-mesa/60 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-sky-500',
            'active:bg-mesa data-[pressed]:bg-mesa/60 data-[pressed]:text-pecan',
            'data-[popup-open]:bg-mesa/60',
            'data-[disabled]:opacity-50',
            className
        )}
        {...props}
    />
));
ToolbarButton.displayName = 'ToolbarButton';

export const ToolbarLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof Toolbar.Link>
>(({ className, ...props }, ref) => (
    <Toolbar.Link
        ref={ref}
        className={cn(
            'ml-auto mr-3 flex-none self-center text-sm text-pecan/50 no-underline',
            'hover:text-pecan focus-visible:rounded-sm focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-sky-500',
            className
        )}
        {...props}
    />
));
ToolbarLink.displayName = 'ToolbarLink';

export const ToolbarSeparator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Toolbar.Separator>
>(({ className, ...props }, ref) => (
    <Toolbar.Separator
        ref={ref}
        className={cn('mx-1 h-4 w-px shrink-0 bg-pecan/15', className)}
        {...props}
    />
));
ToolbarSeparator.displayName = 'ToolbarSeparator';

export const ToolbarInput = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<typeof Toolbar.Input>
>(({ className, ...props }, ref) => (
    <Toolbar.Input
        ref={ref}
        className={cn(
            'h-7 rounded-sm border border-pecan/15 bg-surface px-2 text-sm text-pecan outline-none',
            'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-sky-500',
            'data-[disabled]:opacity-50',
            className
        )}
        {...props}
    />
));
ToolbarInput.displayName = 'ToolbarInput';
