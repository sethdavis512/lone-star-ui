import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SearchField } from './SearchField';
import { expect, fn, userEvent, within } from 'storybook/test';

const meta: Meta<typeof SearchField> = {
    title: 'Kindling/SearchField',
    component: SearchField,
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
    args: {
        placeholder: 'Search contacts…',
        buttonLabel: 'Search'
    }
};

export const Disabled: Story = {
    args: {
        placeholder: 'Search contacts…',
        disabled: true
    }
};

export const WithCallback: Story = {
    args: {
        placeholder: 'Search for anything…',
        onSearch: fn()
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await userEvent.type(input, 'Austin');
        await userEvent.click(canvas.getByRole('button'));
        await expect(args.onSearch).toHaveBeenCalledWith('Austin');
    }
};

function ControlledDemo() {
    const [value, setValue] = React.useState('');
    const [results, setResults] = React.useState<string | null>(null);
    return (
        <div className="flex flex-col gap-4 w-80">
            <SearchField
                value={value}
                onValueChange={setValue}
                onSearch={(v) => setResults(`Searching for: "${v}"`)}
                placeholder="Type to search…"
            />
            {results && <p className="text-sm text-pecan/70">{results}</p>}
        </div>
    );
}

export const Controlled: Story = {
    render: () => <ControlledDemo />
};
