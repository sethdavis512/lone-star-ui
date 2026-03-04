import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

const alertVariants = cva({
    base: 'relative w-full rounded-lg border-l-4 p-4',
    variants: {
        variant: {
            info: 'border-l-sky bg-sky/8 text-pecan',
            warning: 'border-l-longhorn bg-longhorn/8 text-pecan',
            error: 'border-l-prickly-pear bg-prickly-pear/8 text-pecan',
            default: 'border-l-pecan bg-mesa text-pecan'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});

export interface AlertProps
    extends
        React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
    return (
        <div
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        />
    );
}

export function AlertTitle({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h5
            className={cn(
                'mb-1 font-semibold leading-none tracking-tight',
                className
            )}
            {...props}
        />
    );
}

export function AlertDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cn('text-sm opacity-90', className)} {...props} />;
}
