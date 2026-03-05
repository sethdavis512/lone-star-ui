import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
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

function MinusIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            fill="none"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            stroke="currentcolor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden
            {...props}
        >
            <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
    );
}

// ── CheckboxGroup ─────────────────────────────────────────────────────────────
export const CheckboxGroup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseCheckboxGroup>
>(({ className, ...props }, ref) => (
    <BaseCheckboxGroup
        ref={ref}
        className={cn('flex flex-col gap-2', className)}
        {...props}
    />
));
CheckboxGroup.displayName = 'CheckboxGroup';

// ── CheckboxRoot ──────────────────────────────────────────────────────────────
export const CheckboxRoot = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>
>(({ className, ...props }, ref) => (
    <BaseCheckbox.Root
        ref={ref}
        className={cn(
            'flex size-5 shrink-0 items-center justify-center rounded-sm border border-pecan/30 bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-checked:border-sky data-checked:bg-sky data-indeterminate:border-sky data-indeterminate:bg-sky data-disabled:cursor-not-allowed data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
CheckboxRoot.displayName = 'CheckboxRoot';

// ── CheckboxIndicator ─────────────────────────────────────────────────────────
export const CheckboxIndicator = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<typeof BaseCheckbox.Indicator> & {
        indeterminate?: boolean;
    }
>(({ className, children, indeterminate, ...props }, ref) => (
    <BaseCheckbox.Indicator
        ref={ref}
        className={cn('flex text-white data-unchecked:hidden', className)}
        {...props}
    >
        {children ?? (indeterminate ? <MinusIcon /> : <CheckIcon />)}
    </BaseCheckbox.Indicator>
));
CheckboxIndicator.displayName = 'CheckboxIndicator';
