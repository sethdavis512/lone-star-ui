import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import {
    AccordionRoot,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionPanel
} from './Accordion';

const meta = {
    title: 'Sparks/Accordion',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <AccordionRoot className="w-96">
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>What is lone-star-ui?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        lone-star-ui is a Texas-themed React component library
                        built with Base UI, Tailwind CSS, and CVA.
                    </div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>How do I get started?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        Install the package and import the components you need.
                        Check the docs for setup instructions.
                    </div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionHeader>
                    <AccordionTrigger>Is it free to use?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        Yes! lone-star-ui is free and open source under the MIT
                        license.
                    </div>
                </AccordionPanel>
            </AccordionItem>
        </AccordionRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const trigger = canvas.getByRole('button', {
            name: /what is lone-star-ui/i
        });
        await expect(trigger).toBeInTheDocument();
    }
};

export const DefaultOpen: Story = {
    render: () => (
        <AccordionRoot defaultValue={['item-1']} className="w-96">
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>What is lone-star-ui?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        lone-star-ui is a Texas-themed React component library.
                    </div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>How do I get started?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        Install and import the components you need.
                    </div>
                </AccordionPanel>
            </AccordionItem>
        </AccordionRoot>
    )
};

export const MultipleOpen: Story = {
    render: () => (
        <AccordionRoot multiple className="w-96">
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>Panel One</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">Content for panel one.</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>Panel Two</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">Content for panel two.</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionHeader>
                    <AccordionTrigger>Panel Three</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">Content for panel three.</div>
                </AccordionPanel>
            </AccordionItem>
        </AccordionRoot>
    )
};
