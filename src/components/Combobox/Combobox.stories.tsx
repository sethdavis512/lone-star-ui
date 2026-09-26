import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { expect, userEvent, within } from 'storybook/test';
import {
    ComboboxRoot,
    ComboboxLabel,
    ComboboxInputGroup,
    ComboboxValue,
    ComboboxIcon,
    ComboboxBackdrop,
    ComboboxArrow,
    ComboboxRow,
    useComboboxFilter,
    useComboboxFilteredItems,
    createComboboxItems,
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

const meta = {
    title: 'Sparks/Combobox',
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
                            className="pr-9"
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
                            className="pr-16"
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
                            className="pr-16"
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
                                <ComboboxList className="max-h-80 overflow-y-auto scroll-pt-9">
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

export const WithInputGroup: Story = {
    render() {
        const id = React.useId();
        return (
            <div className="flex w-64 flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    Texas City
                </label>
                <ComboboxRoot items={texasCities}>
                    <ComboboxInputGroup>
                        <ComboboxInput
                            id={id}
                            placeholder="e.g. Waco"
                            className="pr-16"
                        />
                        <div className="absolute inset-y-0 right-1 flex items-center gap-0.5">
                            <ComboboxClear aria-label="Clear selection">
                                <XIcon />
                            </ComboboxClear>
                            <ComboboxTrigger aria-label="Open list">
                                <ChevronDownIcon />
                            </ComboboxTrigger>
                        </div>
                    </ComboboxInputGroup>

                    <ComboboxPortal>
                        <ComboboxPositioner>
                            <ComboboxPopup>
                                <ComboboxEmpty>No cities found.</ComboboxEmpty>
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
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText('Texas City');
        await userEvent.type(input, 'wac');
        const body = within(document.body);
        const option = await body.findByRole('option', { name: 'Waco' });
        await userEvent.click(option);
        await expect(input).toHaveValue('Waco');
    }
};

export const InputInsidePopup: Story = {
    render() {
        return (
            <div className="flex flex-col items-start gap-1.5">
                <ComboboxRoot items={texasCities}>
                    <ComboboxLabel>Hometown</ComboboxLabel>
                    <ComboboxTrigger className="w-56 justify-between gap-3 rounded-md border border-pecan/25 bg-surface pl-3.5 pr-3 text-base text-pecan data-placeholder:text-pecan/40">
                        <ComboboxValue placeholder="Select a city" />
                        <ComboboxIcon />
                    </ComboboxTrigger>

                    <ComboboxPortal>
                        <ComboboxBackdrop />
                        <ComboboxPositioner align="start" sideOffset={10}>
                            <ComboboxPopup
                                aria-label="Select a city"
                                className="w-64 overflow-visible py-0"
                            >
                                <ComboboxArrow>
                                    <svg
                                        width="20"
                                        height="10"
                                        viewBox="0 0 20 10"
                                        fill="none"
                                        aria-hidden
                                    >
                                        <path
                                            d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                                            className="fill-surface"
                                        />
                                        <path
                                            d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                                            className="fill-pecan/15"
                                        />
                                    </svg>
                                </ComboboxArrow>
                                <div className="border-b border-pecan/15 p-2">
                                    <ComboboxInput
                                        placeholder="Search cities…"
                                        className="h-9"
                                    />
                                </div>
                                <ComboboxEmpty>No cities found.</ComboboxEmpty>
                                <ComboboxList className="max-h-60 overflow-y-auto py-1.5">
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
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('combobox', { name: 'Hometown' });
        await userEvent.click(trigger);
        const body = within(document.body);
        const search = await body.findByPlaceholderText('Search cities…');
        await userEvent.type(search, 'lub');
        await userEvent.click(
            await body.findByRole('option', { name: 'Lubbock' })
        );
        await expect(trigger).toHaveTextContent('Lubbock');
    }
};

const GRID_COLUMNS = 3;

function chunk<T>(items: readonly T[], size: number): T[][] {
    const rows: T[][] = [];
    for (let i = 0; i < items.length; i += size) {
        rows.push(items.slice(i, i + size));
    }
    return rows;
}

function CityGridRows() {
    const filteredCities = useComboboxFilteredItems<City>();
    return chunk(filteredCities, GRID_COLUMNS).map((row, rowIndex) => (
        <ComboboxRow key={rowIndex} className="grid-cols-3 px-1.5">
            {row.map((city) => (
                <ComboboxItem
                    key={city.value}
                    value={city}
                    className="grid-cols-1 justify-items-center px-2 text-center"
                >
                    {city.label}
                </ComboboxItem>
            ))}
        </ComboboxRow>
    ));
}

export const GridLayout: Story = {
    render() {
        const id = React.useId();
        return (
            <div className="flex w-96 flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    Texas City (grid)
                </label>
                <ComboboxRoot items={texasCities} grid>
                    <ComboboxInputGroup>
                        <ComboboxInput
                            id={id}
                            placeholder="Search cities…"
                            className="pr-9"
                        />
                        <div className="absolute inset-y-0 right-1 flex items-center">
                            <ComboboxTrigger aria-label="Open grid">
                                <ChevronDownIcon />
                            </ComboboxTrigger>
                        </div>
                    </ComboboxInputGroup>

                    <ComboboxPortal>
                        <ComboboxPositioner>
                            <ComboboxPopup>
                                <ComboboxEmpty>No cities found.</ComboboxEmpty>
                                <ComboboxList>
                                    <CityGridRows />
                                </ComboboxList>
                            </ComboboxPopup>
                        </ComboboxPositioner>
                    </ComboboxPortal>
                </ComboboxRoot>
            </div>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Open grid' }));
        const body = within(document.body);
        await expect(await body.findByRole('grid')).toBeInTheDocument();
        const rows = body.getAllByRole('row');
        await expect(rows).toHaveLength(
            Math.ceil(texasCities.length / GRID_COLUMNS)
        );
        await userEvent.click(body.getByRole('gridcell', { name: 'Midland' }));
        await expect(canvas.getByLabelText('Texas City (grid)')).toHaveValue(
            'Midland'
        );
    }
};

const cityItems = createComboboxItems(texasCities, {
    getValue: (city) => city.value,
    getLabel: (city) => city.label
});

export const CreateItems: Story = {
    render() {
        const id = React.useId();
        const [value, setValue] = React.useState<string | null>('austin');
        return (
            <div className="flex w-64 flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    City ID
                </label>
                <ComboboxRoot
                    items={cityItems}
                    value={value}
                    onValueChange={setValue}
                >
                    <ComboboxInputGroup>
                        <ComboboxInput id={id} className="pr-9" />
                        <div className="absolute inset-y-0 right-1 flex items-center">
                            <ComboboxTrigger aria-label="Open list">
                                <ChevronDownIcon />
                            </ComboboxTrigger>
                        </div>
                    </ComboboxInputGroup>

                    <ComboboxPortal>
                        <ComboboxPositioner>
                            <ComboboxPopup>
                                <ComboboxEmpty>No cities found.</ComboboxEmpty>
                                <ComboboxList>
                                    {(city: City) => (
                                        <ComboboxItem
                                            key={city.value}
                                            value={city.value}
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
                <p className="text-sm text-pecan/60">
                    Stored value: <code data-testid="city-id">{value}</code>
                </p>
            </div>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText('City ID');
        await expect(input).toHaveValue('Austin');
        await userEvent.click(canvas.getByRole('button', { name: 'Open list' }));
        const body = within(document.body);
        await userEvent.click(
            await body.findByRole('option', { name: 'El Paso' })
        );
        await expect(input).toHaveValue('El Paso');
        await expect(canvas.getByTestId('city-id')).toHaveTextContent(
            'el-paso'
        );
    }
};

export const CustomFilter: Story = {
    render() {
        const id = React.useId();
        const { startsWith } = useComboboxFilter({ sensitivity: 'base' });
        return (
            <div className="flex w-64 flex-col gap-1">
                <label htmlFor={id} className="text-sm font-medium text-pecan">
                    Starts with
                </label>
                <ComboboxRoot
                    items={texasCities}
                    filter={(city: City, query) =>
                        startsWith(city.label, query)
                    }
                >
                    <ComboboxInput id={id} placeholder="Type a letter…" />

                    <ComboboxPortal>
                        <ComboboxPositioner>
                            <ComboboxPopup>
                                <ComboboxEmpty>No cities found.</ComboboxEmpty>
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
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByLabelText('Starts with'), 'a');
        const body = within(document.body);
        await expect(
            await body.findByRole('option', { name: 'Austin' })
        ).toBeInTheDocument();
        await expect(body.getAllByRole('option')).toHaveLength(4);
        await expect(
            body.queryByRole('option', { name: 'San Antonio' })
        ).not.toBeInTheDocument();
    }
};
