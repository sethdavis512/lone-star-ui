import * as React from 'react';
import { Accordion } from '@base-ui/react/accordion';
import { cn } from '../../utils/cn';

export const AccordionRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Root>
>(({ className, ...props }, ref) => (
    <Accordion.Root ref={ref} className={cn('w-full', className)} {...props} />
));
AccordionRoot.displayName = 'AccordionRoot';

export const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({ className, ...props }, ref) => (
    <Accordion.Item
        ref={ref}
        className={cn('border-b border-pecan/15', className)}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionHeader = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Header>
>(({ className, ...props }, ref) => (
    <Accordion.Header
        ref={ref}
        className={cn('m-0 flex', className)}
        {...props}
    />
));
AccordionHeader.displayName = 'AccordionHeader';

export const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ className, children, ...props }, ref) => (
    <Accordion.Trigger
        ref={ref}
        className={cn(
            'group flex w-full items-center justify-between py-3 text-left text-sm font-medium text-pecan transition-colors hover:text-pecan/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-inset data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
            className
        )}
        {...props}
    >
        {children}
        <svg
            className="size-4 shrink-0 text-pecan/50 transition-transform duration-200 ease-out group-data-[panel-open]:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </Accordion.Trigger>
));
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionPanel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Panel>
>(({ className, ...props }, ref) => (
    <Accordion.Panel
        ref={ref}
        className={cn(
            'h-[var(--accordion-panel-height)] overflow-hidden text-sm text-pecan/70 transition-[height] duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0',
            className
        )}
        {...props}
    />
));
AccordionPanel.displayName = 'AccordionPanel';
