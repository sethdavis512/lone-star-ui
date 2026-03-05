import * as React from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { cn } from '../../utils/cn';

export const TabsRoot = Tabs.Root;

export const TabsList = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Tabs.List>
>(({ className, ...props }, ref) => (
    <Tabs.List
        ref={ref}
        className={cn(
            'relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-pecan/15',
            className
        )}
        {...props}
    />
));
TabsList.displayName = 'TabsList';

export const TabsTab = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Tabs.Tab>
>(({ className, ...props }, ref) => (
    <Tabs.Tab
        ref={ref}
        className={cn(
            'flex h-8 items-center justify-center border-0 px-3 text-sm font-medium text-pecan/60 outline-none select-none transition-colors hover:text-pecan focus-visible:relative focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-inset data-active:text-pecan data-disabled:pointer-events-none data-disabled:opacity-40',
            className
        )}
        {...props}
    />
));
TabsTab.displayName = 'TabsTab';

export const TabsIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Tabs.Indicator>
>(({ className, ...props }, ref) => (
    <Tabs.Indicator
        ref={ref}
        className={cn(
            'absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm bg-mesa transition-all duration-200 ease-in-out',
            className
        )}
        {...props}
    />
));
TabsIndicator.displayName = 'TabsIndicator';

export const TabsPanel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Tabs.Panel>
>(({ className, ...props }, ref) => (
    <Tabs.Panel
        ref={ref}
        className={cn(
            'p-4 text-sm text-pecan outline-none focus-visible:rounded-b-md focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-inset',
            className
        )}
        {...props}
    />
));
TabsPanel.displayName = 'TabsPanel';
