import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import {
    TooltipProvider,
    TooltipRoot,
    TooltipPortal,
    TooltipTrigger,
    TooltipPositioner,
    TooltipPopup,
    TooltipArrow
} from './Tooltip';

const meta = {
    title: 'Components/Tooltip',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

function TooltipDemo({ label = 'Save', content = 'Save your changes' }) {
    return (
        <TooltipProvider>
            <TooltipRoot>
                <TooltipTrigger className="inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
                    {label}
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipPositioner>
                        <TooltipPopup>
                            {content}
                        </TooltipPopup>
                    </TooltipPositioner>
                </TooltipPortal>
            </TooltipRoot>
        </TooltipProvider>
    );
}

export const Default: StoryObj = {
    render: () => <TooltipDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('button', { name: 'Save' });
        await userEvent.hover(trigger);
        const tooltip = within(document.body).getByRole('tooltip');
        expect(tooltip).toBeVisible();
        expect(tooltip).toHaveTextContent('Save your changes');
    }
};

export const WithArrow: StoryObj = {
    render: () => (
        <TooltipProvider>
            <TooltipRoot>
                <TooltipTrigger className="inline-flex h-9 items-center justify-center rounded-md border border-pecan/25 bg-white px-4 text-sm font-medium text-pecan transition-colors hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
                    Hover me
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipPositioner side="bottom">
                        <TooltipPopup>
                            <TooltipArrow>
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                                    <path
                                        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                                        className="fill-pecan"
                                    />
                                </svg>
                            </TooltipArrow>
                            Tooltip below
                        </TooltipPopup>
                    </TooltipPositioner>
                </TooltipPortal>
            </TooltipRoot>
        </TooltipProvider>
    )
};

export const MultipleTooltips: StoryObj = {
    render: () => (
        <TooltipProvider>
            <div className="flex gap-3">
                {(['Bold', 'Italic', 'Underline'] as const).map((label) => (
                    <TooltipRoot key={label}>
                        <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded border border-pecan/25 bg-white text-xs font-bold text-pecan transition-colors hover:bg-mesa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
                            {label[0]}
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner>
                                <TooltipPopup>{label}</TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </TooltipRoot>
                ))}
            </div>
        </TooltipProvider>
    )
};
