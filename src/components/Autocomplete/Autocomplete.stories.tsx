import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import {
    AutocompleteRoot,
    AutocompleteInputGroup,
    AutocompleteArrow,
    AutocompleteRow,
    AutocompleteGroup,
    AutocompleteGroupLabel,
    AutocompleteCollection,
    AutocompleteSeparator,
    AutocompleteStatus,
    useAutocompleteFilter,
    useAutocompleteFilteredItems,
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
                    <AutocompleteTrigger
                        aria-label="Open"
                        className="absolute right-0"
                    >
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
                                <AutocompleteEmpty>
                                    No frameworks found.
                                </AutocompleteEmpty>
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
    {
        group: 'Northeast',
        items: ['New York', 'Massachusetts', 'Vermont', 'Maine']
    }
];

const ALL_STATES = STATES.flatMap((g) => g.items);

export const Grouped: Story = {
    render: () => (
        <div className="w-72">
            <AutocompleteRoot items={ALL_STATES}>
                <div className="relative flex items-center">
                    <AutocompleteInput placeholder="Search states…" />
                    <AutocompleteTrigger
                        aria-label="Open"
                        className="absolute right-0"
                    >
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
                                <AutocompleteEmpty>
                                    No states found.
                                </AutocompleteEmpty>
                            </AutocompleteList>
                        </AutocompletePopup>
                    </AutocompletePositioner>
                </AutocompletePortal>
            </AutocompleteRoot>
        </div>
    )
};

const RESULT_LIMIT = 4;

