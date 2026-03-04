import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
    ToolbarRoot,
    ToolbarButton,
    ToolbarLink,
    ToolbarSeparator,
    ToolbarGroup,
    ToolbarInput
} from './Toolbar';

const meta: Meta = {
    title: 'Sparks/Toolbar',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj;

function BoldIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        </svg>
    );
}

function ItalicIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="19" y1="4" x2="10" y2="4" />
            <line x1="14" y1="20" x2="5" y2="20" />
            <line x1="15" y1="4" x2="9" y2="20" />
        </svg>
    );
}

function UnderlineIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
            <line x1="4" y1="21" x2="20" y2="21" />
        </svg>
    );
}

function AlignLeftIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="15" y1="12" x2="3" y2="12" />
            <line x1="17" y1="18" x2="3" y2="18" />
        </svg>
    );
}

function AlignCenterIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="6" />
            <line x1="21" y1="12" x2="3" y2="12" />
            <line x1="18" y1="18" x2="6" y2="18" />
        </svg>
    );
}

function AlignRightIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="12" x2="9" y2="12" />
            <line x1="21" y1="18" x2="7" y2="18" />
        </svg>
    );
}

export const Basic: Story = {
    render: () => (
        <ToolbarRoot aria-label="Text formatting">
            <ToolbarGroup aria-label="Formatting">
                <ToolbarButton aria-label="Bold">
                    <BoldIcon />
                </ToolbarButton>
                <ToolbarButton aria-label="Italic">
                    <ItalicIcon />
                </ToolbarButton>
                <ToolbarButton aria-label="Underline">
                    <UnderlineIcon />
                </ToolbarButton>
            </ToolbarGroup>
            <ToolbarSeparator />
            <ToolbarGroup aria-label="Alignment">
                <ToolbarButton aria-label="Align left">
                    <AlignLeftIcon />
                </ToolbarButton>
                <ToolbarButton aria-label="Align center">
                    <AlignCenterIcon />
                </ToolbarButton>
                <ToolbarButton aria-label="Align right">
                    <AlignRightIcon />
                </ToolbarButton>
            </ToolbarGroup>
            <ToolbarSeparator />
            <ToolbarLink href="#">Help</ToolbarLink>
        </ToolbarRoot>
    )
};

export const WithInput: Story = {
    render: () => (
        <ToolbarRoot aria-label="Search toolbar">
            <ToolbarButton aria-label="Bold">
                <BoldIcon />
            </ToolbarButton>
            <ToolbarButton aria-label="Italic">
                <ItalicIcon />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarInput aria-label="Search" placeholder="Search…" />
        </ToolbarRoot>
    )
};

export const WithDisabled: Story = {
    render: () => (
        <ToolbarRoot aria-label="Toolbar with disabled items">
            <ToolbarButton aria-label="Bold">
                <BoldIcon />
            </ToolbarButton>
            <ToolbarButton aria-label="Italic" disabled>
                <ItalicIcon />
            </ToolbarButton>
            <ToolbarButton aria-label="Underline">
                <UnderlineIcon />
            </ToolbarButton>
        </ToolbarRoot>
    )
};
