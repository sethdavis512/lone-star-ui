import * as React from 'react';
import { Progress } from '@base-ui/react/progress';
import { cn } from '../../utils/cn';

export const ProgressRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Progress.Root>
>(({ className, ...props }, ref) => (
    <Progress.Root
        ref={ref}
        className={cn('flex w-full flex-col gap-1', className)}
        {...props}
    />
));
ProgressRoot.displayName = 'ProgressRoot';

export const ProgressLabel = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Progress.Label>
>(({ className, ...props }, ref) => (
    <Progress.Label
        ref={ref}
        className={cn('text-sm font-medium text-pecan', className)}
        {...props}
    />
));
ProgressLabel.displayName = 'ProgressLabel';

export const ProgressTrack = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Progress.Track>
>(({ className, ...props }, ref) => (
    <Progress.Track
        ref={ref}
        className={cn(
            'h-2 w-full overflow-hidden rounded-full bg-pecan/15',
            className
        )}
        {...props}
    />
));
ProgressTrack.displayName = 'ProgressTrack';

export const ProgressIndicator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Progress.Indicator>
>(({ className, ...props }, ref) => (
    <Progress.Indicator
        ref={ref}
        className={cn(
            'h-full bg-sky transition-[width] duration-300 ease-in-out data-[status=indeterminate]:w-1/3 data-[status=indeterminate]:animate-[slide-in_1.5s_ease-in-out_infinite]',
            className
        )}
        {...props}
    />
));
ProgressIndicator.displayName = 'ProgressIndicator';

export const ProgressValue = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Progress.Value>
>(({ className, ...props }, ref) => (
    <Progress.Value
        ref={ref}
        className={cn('text-xs text-pecan/60', className)}
        {...props}
    />
));
ProgressValue.displayName = 'ProgressValue';
