import * as React from 'react';
import { Avatar, type AvatarProps } from '../Avatar';
import { cn } from '../../utils/cn';

const sizeConfig = {
    sm: {
        avatarSize: 'sm' as const,
        name: 'text-sm font-medium',
        subtitle: 'text-xs',
        gap: 'gap-2'
    },
    md: {
        avatarSize: 'md' as const,
        name: 'text-sm font-medium',
        subtitle: 'text-xs',
        gap: 'gap-3'
    },
    lg: {
        avatarSize: 'lg' as const,
        name: 'text-base font-semibold',
        subtitle: 'text-sm',
        gap: 'gap-4'
    }
};

export interface AvatarLabelProps {
    src?: string;
    alt?: string;
    initials?: string;
    avatarColor?: AvatarProps['color'];
    name: string;
    subtitle?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function AvatarLabel({
    src,
    alt,
    initials,
    avatarColor,
    name,
    subtitle,
    size = 'md',
    className
}: AvatarLabelProps) {
    const cfg = sizeConfig[size];
    return (
        <div className={cn('flex items-center', cfg.gap, className)}>
            <Avatar
                src={src}
                alt={alt}
                initials={initials}
                color={avatarColor}
                size={cfg.avatarSize}
                className="shrink-0"
            />
            <div className="min-w-0">
                <p className={cn('truncate text-pecan', cfg.name)}>{name}</p>
                {subtitle && (
                    <p className={cn('truncate text-pecan/60', cfg.subtitle)}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
