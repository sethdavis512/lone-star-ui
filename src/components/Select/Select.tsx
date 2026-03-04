import { Select as BaseSelect } from '@base-ui/react/select';
import React from 'react';
import { cn } from '../../utils/cn';

// ── Icons ─────────────────────────────────────────────────────────────────────
function CheckIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            fill="currentcolor"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden
            {...props}
        >
            <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
        </svg>
    );
}

function ChevronUpDownIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            stroke="currentcolor"
            strokeWidth="1.5"
            aria-hidden
            {...props}
        >
            <path d="M0.5 4.5L4 1.5L7.5 4.5" />
            <path d="M0.5 7.5L4 10.5L7.5 7.5" />
        </svg>
    );
}

// ── Pass-through parts ────────────────────────────────────────────────────────
export const SelectRoot = BaseSelect.Root;
export const SelectPortal = BaseSelect.Portal;
export const SelectBackdrop = BaseSelect.Backdrop;
export const SelectGroup = BaseSelect.Group;
export const SelectSeparator = BaseSelect.Separator;

// ── SelectTrigger ─────────────────────────────────────────────────────────────
export const SelectTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ className, ...props }, ref) => (
    <BaseSelect.Trigger
        ref={ref}
        className={cn(
            'flex h-10 min-w-36 items-center justify-between gap-2 rounded-md border border-pecan/25 bg-white px-3 text-sm text-pecan transition-colors select-none hover:not-data-[disabled]:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-[popup-open]:bg-mesa data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
            className
        )}
        {...props}
    />
));
SelectTrigger.displayName = 'SelectTrigger';

// ── SelectValue ───────────────────────────────────────────────────────────────
export const SelectValue = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.Value>
>(({ className, ...props }, ref) => (
    <BaseSelect.Value
        ref={ref}
        className={cn('data-[placeholder]:text-pecan/40', className)}
        {...props}
    />
));
SelectValue.displayName = 'SelectValue';

// ── SelectIcon ────────────────────────────────────────────────────────────────
export const SelectIcon = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.Icon>
>(({ className, children, ...props }, ref) => (
    <BaseSelect.Icon
        ref={ref}
        className={cn('flex text-pecan/50', className)}
        {...props}
    >
        {children ?? <ChevronUpDownIcon />}
    </BaseSelect.Icon>
));
SelectIcon.displayName = 'SelectIcon';

// ── SelectPositioner ──────────────────────────────────────────────────────────
export const SelectPositioner = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.Positioner>
>(({ className, ...props }, ref) => (
    <BaseSelect.Positioner
        ref={ref}
        className={cn('z-50 outline-none select-none', className)}
        sideOffset={8}
        {...props}
    />
));
SelectPositioner.displayName = 'SelectPositioner';

// ── SelectPopup ───────────────────────────────────────────────────────────────
export const SelectPopup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.Popup>
>(({ className, ...props }, ref) => (
    <BaseSelect.Popup
        ref={ref}
        className={cn(
            'min-w-[var(--anchor-width)] max-h-[min(var(--available-height),22rem)] overflow-y-auto rounded-lg border border-pecan/15 bg-white py-1 shadow-lg shadow-pecan/10 origin-[var(--transform-origin)] transition-[transform,scale,opacity] duration-100 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            className
        )}
        {...props}
    />
));
SelectPopup.displayName = 'SelectPopup';

// ── SelectList ────────────────────────────────────────────────────────────────
export const SelectList = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.List>
>(({ className, ...props }, ref) => (
    <BaseSelect.List
        ref={ref}
        className={cn('outline-none relative scroll-py-6 py-1', className)}
        {...props}
    />
));
SelectList.displayName = 'SelectList';

// ── SelectItem ────────────────────────────────────────────────────────────────
export const SelectItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ className, ...props }, ref) => (
    <BaseSelect.Item
        ref={ref}
        className={cn(
            'relative grid cursor-default select-none grid-cols-[0.875rem_1fr] items-center gap-2 px-3 py-2 text-sm text-pecan outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            'data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1.5 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-md data-[highlighted]:before:bg-pecan data-[highlighted]:before:content-[""] data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white',
            className
        )}
        {...props}
    />
));
SelectItem.displayName = 'SelectItem';

// ── SelectItemText ────────────────────────────────────────────────────────────
export const SelectItemText = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.ItemText>
>(({ className, ...props }, ref) => (
    <BaseSelect.ItemText
        ref={ref}
        className={cn('col-start-2', className)}
        {...props}
    />
));
SelectItemText.displayName = 'SelectItemText';

// ── SelectItemIndicator ───────────────────────────────────────────────────────
export const SelectItemIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.ItemIndicator>
>(({ className, children, ...props }, ref) => (
    <BaseSelect.ItemIndicator
        ref={ref}
        className={cn('col-start-1', className)}
        {...props}
    >
        {children ?? <CheckIcon />}
    </BaseSelect.ItemIndicator>
));
SelectItemIndicator.displayName = 'SelectItemIndicator';

// ── SelectGroupLabel ──────────────────────────────────────────────────────────
export const SelectGroupLabel = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(({ className, ...props }, ref) => (
    <BaseSelect.GroupLabel
        ref={ref}
        className={cn(
            'px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-pecan/50',
            className
        )}
        {...props}
    />
));
SelectGroupLabel.displayName = 'SelectGroupLabel';

// ── SelectScrollUpArrow ───────────────────────────────────────────────────────
export const SelectScrollUpArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollUpArrow>
>(({ className, ...props }, ref) => (
    <BaseSelect.ScrollUpArrow
        ref={ref}
        className={cn(
            'top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center text-pecan/50 before:absolute before:inset-x-0 before:h-full before:content-[""]',
            className
        )}
        {...props}
    />
));
SelectScrollUpArrow.displayName = 'SelectScrollUpArrow';

// ── SelectScrollDownArrow ─────────────────────────────────────────────────────
export const SelectScrollDownArrow = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollDownArrow>
>(({ className, ...props }, ref) => (
    <BaseSelect.ScrollDownArrow
        ref={ref}
        className={cn(
            'bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center text-pecan/50 before:absolute before:inset-x-0 before:h-full before:content-[""]',
            className
        )}
        {...props}
    />
));
SelectScrollDownArrow.displayName = 'SelectScrollDownArrow';
