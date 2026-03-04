import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../Card';
import { Avatar, type AvatarProps } from '../Avatar';
import { Badge, type BadgeProps } from '../Badge';
import { SeparatorRoot } from '../Separator';
import { cn } from '../../utils/cn';

export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Avatar image URL */
    src?: string;
    alt?: string;
    initials?: string;
    avatarColor?: AvatarProps['color'];
    name: string;
    role?: string;
    /** Short bio or description shown below the role */
    bio?: string;
    badge?: string;
    badgeVariant?: BadgeProps['variant'];
    /** Action buttons or links rendered in the card footer */
    actions?: React.ReactNode;
}

export function ProfileCard({
    src,
    alt,
    initials,
    avatarColor,
    name,
    role,
    bio,
    badge,
    badgeVariant = 'sky',
    actions,
    className,
    ...props
}: ProfileCardProps) {
    return (
        <Card className={cn('w-72', className)} {...props}>
            <CardHeader className="items-center text-center gap-3 pb-3">
                <Avatar
                    src={src}
                    alt={alt}
                    initials={initials}
                    color={avatarColor}
                    size="lg"
                />
                <div className="space-y-1">
                    <h3 className="text-base font-semibold text-pecan">
                        {name}
                    </h3>
                    {role && <p className="text-sm text-pecan/60">{role}</p>}
                    {badge && (
                        <Badge variant={badgeVariant} className="mt-1">
                            {badge}
                        </Badge>
                    )}
                </div>
            </CardHeader>

            {bio && (
                <>
                    <SeparatorRoot />
                    <CardContent className="pt-4 text-sm text-pecan/70 text-center">
                        {bio}
                    </CardContent>
                </>
            )}

            {actions && (
                <>
                    <SeparatorRoot />
                    <CardFooter className="justify-center gap-2 pt-4">
                        {actions}
                    </CardFooter>
                </>
            )}
        </Card>
    );
}
