import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
    AutocompleteRoot,
    AutocompleteInput,
    AutocompleteTrigger,
    AutocompleteIcon,
    AutocompleteClear,
    AutocompletePortal,
    AutocompletePositioner,
    AutocompletePopup,
    AutocompleteList,
    AutocompleteItem,
    AutocompleteEmpty
} from './Autocomplete';

const meta: Meta = {
    title: 'Sparks/Autocomplete',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

const FRAMEWORKS = [
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'SolidJS',
    'Astro',
    'Remix',
    'Next.js',
    'Nuxt',
    'Qwik'
];

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <AutocompleteRoot items={FRAMEWORKS}>
                <div className="relative flex items-center">
                    <AutocompleteInput placeholder="Search frameworks…" />
                    <AutocompleteClear
                        aria-label="Clear"
                        className="absolute right-7"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </AutocompleteClear>
                    <AutocompleteTrigger aria-label="Open" className="absolute right-0">
                        <AutocompleteIcon />
                    </AutocompleteTrigger>
                </div>
                <AutocompletePortal>
                    <AutocompletePositioner>
                        <AutocompletePopup>
                            <AutocompleteList>
                                {FRAMEWORKS.map((fw) => (
                                    <AutocompleteItem key={fw} value={fw}>
                                        {fw}
                                    </AutocompleteItem>
                                ))}
                                <AutocompleteEmpty>No frameworks found.</AutocompleteEmpty>
                            </AutocompleteList>
                        </AutocompletePopup>
                    </AutocompletePositioner>
                </AutocompletePortal>
            </AutocompleteRoot>
        </div>
    )
};

const STATES = [
    { group: 'South', items: ['Texas', 'Louisiana', 'Arkansas', 'Oklahoma'] },
    { group: 'West', items: ['California', 'Colorado', 'Arizona', 'Nevada'] },
    { group: 'Northeast', items: ['New York', 'Massachusetts', 'Vermont', 'Maine'] }
];

const ALL_STATES = STATES.flatMap((g) => g.items);

export const Grouped: Story = {
    render: () => (
        <div className="w-72">
            <AutocompleteRoot items={ALL_STATES}>
                <div className="relative flex items-center">
                    <AutocompleteInput placeholder="Search states…" />
                    <AutocompleteTrigger aria-label="Open" className="absolute right-0">
                        <AutocompleteIcon />
                    </AutocompleteTrigger>
                </div>
                <AutocompletePortal>
                    <AutocompletePositioner>
                        <AutocompletePopup>
                            <AutocompleteList>
                                {ALL_STATES.map((s) => (
                                    <AutocompleteItem key={s} value={s}>
                                        {s}
                                    </AutocompleteItem>
                                ))}
                                <AutocompleteEmpty>No states found.</AutocompleteEmpty>
                            </AutocompleteList>
                        </AutocompletePopup>
                    </AutocompletePositioner>
                </AutocompletePortal>
            </AutocompleteRoot>
        </div>
    )
};
