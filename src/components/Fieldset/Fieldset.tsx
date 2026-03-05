import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import React from 'react';
import { cn } from '../../utils/cn';

export const FieldsetRoot = React.forwardRef<
    HTMLFieldSetElement,
    React.ComponentPropsWithoutRef<typeof BaseFieldset.Root>
>(({ className, ...props }, ref) => (
    <BaseFieldset.Root
        ref={ref}
        className={cn('flex flex-col gap-4 border-0 m-0 p-0', className)}
        {...props}
    />
));
FieldsetRoot.displayName = 'FieldsetRoot';

export const FieldsetLegend = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof BaseFieldset.Legend>
>(({ className, ...props }, ref) => (
    <BaseFieldset.Legend
        ref={ref}
        className={cn(
            'text-base font-semibold text-pecan border-b border-pecan/15 pb-3 w-full',
            className
        )}
        {...props}
    />
));
FieldsetLegend.displayName = 'FieldsetLegend';
