import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, waitFor } from 'storybook/test';
import {
    PreviewCardRoot,
    PreviewCardPortal,
    PreviewCardTrigger,
    PreviewCardPositioner,
    PreviewCardPopup,
    PreviewCardViewport,
    PreviewCardArrow,
    createPreviewCardHandle
} from './PreviewCard';

const meta = {
    title: 'Sparks/PreviewCard',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

function PreviewCardDemo() {
    return (
        <p className="m-0 text-base leading-6 text-pecan">
            The principles of good{' '}
            <PreviewCardRoot>
                <PreviewCardTrigger href="https://en.wikipedia.org/wiki/Typography">
                    typography
                </PreviewCardTrigger>
                <PreviewCardPortal>
                    <PreviewCardPositioner>
                        <PreviewCardPopup>
                            <div className="flex w-56 flex-col gap-2 p-3">
                                <p className="m-0 text-sm leading-5 text-pecan">
                                    <strong>Typography</strong> is the art and
                                    science of arranging type to make written
                                    language legible, readable, and appealing.
                                </p>
                            </div>
                        </PreviewCardPopup>
                    </PreviewCardPositioner>
                </PreviewCardPortal>
            </PreviewCardRoot>{' '}
            remain in the digital age.
        </p>
    );
}

export const Default: StoryObj = {
    render: () => <PreviewCardDemo />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByRole('link', { name: 'typography' });
        await userEvent.hover(trigger);
        // PreviewCard has an open delay and enter animation — wait for the
        // popup content to appear and finish animating in.
        const popup = await within(document.body).findByText(
            /arranging type to make written language/i,
            undefined,
            { timeout: 2000 }
        );
        await waitFor(() => expect(popup).toBeVisible());
    }
};

export const WithArrow: StoryObj = {
    render: () => (
        <p className="m-0 text-base leading-6 text-pecan">
            Learn about{' '}
            <PreviewCardRoot>
                <PreviewCardTrigger href="https://en.wikipedia.org/wiki/Design">
                    design
                </PreviewCardTrigger>
                <PreviewCardPortal>
                    <PreviewCardPositioner side="bottom">
                        <PreviewCardPopup>
                            <PreviewCardArrow>
                                <svg
                                    width="20"
                                    height="10"
                                    viewBox="0 0 20 10"
                                    fill="none"
                                >
                                    <path
                                        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                                        className="fill-white"
                                    />
                                    <path
                                        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                                        className="fill-pecan/15"
                                    />
                                </svg>
                            </PreviewCardArrow>
                            <div className="flex w-56 flex-col gap-2 p-3">
                                <p className="m-0 text-sm leading-5 text-pecan">
                                    <strong>Design</strong> is the concept or
                                    proposal for an object, process, or system.
                                </p>
                            </div>
                        </PreviewCardPopup>
                    </PreviewCardPositioner>
                </PreviewCardPortal>
            </PreviewCardRoot>{' '}
            and its principles.
        </p>
    )
};

const detachedCards = {
    typography: {
        href: 'https://en.wikipedia.org/wiki/Typography',
        summary:
            'Typography is the art and science of arranging type to make written language legible.'
    },
    color: {
        href: 'https://en.wikipedia.org/wiki/Color_theory',
        summary:
            'Color theory is a body of practical guidance for mixing colors and the visual effects of combinations.'
    }
} as const;

const detachedPreviewCard =
    createPreviewCardHandle<keyof typeof detachedCards>();

export const DetachedTriggers: StoryObj = {
    render: () => (
        <>
            <p className="m-0 text-base leading-6 text-pecan">
                Good design leans on{' '}
                <PreviewCardTrigger
                    handle={detachedPreviewCard}
                    payload="typography"
                    href={detachedCards.typography.href}
                >
                    typography
                </PreviewCardTrigger>{' '}
                and{' '}
                <PreviewCardTrigger
                    handle={detachedPreviewCard}
                    payload="color"
                    href={detachedCards.color.href}
                >
                    color
                </PreviewCardTrigger>
                .
            </p>
            <PreviewCardRoot handle={detachedPreviewCard}>
                {({ payload }) => (
                    <PreviewCardPortal>
                        <PreviewCardPositioner className="h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none">
                            <PreviewCardPopup className="relative h-[var(--popup-height,auto)] w-[var(--popup-width,auto)] transition-[width,height,opacity,scale] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                                <PreviewCardViewport>
                                    {payload && (
                                        <div className="w-56 p-3">
                                            <p className="m-0 text-sm leading-5 text-pecan">
                                                {detachedCards[payload].summary}
                                            </p>
                                        </div>
                                    )}
                                </PreviewCardViewport>
                            </PreviewCardPopup>
                        </PreviewCardPositioner>
                    </PreviewCardPortal>
                )}
            </PreviewCardRoot>
        </>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const body = within(document.body);

        await userEvent.hover(canvas.getByRole('link', { name: 'color' }));
        const colorCard = await body.findByText(
            /body of practical guidance for mixing colors/i,
            undefined,
            { timeout: 2000 }
        );
        await waitFor(() => expect(colorCard).toBeVisible());

        await userEvent.unhover(canvas.getByRole('link', { name: 'color' }));
        await userEvent.hover(canvas.getByRole('link', { name: 'typography' }));
        const typographyCard = await body.findByText(
            /arranging type to make written language legible/i,
            undefined,
            { timeout: 2000 }
        );
        await waitFor(() => expect(typographyCard).toBeVisible());
    }
};
