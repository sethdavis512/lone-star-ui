import { Switch as BaseSwitch } from '@base-ui/react/switch';
import React from 'react';
import { cn } from '../../utils/cn';

// ── SwitchRoot ────────────────────────────────────────────────────────────────
export const SwitchRoot = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>
>(({ className, ...props }, ref) => (
    <BaseSwitch.Root
        ref={ref}
        className={cn(
            'relative flex h-6 w-10 cursor-pointer rounded-full border border-pecan/20 bg-pecan/20 p-0.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-checked:border-sky data-checked:bg-sky data-disabled:cursor-not-allowed data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
SwitchRoot.displayName = 'SwitchRoot';

// ── SwitchThumb ───────────────────────────────────────────────────────────────
export const SwitchThumb = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseSwitch.Thumb>
>(({ className, ...props }, ref) => (
    <BaseSwitch.Thumb
        ref={ref}
        className={cn(
            'aspect-square h-full rounded-full bg-white shadow-sm transition-transform duration-150 data-checked:translate-x-4',
            className
        )}
        {...props}
    />
));
SwitchThumb.displayName = 'SwitchThumb';
