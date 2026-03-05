import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb
} from './ScrollArea';

const meta: Meta = {
    title: 'Sparks/ScrollArea',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

export const Vertical: Story = {
    render: () => (
        <ScrollAreaRoot className="h-64 w-56 rounded-lg border border-pecan/15">
            <ScrollAreaViewport>
                <ScrollAreaContent>
                    <div className="p-3 space-y-1">
                        {items.map((item) => (
                            <div
                                key={item}
                                className="rounded-md px-3 py-1.5 text-sm text-pecan hover:bg-mesa/40"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </ScrollAreaContent>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar>
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>
        </ScrollAreaRoot>
    )
};

export const Horizontal: Story = {
    render: () => (
        <ScrollAreaRoot className="w-72 rounded-lg border border-pecan/15">
            <ScrollAreaViewport>
                <ScrollAreaContent>
                    <div className="flex p-3 gap-3">
                        {items.slice(0, 15).map((item) => (
                            <div
                                key={item}
                                className="shrink-0 rounded-md border border-pecan/15 px-4 py-3 text-sm text-pecan"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </ScrollAreaContent>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="horizontal">
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>
        </ScrollAreaRoot>
    )
};
