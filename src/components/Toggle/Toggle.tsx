import * as React from 'react';
import { Toggle } from '@base-ui/react/toggle';
import { cn } from '../../utils/cn';

export const ToggleRoot = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Toggle>
>(({ className, ...props }, ref) => (
    <Toggle
        ref={ref}
        className={cn(
            'inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-pecan/15 bg-surface px-2 text-sm font-medium text-pecan/70 transition-colors select-none',
            'hover:bg-mesa/50 hover:text-pecan',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2',
            'data-pressed:bg-mesa data-pressed:text-pecan',
            'data-disabled:pointer-events-none data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
ToggleRoot.displayName = 'ToggleRoot';
