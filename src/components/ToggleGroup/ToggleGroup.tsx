import * as React from 'react';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { cn } from '../../utils/cn';

export const ToggleGroupRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof ToggleGroup>
>(({ className, ...props }, ref) => (
    <ToggleGroup
        ref={ref}
        className={cn(
            'flex items-center gap-0.5 rounded-md border border-pecan/15 bg-surface p-0.5',
            className
        )}
        {...props}
    />
));
ToggleGroupRoot.displayName = 'ToggleGroupRoot';
