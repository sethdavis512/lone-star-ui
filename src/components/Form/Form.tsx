import * as React from 'react';
import { Form } from '@base-ui/react/form';
import { cn } from '../../utils/cn';

export const FormRoot = React.forwardRef<
    HTMLFormElement,
    React.ComponentPropsWithoutRef<typeof Form>
>(({ className, ...props }, ref) => (
    <Form ref={ref} className={cn('space-y-4', className)} {...props} />
));
FormRoot.displayName = 'FormRoot';
