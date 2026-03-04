import { Field as BaseField } from '@base-ui/react/field';
import React from 'react';
import { cn } from '../../utils/cn';

// ── FieldRoot ─────────────────────────────────────────────────────────────────
export const FieldRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseField.Root>
>(({ className, ...props }, ref) => (
    <BaseField.Root
        ref={ref}
        className={cn('flex flex-col gap-1', className)}
        {...props}
    />
));
FieldRoot.displayName = 'FieldRoot';

// ── FieldLabel ────────────────────────────────────────────────────────────────
export const FieldLabel = React.forwardRef<
    HTMLLabelElement,
    React.ComponentPropsWithoutRef<typeof BaseField.Label>
>(({ className, ...props }, ref) => (
    <BaseField.Label
        ref={ref}
        className={cn(
            'text-sm font-medium leading-none text-pecan data-[disabled]:text-pecan/50',
            className
        )}
        {...props}
    />
));
FieldLabel.displayName = 'FieldLabel';

// ── FieldControl ──────────────────────────────────────────────────────────────
// Pass-through — Field.Control is typically replaced by a Base UI input component
export const FieldControl = BaseField.Control;

// ── FieldDescription ──────────────────────────────────────────────────────────
export const FieldDescription = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<typeof BaseField.Description>
>(({ className, ...props }, ref) => (
    <BaseField.Description
        ref={ref}
        className={cn('text-xs text-pecan/60', className)}
        {...props}
    />
));
FieldDescription.displayName = 'FieldDescription';

// ── FieldError ────────────────────────────────────────────────────────────────
export const FieldError = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseField.Error>
>(({ className, ...props }, ref) => (
    <BaseField.Error
        ref={ref}
        className={cn('text-xs text-prickly-pear', className)}
        {...props}
    />
));
FieldError.displayName = 'FieldError';

// ── FieldItem ─────────────────────────────────────────────────────────────────
// Used to group individual checkbox/radio items with their label
export const FieldItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseField.Item>
>(({ className, ...props }, ref) => (
    <BaseField.Item
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
    />
));
FieldItem.displayName = 'FieldItem';

// ── FieldValidity ─────────────────────────────────────────────────────────────
// Pass-through — children must be a render function
export const FieldValidity = BaseField.Validity;
