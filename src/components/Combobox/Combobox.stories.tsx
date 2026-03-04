import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
    ComboboxRoot,
    ComboboxInput,
    ComboboxTrigger,
    ComboboxClear,
    ComboboxPortal,
    ComboboxPositioner,
    ComboboxPopup,
    ComboboxList,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxItemText,
    ComboboxEmpty,
    ComboboxSeparator,
    ComboboxGroup,
    ComboboxGroupLabel,
    ComboboxCollection
} from './Combobox';

// ── Icons ─────────────────────────────────────────────────────────────────
function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
            aria-hidden
            {...props}
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

function XIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="14"
            height="14"
            aria-hidden
            {...props}
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    );
}

// ── Data ──────────────────────────────────────────────────────────────────
interface City {
    label: string;
    value: string;
}

const texasCities: City[] = [
    { label: 'Austin', value: 'austin' },
    { label: 'Houston', value: 'houston' },
    { label: 'Dallas', value: 'dallas' },
    { label: 'San Antonio', value: 'san-antonio' },
    { label: 'Fort Worth', value: 'fort-worth' },
    { label: 'El Paso', value: 'el-paso' },
    { label: 'Arlington', value: 'arlington' },
    { label: 'Corpus Christi', value: 'corpus-christi' },
    { label: 'Lubbock', value: 'lubbock' },
    { label: 'Laredo', value: 'laredo' },
    { label: 'Irving', value: 'irving' },
    { label: 'Garland', value: 'garland' },
    { label: 'Plano', value: 'plano' },
    { label: 'Amarillo', value: 'amarillo' },
    { label: 'Grand Prairie', value: 'grand-prairie' },
    { label: 'McKinney', value: 'mckinney' },
    { label: 'Waco', value: 'waco' },
    { label: 'Midland', value: 'midland' },
    { label: 'Odessa', value: 'odessa' },
    { label: 'Abilene', value: 'abilene' }
];

interface RegionGroup {
    value: string;
    items: City[];
}

const groupedCities: RegionGroup[] = [
    {
        value: 'Central Texas',
        items: [
            { label: 'Austin', value: 'austin' },
            { label: 'Waco', value: 'waco' },
            { label: 'Temple', value: 'temple' }
        ]
    },
    {
        value: 'East Texas',
        items: [
            { label: 'Houston', value: 'houston' },
            { label: 'Beaumont', value: 'beaumont' },
            { label: 'Tyler', value: 'tyler' }
        ]
    },
    {
        value: 'North Texas',
        items: [
            { label: 'Dallas', value: 'dallas' },
            { label: 'Fort Worth', value: 'fort-worth' },
            { label: 'Plano', value: 'plano' },
            { label: 'Amarillo', value: 'amarillo' }
        ]
    },
    {
        value: 'South Texas',
        items: [
            { label: 'San Antonio', value: 'san-antonio' },
            { label: 'Laredo', value: 'laredo' },
            { label: 'Corpus Christi', value: 'corpus-christi' }
        ]
    },
    {
        value: 'West Texas',
        items: [
            { label: 'El Paso', value: 'el-paso' },
            { label: 'Midland', value: 'midland' },
            { label: 'Odessa', value: 'odessa' },
            { label: 'Abilene', value: 'abilene' }
        ]
    }
];

// ── Stories ───────────────────────────────────────────────────────────────
const meta = {
    title: 'Components/Combobox',
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="flex items-start justify-center p-12 min-h-72">
                <Story />
            </div>
        )
    ]
} satisfies Meta;
export default meta;

type Story = StoryObj;

