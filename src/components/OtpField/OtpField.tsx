import * as React from 'react';
import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field';
import { cn } from '../../utils/cn';

export const OtpFieldRoot = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof OTPField.Root>
>(({ className, ...props }, ref) => (
    <OTPField.Root
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
    />
));
OtpFieldRoot.displayName = 'OtpFieldRoot';

export const OtpFieldInput = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<typeof OTPField.Input>
>(({ className, ...props }, ref) => (
    <OTPField.Input
        ref={ref}
        className={cn(
            'h-12 w-10 rounded-md border border-pecan/25 bg-surface text-center text-lg font-medium text-pecan transition-colors focus-visible:border-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 data-disabled:cursor-not-allowed data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
OtpFieldInput.displayName = 'OtpFieldInput';

export const OtpFieldSeparator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof OTPField.Separator>
>(({ className, children, ...props }, ref) => (
    <OTPField.Separator
        ref={ref}
        className={cn('select-none text-pecan/40', className)}
        {...props}
    >
        {children ?? (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="h-3 w-3"
                aria-hidden
            >
                <path d="M5 12h14" />
            </svg>
        )}
    </OTPField.Separator>
));
OtpFieldSeparator.displayName = 'OtpFieldSeparator';
