import * as React from 'react';
import { cn } from '../../utils/cn';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    subtitle?: string;
    /** Buttons, links, or any controls rendered flush-right */
    actions?: React.ReactNode;
    /** Optional slot above the title — useful for breadcrumbs */
    eyebrow?: React.ReactNode;
}

export function PageHeader({
    title,
    subtitle,
    actions,
    eyebrow,
    className,
    ...props
}: PageHeaderProps) {
    return (
        <header
            className={cn(
                'flex flex-col gap-4 border-b border-pecan/10 pb-6 sm:flex-row sm:items-start sm:justify-between',
                className
            )}
            {...props}
        >
            <div className="min-w-0 space-y-1">
                {eyebrow && (
                    <div className="text-xs font-medium uppercase tracking-widest text-pecan/50">
                        {eyebrow}
                    </div>
                )}
                <h1 className="truncate text-2xl font-bold text-pecan">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-sm text-pecan/60">{subtitle}</p>
                )}
            </div>
            {actions && (
                <div className="flex shrink-0 items-center gap-2">
                    {actions}
                </div>
            )}
        </header>
    );
}
