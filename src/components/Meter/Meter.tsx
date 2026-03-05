import * as React from 'react';
import { Meter } from '@base-ui/react/meter';
import { cn } from '../../utils/cn';

export const MeterRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Meter.Root>
>(({ className, ...props }, ref) => (
    <Meter.Root
        ref={ref}
        className={cn('flex w-full flex-col gap-1', className)}
        {...props}
    />
));
MeterRoot.displayName = 'MeterRoot';

export const MeterLabel = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Meter.Label>
>(({ className, ...props }, ref) => (
    <Meter.Label
        ref={ref}
        className={cn('text-sm font-medium text-pecan', className)}
        {...props}
    />
));
MeterLabel.displayName = 'MeterLabel';

export const MeterTrack = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Meter.Track>
>(({ className, ...props }, ref) => (
    <Meter.Track
        ref={ref}
        className={cn(
            'h-2 w-full overflow-hidden rounded-full bg-pecan/15',
            className
        )}
        {...props}
    />
));
MeterTrack.displayName = 'MeterTrack';

export const MeterIndicator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Meter.Indicator>
>(({ className, ...props }, ref) => (
    <Meter.Indicator
        ref={ref}
        className={cn(
            'h-full bg-sky transition-[width] duration-300',
            className
        )}
        {...props}
    />
));
MeterIndicator.displayName = 'MeterIndicator';

export const MeterValue = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Meter.Value>
>(({ className, ...props }, ref) => (
    <Meter.Value
        ref={ref}
        className={cn('text-xs text-pecan/60', className)}
        {...props}
    />
));
MeterValue.displayName = 'MeterValue';