// ── Simple ────────────────────────────────────────────────────────────────
export const Default: Story = {
    render() {
        const id = React.useId();
        return (
            <div className="flex flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    Texas City
                </label>
                <div className="relative flex items-center">
                    <ComboboxRoot items={texasCities}>
                        <ComboboxInput
                            id={id}
                            placeholder="e.g. Austin"
                            className="pr-[calc(0.5rem+1.75rem)]"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-pecan/50">
                            <ChevronDownIcon />
                        </div>

                        <ComboboxPortal>
                            <ComboboxPositioner>
                                <ComboboxPopup>
                                    <ComboboxEmpty>
                                        No Texas cities found.
                                    </ComboboxEmpty>
                                    <ComboboxList>
                                        {(city: City) => (
                                            <ComboboxItem
                                                key={city.value}
                                                value={city}
                                            >
                                                <ComboboxItemIndicator />
                                                <ComboboxItemText>
                                                    {city.label}
                                                </ComboboxItemText>
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                </ComboboxPopup>
                            </ComboboxPositioner>
                        </ComboboxPortal>
                    </ComboboxRoot>
                </div>
            </div>
        );
    }
};

// ── With Clear Button ─────────────────────────────────────────────────────
export const WithClear: Story = {
    render() {
        const id = React.useId();
        return (
            <div className="flex flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    Hometown
                </label>
                <ComboboxRoot items={texasCities}>
                    <div className="relative flex items-center">
                        <ComboboxInput
                            id={id}
                            placeholder="Pick your hometown…"
                            className="pr-[calc(0.5rem+3.5rem)]"
                        />
                        <div className="absolute inset-y-0 right-1 flex items-center gap-0.5">
                            <ComboboxClear aria-label="Clear selection">
                                <XIcon />
                            </ComboboxClear>
                            <ComboboxTrigger aria-label="Open list">
                                <ChevronDownIcon />
                            </ComboboxTrigger>
                        </div>
                    </div>

                    <ComboboxPortal>
                        <ComboboxPositioner>
                            <ComboboxPopup>
                                <ComboboxEmpty>
                                    No cities match your search.
                                </ComboboxEmpty>
                                <ComboboxList>
                                    {(city: City) => (
                                        <ComboboxItem
                                            key={city.value}
                                            value={city}
                                        >
                                            <ComboboxItemIndicator />
                                            <ComboboxItemText>
                                                {city.label}
                                            </ComboboxItemText>
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxPopup>
                        </ComboboxPositioner>
                    </ComboboxPortal>
                </ComboboxRoot>
            </div>
        );
    }
};

// ── Grouped ───────────────────────────────────────────────────────────────
export const Grouped: Story = {
    render() {
        const id = React.useId();
        return (
            <div className="flex flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    City by Region
                </label>
                <ComboboxRoot items={groupedCities}>
                    <div className="relative flex items-center">
                        <ComboboxInput
                            id={id}
                            placeholder="Search by region…"
                            className="pr-[calc(0.5rem+3.5rem)]"
                        />
                        <div className="absolute inset-y-0 right-1 flex items-center gap-0.5">
                            <ComboboxClear aria-label="Clear">
                                <XIcon />
                            </ComboboxClear>
                            <ComboboxTrigger aria-label="Open">
                                <ChevronDownIcon />
                            </ComboboxTrigger>
                        </div>
                    </div>

                    <ComboboxPortal>
                        <ComboboxPositioner>
                            <ComboboxPopup className="w-56">
                                <ComboboxEmpty>No cities found.</ComboboxEmpty>
                                <ComboboxList className="max-h-[20rem] overflow-y-auto scroll-pt-9">
                                    {(group: RegionGroup) => (
                                        <ComboboxGroup
                                            key={group.value}
                                            items={group.items}
                                        >
                                            <ComboboxGroupLabel>
                                                {group.value}
                                            </ComboboxGroupLabel>
                                            <ComboboxCollection>
                                                {(city: City) => (
                                                    <ComboboxItem
                                                        key={city.value}
                                                        value={city}
                                                    >
                                                        <ComboboxItemIndicator />
                                                        <ComboboxItemText>
                                                            {city.label}
                                                        </ComboboxItemText>
                                                    </ComboboxItem>
                                                )}
                                            </ComboboxCollection>
                                            <ComboboxSeparator />
                                        </ComboboxGroup>
                                    )}
                                </ComboboxList>
                            </ComboboxPopup>
                        </ComboboxPositioner>
                    </ComboboxPortal>
                </ComboboxRoot>
            </div>
        );
    }
};
