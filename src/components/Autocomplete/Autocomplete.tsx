import { Autocomplete } from '@base-ui/react/autocomplete';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Pass-through parts ─────────────────────────────────────────────────────────
export const AutocompleteRoot = Autocomplete.Root;
export const AutocompleteValue = Autocomplete.Value;
export const AutocompletePortal = Autocomplete.Portal;
export const AutocompleteGroup = Autocomplete.Group;
export const AutocompleteCollection = Autocomplete.Collection;

// ── AutocompleteInput ──────────────────────────────────────────────────────────
export const AutocompleteInput = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Input>
>(({ className, ...props }, ref) => (
    <Autocomplete.Input
        ref={ref}
        className={cn(
            'flex h-10 w-full rounded-md border border-pecan/25 bg-surface px-3.5 text-base text-pecan font-normal transition-colors placeholder:text-pecan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
            className
        )}
        {...props}
    />
));
AutocompleteInput.displayName = 'AutocompleteInput';

// ── AutocompleteTrigger ────────────────────────────────────────────────────────
export const AutocompleteTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Trigger>
>(({ className, ...props }, ref) => (
    <Autocomplete.Trigger
        ref={ref}
        className={cn(
            'flex h-10 w-7 items-center justify-center rounded-r-md border-0 bg-transparent p-0 text-pecan/60 transition-colors hover:not-data-[disabled]:text-pecan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-1 data-[disabled]:opacity-50',
            className
        )}
        {...props}
    />
));
AutocompleteTrigger.displayName = 'AutocompleteTrigger';

// ── AutocompleteIcon ───────────────────────────────────────────────────────────
export const AutocompleteIcon = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Icon>
>(({ className, children, ...props }, ref) => (
    <Autocomplete.Icon
        ref={ref}
        className={cn('flex items-center justify-center', className)}
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
    </Autocomplete.Icon>
));
AutocompleteIcon.displayName = 'AutocompleteIcon';

// ── AutocompleteClear ──────────────────────────────────────────────────────────
export const AutocompleteClear = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Clear>
>(({ className, ...props }, ref) => (
    <Autocomplete.Clear
        ref={ref}
        className={cn(
            'flex h-10 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-pecan/50 transition-colors hover:not-data-[disabled]:text-prickly-pear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-1',
            className
        )}
        {...props}
    />
));
AutocompleteClear.displayName = 'AutocompleteClear';

// ── AutocompletePositioner ─────────────────────────────────────────────────────
export const AutocompletePositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Positioner>
>(({ className, ...props }, ref) => (
    <Autocomplete.Positioner
        ref={ref}
        className={cn('z-50 outline-none', className)}
        sideOffset={4}
        {...props}
    />
));
AutocompletePositioner.displayName = 'AutocompletePositioner';

// ── AutocompletePopup ──────────────────────────────────────────────────────────
export const AutocompletePopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Popup>
>(({ className, ...props }, ref) => (
    <Autocomplete.Popup
        ref={ref}
        className={cn(
            'w-[var(--anchor-width)] max-h-[min(var(--available-height),22rem)] max-w-[var(--available-width)] overflow-y-auto scroll-py-2 overscroll-contain rounded-lg border border-pecan/15 bg-surface py-1.5 shadow-lg shadow-pecan/10 origin-[var(--transform-origin)] transition-[transform,scale,opacity] duration-100 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            className
        )}
        {...props}
    />
));
AutocompletePopup.displayName = 'AutocompletePopup';

// ── AutocompleteList ───────────────────────────────────────────────────────────
export const AutocompleteList = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.List>
>(({ className, ...props }, ref) => (
    <Autocomplete.List
        ref={ref}
        className={cn('outline-none data-[empty]:p-0', className)}
        {...props}
    />
));
AutocompleteList.displayName = 'AutocompleteList';

// ── AutocompleteItem ───────────────────────────────────────────────────────────
export const AutocompleteItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Item>
>(({ className, ...props }, ref) => (
    <Autocomplete.Item
        ref={ref}
        className={cn(
            'relative grid cursor-default select-none grid-cols-[0.875rem_1fr] items-center gap-2 px-3 py-2 text-sm text-pecan outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            'data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1.5 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-pecan data-[highlighted]:before:content-[""] data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white',
            className
        )}
        {...props}
    />
));
AutocompleteItem.displayName = 'AutocompleteItem';

// ── AutocompleteEmpty ──────────────────────────────────────────────────────────
export const AutocompleteEmpty = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.Empty>
>(({ className, ...props }, ref) => (
    <Autocomplete.Empty
        ref={ref}
        className={cn('px-4 py-3 text-sm text-pecan/60 italic', className)}
        {...props}
    />
));
AutocompleteEmpty.displayName = 'AutocompleteEmpty';

// ── AutocompleteGroupLabel ─────────────────────────────────────────────────────
export const AutocompleteGroupLabel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Autocomplete.GroupLabel>
>(({ className, ...props }, ref) => (
    <Autocomplete.GroupLabel
        ref={ref}
        className={cn(
            'sticky top-0 z-[1] bg-surface px-3 pb-1 pt-2.5 text-[0.65rem] font-semibold uppercase tracking-widest text-pecan/50',
            className
        )}
        {...props}
    />
));
AutocompleteGroupLabel.displayName = 'AutocompleteGroupLabel';
