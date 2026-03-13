import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

export const badgeVariants = cva({
    base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
    variants: {
        variant: {
            sky: 'bg-sky/15 text-sky',
            longhorn: 'bg-longhorn/15 text-longhorn',
            pecan: 'bg-mesa text-pecan',
            bluebonnet: 'bg-bluebonnet/15 text-bluebonnet',
            'prickly-pear': 'bg-prickly-pear/15 text-prickly-pear',
            outline: 'border border-pecan/30 bg-transparent text-pecan'
        }
    },
    defaultVariants: {
        variant: 'sky'
    }
});

export interface BadgeProps
    extends
        React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <span
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    );
}
