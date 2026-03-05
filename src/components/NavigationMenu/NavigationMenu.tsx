import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { cn } from '../../utils/cn';

export const NavigationMenuPortal = NavigationMenu.Portal;

export const NavigationMenuRoot = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Root>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Root
        ref={ref}
        className={cn('relative flex items-center', className)}
        {...props}
    />
));
NavigationMenuRoot.displayName = 'NavigationMenuRoot';

export const NavigationMenuList = React.forwardRef<
    HTMLUListElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.List>
>(({ className, ...props }, ref) => (
    <NavigationMenu.List
        ref={ref}
        className={cn(
            'flex flex-1 list-none items-center justify-center gap-1',
            className
        )}
        {...props}
    />
));
NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Item>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Item
        ref={ref}
        className={cn('relative', className)}
        {...props}
    />
));
NavigationMenuItem.displayName = 'NavigationMenuItem';

export const NavigationMenuTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Trigger>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Trigger
        ref={ref}
        className={cn(
            'group inline-flex h-9 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm font-medium text-pecan transition-colors hover:bg-mesa/40 hover:text-pecan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky data-popup-open:bg-mesa/40',
            className
        )}
        {...props}
    />
));
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuIcon = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Icon>
>(({ className, children, ...props }, ref) => (
    <NavigationMenu.Icon
        ref={ref}
        className={cn(
            'relative top-px ml-0.5 transition-transform duration-200 group-data-popup-open:rotate-180',
            className
        )}
        {...props}
    >
        {children ?? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>
        )}
    </NavigationMenu.Icon>
));
NavigationMenuIcon.displayName = 'NavigationMenuIcon';

export const NavigationMenuPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Positioner>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Positioner
        ref={ref}
        className={cn('absolute top-full left-0 z-50', className)}
        {...props}
    />
));
NavigationMenuPositioner.displayName = 'NavigationMenuPositioner';

export const NavigationMenuViewport = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Viewport>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Viewport
        ref={ref}
        className={cn(
            'mt-1 overflow-hidden rounded-xl border border-pecan/15 bg-surface shadow-lg shadow-pecan/10',
            'transition-[width,height] duration-200 origin-top-left',
            className
        )}
        {...props}
    />
));
NavigationMenuViewport.displayName = 'NavigationMenuViewport';

export const NavigationMenuPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Popup>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Popup
        ref={ref}
        className={cn('p-1', className)}
        {...props}
    />
));
NavigationMenuPopup.displayName = 'NavigationMenuPopup';

export const NavigationMenuContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Content
        ref={ref}
        className={cn('p-3', className)}
        {...props}
    />
));
NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Link>
>(({ className, ...props }, ref) => (
    <NavigationMenu.Link
        ref={ref}
        className={cn(
            'block select-none rounded-md px-3 py-2 text-sm text-pecan leading-snug no-underline outline-none transition-colors hover:bg-mesa/40 focus-visible:bg-mesa/40',
            className
        )}
        {...props}
    />
));
NavigationMenuLink.displayName = 'NavigationMenuLink';
