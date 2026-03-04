import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

const avatarVariants = cva({
    base: 'inline-flex items-center justify-center rounded-full font-semibold shrink-0 overflow-hidden select-none',
    variants: {
        color: {
            sky: 'bg-sky text-white',
            longhorn: 'bg-longhorn text-white',
            pecan: 'bg-pecan text-white',
            bluebonnet: 'bg-bluebonnet text-white',
            'prickly-pear': 'bg-prickly-pear text-white',
            mesa: 'bg-mesa text-pecan'
        },
        size: {
            sm: 'h-8 w-8 text-xs',
            md: 'h-10 w-10 text-sm',
            lg: 'h-14 w-14 text-base'
        }
    },
    defaultVariants: {
        color: 'sky',
        size: 'md'
    }
});

export interface AvatarProps
    extends
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
        VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    initials?: string;
}

export function Avatar({
    className,
    color,
    size,
    src,
    alt,
    initials,
    ...props
}: AvatarProps) {
    return (
        <span
            className={cn(avatarVariants({ color, size }), className)}
            {...props}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt ?? ''}
                    className="h-full w-full object-cover"
                />
            ) : (
                <span aria-label={alt}>{initials}</span>
            )}
        </span>
    );
}
