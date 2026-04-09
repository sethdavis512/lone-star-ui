import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';
import React from 'react';

export const textareaVariants = cva({
    base: 'flex w-full rounded-md border bg-surface px-3 py-2 text-sm text-pecan transition-colors placeholder:text-pecan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    variants: {
        variant: {
            default: 'border-pecan/25 focus-visible:ring-sky',
            error: 'border-prickly-pear focus-visible:ring-prickly-pear'
        },
        size: {
            sm: 'min-h-16 text-xs',
            md: 'min-h-24',
            lg: 'min-h-36 text-base'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'md'
    }
});

export interface TextareaProps
    extends Omit<React.ComponentPropsWithoutRef<'textarea'>, 'size'>,
        VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(textareaVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';
