import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import React from 'react';
import {
    SelectRoot,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectIcon,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectArrow,
    SelectList,
    SelectItem,
    SelectItemText,
    SelectItemIndicator,
    SelectGroupLabel,
    SelectGroup,
    SelectScrollUpArrow,
    SelectScrollDownArrow
} from './Select';

const meta = {
    title: 'Sparks/Select',
    component: SelectRoot,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' }
    }
} satisfies Meta<typeof SelectRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

const texasCities = [
    { label: 'Austin', value: 'austin' },
    { label: 'Houston', value: 'houston' },
    { label: 'Dallas', value: 'dallas' },
    { label: 'San Antonio', value: 'san-antonio' },
    { label: 'Fort Worth', value: 'fort-worth' },
    { label: 'El Paso', value: 'el-paso' }
];

function SelectDemo({
    items = texasCities,
    placeholder = 'Select a city...',
    disabled = false
}) {
    return (
        <SelectRoot items={items} disabled={disabled}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
                <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
                <SelectPositioner>
                    <SelectPopup>
                        <SelectScrollUpArrow />
                        <SelectList>
                            {items.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>
                                    <SelectItemIndicator />
                                    <SelectItemText>{label}</SelectItemText>
                                </SelectItem>
                            ))}
                        </SelectList>
                        <SelectScrollDownArrow />
                    </SelectPopup>
                </SelectPositioner>
            </SelectPortal>
        </SelectRoot>
    );
}

export const Default: Story = {
    render: () => <SelectDemo />,
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('combobox');
        await expect(trigger).toBeInTheDocument();
    }
};

export const WithDefaultValue: Story = {
    render: () => (
        <SelectRoot items={texasCities} defaultValue="austin">
            <SelectTrigger>
                <SelectValue />
                <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
                <SelectPositioner>
                    <SelectPopup>
                        <SelectList>
                            {texasCities.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>
                                    <SelectItemIndicator />
                                    <SelectItemText>{label}</SelectItemText>
                                </SelectItem>
                            ))}
                        </SelectList>
                    </SelectPopup>
                </SelectPositioner>
            </SelectPortal>
        </SelectRoot>
    )
};

export const Disabled: Story = {
    render: () => <SelectDemo disabled placeholder="Unavailable" />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('combobox');
        await expect(trigger).toBeDisabled();
    }
};

export const Grouped: Story = {
    render: () => {
        const bigTexasCities = [
            { label: 'Austin', value: 'austin', region: 'Central' },
            { label: 'San Antonio', value: 'san-antonio', region: 'Central' },
            { label: 'Houston', value: 'houston', region: 'Gulf Coast' },
            {
                label: 'Corpus Christi',
                value: 'corpus-christi',
                region: 'Gulf Coast'
            },
            { label: 'Dallas', value: 'dallas', region: 'North Texas' },
            { label: 'Fort Worth', value: 'fort-worth', region: 'North Texas' },
            { label: 'Lubbock', value: 'lubbock', region: 'West Texas' },
            { label: 'El Paso', value: 'el-paso', region: 'West Texas' }
        ];

        const regions = [...new Set(bigTexasCities.map((c) => c.region))];

        return (
            <SelectRoot>
                <SelectTrigger className="min-w-48">
                    <SelectValue placeholder="Select a city..." />
                    <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                    <SelectPositioner alignItemWithTrigger={false}>
                        <SelectPopup>
                            <SelectList>
                                {regions.map((region) => (
                                    <SelectGroup key={region}>
                                        <SelectGroupLabel>
                                            {region}
                                        </SelectGroupLabel>
                                        {bigTexasCities
                                            .filter((c) => c.region === region)
                                            .map(({ label, value }) => (
                                                <SelectItem
                                                    key={value}
                                                    value={value}
                                                >
                                                    <SelectItemIndicator />
                                                    <SelectItemText>
                                                        {label}
                                                    </SelectItemText>
                                                </SelectItem>
                                            ))}
                                    </SelectGroup>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </SelectRoot>
        );
    }
};

export const WithLabelAndArrow: Story = {
    render: () => (
        <SelectRoot items={texasCities}>
            <div className="flex flex-col gap-2">
                <SelectLabel>Home city</SelectLabel>
                <SelectTrigger>
                    <SelectValue placeholder="Select a city..." />
                    <SelectIcon />
                </SelectTrigger>
            </div>
            <SelectPortal>
                <SelectPositioner alignItemWithTrigger={false} sideOffset={10}>
                    <SelectPopup>
                        <SelectArrow data-testid="select-arrow">
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
                            </svg>
                        </SelectArrow>
                        <SelectList>
                            {texasCities.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>
                                    <SelectItemIndicator />
                                    <SelectItemText>{label}</SelectItemText>
                                </SelectItem>
                            ))}
                        </SelectList>
                    </SelectPopup>
                </SelectPositioner>
            </SelectPortal>
        </SelectRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('combobox', { name: 'Home city' });
        await expect(trigger).toBeInTheDocument();

        await userEvent.click(trigger);
        const body = within(document.body);
        await body.findByRole('listbox', undefined, { timeout: 3000 });
        const arrow = await body.findByTestId('select-arrow');
        await expect(arrow).toHaveAttribute('data-side', 'bottom');
    }
};
