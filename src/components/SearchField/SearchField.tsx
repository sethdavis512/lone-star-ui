import * as React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { cn } from '../../utils/cn';

export interface SearchFieldProps {
    placeholder?: string;
    buttonLabel?: string;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    disabled?: boolean;
    className?: string;
}

export function SearchField({
    placeholder = 'Search…',
    buttonLabel = 'Search',
    defaultValue,
    value: controlledValue,
    onValueChange,
    onSearch,
    disabled,
    className
}: SearchFieldProps) {
    const [internalValue, setInternalValue] = React.useState(
        defaultValue ?? ''
    );
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (isControlled) {
            onValueChange?.(e.target.value);
        } else {
            setInternalValue(e.target.value);
            onValueChange?.(e.target.value);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSearch?.(value);
    }

    return (
        <form onSubmit={handleSubmit} className={cn('flex gap-2', className)}>
            <Input
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className="flex-1"
                aria-label={placeholder}
            />
            <Button type="submit" disabled={disabled}>
                {buttonLabel}
            </Button>
        </form>
    );
}
