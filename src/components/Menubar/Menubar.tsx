import * as React from 'react';
import { Menubar } from '@base-ui/react/menubar';
import { cn } from '../../utils/cn';

export const MenubarRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Menubar>
>(({ className, ...props }, ref) => (
    <Menubar
        ref={ref}
        className={cn(
            'flex items-center gap-0.5 rounded-md border border-pecan/15 bg-surface p-0.5',
            className
        )}
        {...props}
    />
));
MenubarRoot.displayName = 'MenubarRoot';
