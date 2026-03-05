import * as React from 'react';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { cn } from '../../utils/cn';

export const ScrollAreaRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ScrollArea.Root>
>(({ className, ...props }, ref) => (
    <ScrollArea.Root
        ref={ref}
        className={cn('relative overflow-hidden', className)}
        {...props}
    />
));
ScrollAreaRoot.displayName = 'ScrollAreaRoot';

export const ScrollAreaViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ScrollArea.Viewport>
>(({ className, ...props }, ref) => (
    <ScrollArea.Viewport
        ref={ref}
        className={cn('h-full w-full rounded-[inherit]', className)}
        {...props}
    />
));
ScrollAreaViewport.displayName = 'ScrollAreaViewport';

export const ScrollAreaContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ScrollArea.Content>
>(({ className, ...props }, ref) => (
    <ScrollArea.Content
        ref={ref}
        className={cn('min-w-full table', className)}
        {...props}
    />
));
ScrollAreaContent.displayName = 'ScrollAreaContent';

export const ScrollAreaScrollbar = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ScrollArea.Scrollbar>
>(({ className, ...props }, ref) => (
    <ScrollArea.Scrollbar
        ref={ref}
        className={cn(
            'flex touch-none select-none rounded-full p-0.5 transition-[width,height,opacity] duration-150 ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2.5',
            className
        )}
        {...props}
    />
));
ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

export const ScrollAreaThumb = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ScrollArea.Thumb>
>(({ className, ...props }, ref) => (
    <ScrollArea.Thumb
        ref={ref}
        className={cn(
            'relative flex-1 rounded-full bg-pecan/25 transition-colors hover:bg-pecan/40',
            className
        )}
        {...props}
    />
));
ScrollAreaThumb.displayName = 'ScrollAreaThumb';

export const ScrollAreaCorner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ScrollArea.Corner>
>(({ className, ...props }, ref) => (
    <ScrollArea.Corner
        ref={ref}
        className={cn('bg-pecan/5', className)}
        {...props}
    />
));
ScrollAreaCorner.displayName = 'ScrollAreaCorner';
