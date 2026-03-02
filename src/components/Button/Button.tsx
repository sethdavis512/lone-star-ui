import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

const buttonVariants = cva({
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants: {
        variant: {
            primary:
                'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
            secondary:
                'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
            destructive:
                'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
            outline:
                'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
            ghost: 'hover:bg-gray-100 focus-visible:ring-gray-500'
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
