import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import {
    PreviewCardRoot,
    PreviewCardPortal,
    PreviewCardTrigger,
    PreviewCardPositioner,
    PreviewCardPopup,
    PreviewCardArrow
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
        // PreviewCard has a delay before showing — wait for it
        await new Promise((r) => setTimeout(r, 700));
        const tooltip = within(document.body).getByRole('tooltip');
        expect(tooltip).toBeVisible();
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
