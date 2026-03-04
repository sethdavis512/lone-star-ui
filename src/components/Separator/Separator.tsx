import * as React from 'react';
import { Separator } from '@base-ui/react/separator';
import { cn } from '../../utils/cn';

export const SeparatorRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
    <Separator
        ref={ref}
        className={cn(
            'shrink-0 bg-pecan/15 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
            className
        )}
        {...props}
    />
));
SeparatorRoot.displayName = 'SeparatorRoot';
