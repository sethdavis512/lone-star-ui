import * as React from 'react';
import { Slider } from '@base-ui/react/slider';
import { cn } from '../../utils/cn';

export const SliderRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Slider.Root>
>(({ className, ...props }, ref) => (
    <Slider.Root
        ref={ref}
        className={cn(
            'relative flex w-full touch-none select-none flex-col items-center gap-1',
            className
        )}
        {...props}
    />
));
SliderRoot.displayName = 'SliderRoot';

export const SliderControl = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Slider.Control>
>(({ className, ...props }, ref) => (
    <Slider.Control
        ref={ref}
        className={cn('flex w-full items-center py-2', className)}
        {...props}
    />
));
SliderControl.displayName = 'SliderControl';

export const SliderTrack = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Slider.Track>
>(({ className, ...props }, ref) => (
    <Slider.Track
        ref={ref}
        className={cn(
            'relative h-1.5 w-full grow overflow-hidden rounded-full bg-pecan/15',
            className
        )}
        {...props}
    />
));
SliderTrack.displayName = 'SliderTrack';

export const SliderIndicator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Slider.Indicator>
>(({ className, ...props }, ref) => (
    <Slider.Indicator
        ref={ref}
        className={cn('absolute h-full bg-sky', className)}
        {...props}
    />
));
SliderIndicator.displayName = 'SliderIndicator';

export const SliderThumb = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Slider.Thumb>
>(({ className, ...props }, ref) => (
    <Slider.Thumb
        ref={ref}
        className={cn(
            'block h-4 w-4 rounded-full border-2 border-sky bg-surface shadow-sm transition-[transform,colors] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-dragging:scale-110 data-disabled:pointer-events-none data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
SliderThumb.displayName = 'SliderThumb';

export const SliderValue = React.forwardRef<
    HTMLOutputElement,
    React.ComponentPropsWithoutRef<typeof Slider.Value>
>(({ className, ...props }, ref) => (
    <Slider.Value
        ref={ref}
        className={cn('text-sm font-medium tabular-nums text-pecan', className)}
        {...props}
    />
));
SliderValue.displayName = 'SliderValue';
