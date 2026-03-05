import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Pass-through parts (no styling needed) ────────────────────────────────
export const ComboboxRoot = BaseCombobox.Root;
export const ComboboxPortal = BaseCombobox.Portal;
export const ComboboxGroup = BaseCombobox.Group;
export const ComboboxCollection = BaseCombobox.Collection;
export const ComboboxValue = BaseCombobox.Value;
export const ComboboxChips = BaseCombobox.Chips;
export const ComboboxChip = BaseCombobox.Chip;
export const ComboboxChipRemove = BaseCombobox.ChipRemove;

// ── ComboboxInput ─────────────────────────────────────────────────────────
export const ComboboxInput = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Input>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Input
        ref={ref}
        className={cn(
            'flex h-10 w-full rounded-md border border-pecan/25 bg-surface px-3.5 text-base text-pecan font-normal transition-colors placeholder:text-pecan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky data-disabled:cursor-not-allowed data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
ComboboxInput.displayName = 'ComboboxInput';

// ── ComboboxTrigger ───────────────────────────────────────────────────────
export const ComboboxTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Trigger>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Trigger
        ref={ref}
        className={cn(
            'flex h-10 w-7 items-center justify-center rounded-r-md border-0 bg-transparent p-0 text-pecan/60 transition-colors hover:not-data-disabled:text-pecan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-1 data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
ComboboxTrigger.displayName = 'ComboboxTrigger';

// ── ComboboxClear ─────────────────────────────────────────────────────────
export const ComboboxClear = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Clear>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Clear
        ref={ref}
        className={cn(
            'flex h-10 w-7 items-center justify-center rounded-md border-0 bg-transparent p-0 text-pecan/50 transition-colors hover:not-data-disabled:text-prickly-pear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-1',
            className
        )}
        {...props}
    />
));
ComboboxClear.displayName = 'ComboboxClear';

// ── ComboboxPositioner ────────────────────────────────────────────────────
export const ComboboxPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Positioner>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Positioner
        ref={ref}
        className={cn('z-50 outline-none', className)}
        sideOffset={4}
        {...props}
    />
));
ComboboxPositioner.displayName = 'ComboboxPositioner';

// ── ComboboxPopup ─────────────────────────────────────────────────────────
export const ComboboxPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Popup>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Popup
        ref={ref}
        className={cn(
            'w-[var(--anchor-width)] max-h-[min(var(--available-height),22rem)] max-w-[var(--available-width)] overflow-y-auto scroll-py-2 overscroll-contain rounded-lg border border-pecan/15 bg-surface py-1.5 shadow-lg shadow-pecan/10 origin-[var(--transform-origin)] transition-[transform,scale,opacity] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0',
            className
        )}
        {...props}
    />
));
ComboboxPopup.displayName = 'ComboboxPopup';

// ── ComboboxList ──────────────────────────────────────────────────────────
export const ComboboxList = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.List>
>(({ className, ...props }, ref) => (
    <BaseCombobox.List
        ref={ref}
        className={cn('outline-none data-empty:p-0', className)}
        {...props}
    />
));
ComboboxList.displayName = 'ComboboxList';

// ── ComboboxItem ──────────────────────────────────────────────────────────
export const ComboboxItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Item>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Item
        ref={ref}
        className={cn(
            'relative grid cursor-default select-none grid-cols-[0.875rem_1fr] items-center gap-2 px-3 py-2 text-sm text-pecan outline-none data-disabled:pointer-events-none data-disabled:opacity-50',
            // Highlighted: warm pecan background — like a Texas night sky
            'data-highlighted:before:absolute data-highlighted:before:inset-x-1.5 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-pecan data-highlighted:before:content-[""] data-highlighted:relative data-highlighted:z-0 data-highlighted:text-white',
            className
        )}
        {...props}
    />
));
ComboboxItem.displayName = 'ComboboxItem';

// ── ComboboxItemIndicator ─────────────────────────────────────────────────
export const ComboboxItemIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.ItemIndicator>
>(({ className, children, ...props }, ref) => (
    <BaseCombobox.ItemIndicator
        ref={ref}
        className={cn(
            'col-start-1 flex items-center justify-center text-longhorn data-highlighted:text-white',
            className
        )}
        {...props}
    >
        {children ?? (
            <svg
                fill="currentColor"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden
            >
                <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
            </svg>
        )}
    </BaseCombobox.ItemIndicator>
));
ComboboxItemIndicator.displayName = 'ComboboxItemIndicator';

// ── ComboboxItemText ──────────────────────────────────────────────────────
export function ComboboxItemText({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('col-start-2', className)} {...props} />;
}

// ── ComboboxEmpty ─────────────────────────────────────────────────────────
export const ComboboxEmpty = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Empty>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Empty
        ref={ref}
        className={cn(
            'px-4 py-3 text-sm text-pecan/60 italic empty:m-0 empty:p-0',
            className
        )}
        {...props}
    />
));
ComboboxEmpty.displayName = 'ComboboxEmpty';

// ── ComboboxSeparator ─────────────────────────────────────────────────────
export function ComboboxSeparator({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            role="separator"
            className={cn('my-1 mx-2 h-px bg-pecan/10', className)}
            {...props}
        />
    );
}

// ── ComboboxGroupLabel ────────────────────────────────────────────────────
export const ComboboxGroupLabel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.GroupLabel>
>(({ className, ...props }, ref) => (
    <BaseCombobox.GroupLabel
        ref={ref}
        className={cn(
            'sticky top-0 z-[1] bg-surface px-3 pb-1 pt-2.5 text-[0.65rem] font-semibold uppercase tracking-widest text-pecan/50',
            className
        )}
        {...props}
    />
));
ComboboxGroupLabel.displayName = 'ComboboxGroupLabel';

// ── ComboboxStatus ────────────────────────────────────────────────────────
export const ComboboxStatus = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Status>
>(({ className, ...props }, ref) => (
    <BaseCombobox.Status
        ref={ref}
        className={cn(
            'flex items-center gap-2 px-3 py-1.5 text-sm text-pecan/60 empty:hidden',
            className
        )}
        {...props}
    />
));
ComboboxStatus.displayName = 'ComboboxStatus';

// ── ComboboxIcon ──────────────────────────────────────────────────────────
export const ComboboxIcon = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseCombobox.Icon>
>(({ className, children, ...props }, ref) => (
    <BaseCombobox.Icon
        ref={ref}
        className={cn('flex shrink-0 text-pecan/60', className)}
        {...props}
    >
        {children ?? (
            <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
            >
                <path d="M0.5 4.5L4 1.5L7.5 4.5" />
                <path d="M0.5 7.5L4 10.5L7.5 7.5" />
            </svg>
        )}
    </BaseCombobox.Icon>
));
ComboboxIcon.displayName = 'ComboboxIcon';
