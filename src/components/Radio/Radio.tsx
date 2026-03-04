import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import React from 'react';
import { cn } from '../../utils/cn';

// ── RadioGroup ────────────────────────────────────────────────────────────────
export const RadioGroup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseRadioGroup>
>(({ className, ...props }, ref) => (
    <BaseRadioGroup
        ref={ref}
        className={cn('flex flex-col gap-2', className)}
        {...props}
    />
));
RadioGroup.displayName = 'RadioGroup';

// ── RadioRoot ─────────────────────────────────────────────────────────────────
export const RadioRoot = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseRadio.Root>
>(({ className, ...props }, ref) => (
    <BaseRadio.Root
        ref={ref}
        className={cn(
            'flex size-5 shrink-0 items-center justify-center rounded-full border border-pecan/30 bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-[checked]:border-sky data-[checked]:bg-sky data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
            className
        )}
        {...props}
    />
));
RadioRoot.displayName = 'RadioRoot';

// ── RadioIndicator ────────────────────────────────────────────────────────────
export const RadioIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseRadio.Indicator>
>(({ className, ...props }, ref) => (
    <BaseRadio.Indicator
        ref={ref}
        className={cn(
            'flex before:size-2 before:rounded-full before:bg-white data-[unchecked]:hidden',
            className
        )}
        {...props}
    />
));
RadioIndicator.displayName = 'RadioIndicator';
