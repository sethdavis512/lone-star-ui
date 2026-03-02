import { test, expect } from 'bun:test';
import { cn } from './cn';

test('merges class names', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
});

test('handles conditional classes', () => {
    expect(cn('px-4', false && 'hidden', 'py-2')).toBe('px-4 py-2');
});

test('resolves tailwind conflicts — last wins', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8');
});

test('consumer className overrides base', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8');
});
