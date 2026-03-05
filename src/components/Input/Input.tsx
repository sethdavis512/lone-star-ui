import { Input as BaseInput } from '@base-ui/react/input';
import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';
import React from 'react';

const inputVariants = cva({
    base: 'flex w-full rounded-md border bg-surface px-3 text-sm text-pecan transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-pecan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 data-disabled:cursor-not-allowed data-disabled:opacity-50',
    variants: {
        variant: {
            default: 'border-pecan/25 focus-visible:ring-sky',
            error: 'border-prickly-pear focus-visible:ring-prickly-pear'
        },
        size: {
            sm: 'h-8 text-xs',
            md: 'h-10',
            lg: 'h-12 text-base'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'md'
    }
});

export interface InputProps
    extends Omit<React.ComponentPropsWithoutRef<typeof BaseInput>, 'size'>,
        VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <BaseInput
                ref={ref}
                className={cn(inputVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';
