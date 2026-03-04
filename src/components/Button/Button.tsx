import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

const buttonVariants = cva({
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants: {
        variant: {
            primary: 'bg-sky text-white hover:bg-sky/85 focus-visible:ring-sky',
            secondary:
                'bg-mesa text-pecan hover:bg-mesa/60 focus-visible:ring-pecan',
            destructive:
                'bg-prickly-pear text-white hover:bg-prickly-pear/85 focus-visible:ring-prickly-pear',
            outline:
                'border border-pecan/30 bg-transparent text-pecan hover:bg-mesa focus-visible:ring-pecan',
            ghost: 'text-pecan hover:bg-mesa focus-visible:ring-pecan'
        },
        size: {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 text-sm',
            lg: 'h-12 px-6 text-base'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
});

export interface ButtonProps
    extends
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}