export const WithStatus: Story = {
    render: function WithStatusStory() {
        const [value, setValue] = useState('');
        const { contains } = useAutocompleteFilter({ sensitivity: 'base' });

        const totalMatches = useMemo(() => {
            const query = value.trim();
            if (!query) {
                return FRAMEWORKS.length;
            }
            return FRAMEWORKS.filter((fw) => contains(fw, query)).length;
        }, [value, contains]);
        const hiddenCount = Math.max(0, totalMatches - RESULT_LIMIT);

        return (
            <div className="w-72">
                <AutocompleteRoot
                    items={FRAMEWORKS}
                    value={value}
                    onValueChange={setValue}
                    limit={RESULT_LIMIT}
                >
                    <label className="flex flex-col gap-1 text-sm font-medium text-pecan">
                        Framework
                        <AutocompleteInputGroup>
                            <AutocompleteInput placeholder="e.g. React" />
                        </AutocompleteInputGroup>
                    </label>
                    <AutocompletePortal>
                        <AutocompletePositioner>
                            <AutocompletePopup>
                                <AutocompleteEmpty>
                                    No frameworks found.
                                </AutocompleteEmpty>
                                <AutocompleteList>
                                    {(fw: string) => (
                                        <AutocompleteItem key={fw} value={fw}>
                                            {fw}
                                        </AutocompleteItem>
                                    )}
                                </AutocompleteList>
                                <AutocompleteStatus>
                                    {hiddenCount > 0
                                        ? `${hiddenCount} more hidden. Keep typing to narrow results.`
                                        : null}
                                </AutocompleteStatus>
                            </AutocompletePopup>
                        </AutocompletePositioner>
                    </AutocompletePortal>
                </AutocompleteRoot>
            </div>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        // "e" matches React, Vue, Svelte, Remix and Next.js (5); limit shows 4
        await userEvent.type(canvas.getByLabelText('Framework'), 'e');
        const body = within(document.body);
        await expect(
            await body.findByText(
                '1 more hidden. Keep typing to narrow results.'
            )
        ).toBeInTheDocument();
        await expect(body.getAllByRole('option')).toHaveLength(RESULT_LIMIT);
    }
};

const STATE_GROUPS = STATES.map((g) => ({ value: g.group, items: g.items }));

function GroupSeparator({ index }: { index: number }) {
    const groups = useAutocompleteFilteredItems<(typeof STATE_GROUPS)[number]>();
    return index < groups.length - 1 ? (
        <AutocompleteSeparator data-testid="group-separator" />
    ) : null;
}

export const GroupedWithSeparator: Story = {
    render: () => (
        <div className="w-72">
            <AutocompleteRoot items={STATE_GROUPS}>
                <label className="flex flex-col gap-1 text-sm font-medium text-pecan">
                    State
                    <AutocompleteInput placeholder="Search states…" />
                </label>
                <AutocompletePortal>
                    <AutocompletePositioner>
                        <AutocompletePopup>
                            <AutocompleteEmpty>No states found.</AutocompleteEmpty>
                            <AutocompleteList>
                                {(
                                    group: (typeof STATE_GROUPS)[number],
                                    index: number
                                ) => (
                                    <AutocompleteGroup
                                        key={group.value}
                                        items={group.items}
                                    >
                                        <AutocompleteGroupLabel>
                                            {group.value}
                                        </AutocompleteGroupLabel>
                                        <AutocompleteCollection>
                                            {(state: string) => (
                                                <AutocompleteItem
                                                    key={state}
                                                    value={state}
                                                >
                                                    {state}
                                                </AutocompleteItem>
                                            )}
                                        </AutocompleteCollection>
                                        <GroupSeparator index={index} />
                                    </AutocompleteGroup>
                                )}
                            </AutocompleteList>
                        </AutocompletePopup>
                    </AutocompletePositioner>
                </AutocompletePortal>
            </AutocompleteRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        // "as" matches Texas, Arkansas (South) and Massachusetts (Northeast)
        await userEvent.type(canvas.getByLabelText('State'), 'as');
        const body = within(document.body);
        await expect(await body.findByText('South')).toBeInTheDocument();
        await expect(body.getByText('Northeast')).toBeInTheDocument();
        await expect(body.queryByText('West')).not.toBeInTheDocument();
        // Base UI renders listbox separators with role="presentation"
        await expect(body.getAllByTestId('group-separator')).toHaveLength(1);
    }
};

interface Landmark {
    value: string;
    label: string;
}

const LANDMARKS: Landmark[] = [
    { value: 'alamo', label: 'The Alamo' },
    { value: 'big-bend', label: 'Big Bend' },
    { value: 'capitol', label: 'Texas Capitol' },
    { value: 'enchanted-rock', label: 'Enchanted Rock' },
    { value: 'galveston', label: 'Galveston Island' },
    { value: 'guadalupe', label: 'Guadalupe Peak' },
    { value: 'padre', label: 'Padre Island' },
    { value: 'palo-duro', label: 'Palo Duro Canyon' },
    { value: 'riverwalk', label: 'San Antonio River Walk' },
    { value: 'space-center', label: 'Space Center Houston' }
];

const LANDMARK_COLUMNS = 2;

function LandmarkRows() {
    const landmarks = useAutocompleteFilteredItems<Landmark>();
    const rows: Landmark[][] = [];
    for (let i = 0; i < landmarks.length; i += LANDMARK_COLUMNS) {
        rows.push(landmarks.slice(i, i + LANDMARK_COLUMNS));
    }
    return rows.map((row, rowIndex) => (
        <AutocompleteRow key={rowIndex} className="grid-cols-2">
            {row.map((landmark) => (
                <AutocompleteItem
                    key={landmark.value}
                    value={landmark}
                    className="grid-cols-1"
                >
                    {landmark.label}
                </AutocompleteItem>
            ))}
        </AutocompleteRow>
    ));
}

export const GridLayout: Story = {
    render: () => (
        <div className="w-96">
            <AutocompleteRoot
                items={LANDMARKS}
                grid
                itemToStringValue={(landmark: Landmark) => landmark.label}
            >
                <label className="flex flex-col gap-1 text-sm font-medium text-pecan">
                    Landmark
                    <AutocompleteInput placeholder="Search landmarks…" />
                </label>
                <AutocompletePortal>
                    <AutocompletePositioner sideOffset={10}>
                        <AutocompletePopup className="overflow-visible">
                            <AutocompleteArrow>
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
                            </AutocompleteArrow>
                            <AutocompleteEmpty>
                                No landmarks found.
                            </AutocompleteEmpty>
                            <AutocompleteList>
                                <LandmarkRows />
                            </AutocompleteList>
                        </AutocompletePopup>
                    </AutocompletePositioner>
                </AutocompletePortal>
            </AutocompleteRoot>
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText('Landmark');
        // "isl" matches Galveston Island and Padre Island
        await userEvent.type(input, 'isl');
        const body = within(document.body);
        await expect(await body.findByRole('grid')).toBeInTheDocument();
        await expect(body.getAllByRole('row')).toHaveLength(1);
        await expect(body.getAllByRole('gridcell')).toHaveLength(2);
        await userEvent.click(
            body.getByRole('gridcell', { name: 'Padre Island' })
        );
        await expect(input).toHaveValue('Padre Island');
    }
};
