import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import {
    NavigationMenuRoot,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuIcon,
    NavigationMenuPortal,
    NavigationMenuBackdrop,
    NavigationMenuPositioner,
    NavigationMenuViewport,
    NavigationMenuPopup,
    NavigationMenuArrow,
    NavigationMenuContent,
    NavigationMenuLink
} from './NavigationMenu';

const meta: Meta = {
    title: 'Sparks/NavigationMenu',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <NavigationMenuRoot>
            <NavigationMenuList>
                <NavigationMenuItem value="products">
                    <NavigationMenuTrigger>
                        Products
                        <NavigationMenuIcon />
                    </NavigationMenuTrigger>
                    <NavigationMenuPortal>
                        <NavigationMenuPositioner>
                            <NavigationMenuViewport>
                                <NavigationMenuPopup>
                                    <NavigationMenuContent>
                                        <ul className="grid w-64 gap-1">
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    <div className="font-semibold">
                                                        Analytics
                                                    </div>
                                                    <p className="mt-0.5 text-xs text-pecan/60">
                                                        Track performance
                                                        metrics.
                                                    </p>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    <div className="font-semibold">
                                                        Automation
                                                    </div>
                                                    <p className="mt-0.5 text-xs text-pecan/60">
                                                        Streamline your
                                                        workflows.
                                                    </p>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    <div className="font-semibold">
                                                        Integrations
                                                    </div>
                                                    <p className="mt-0.5 text-xs text-pecan/60">
                                                        Connect your favorite
                                                        tools.
                                                    </p>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuPopup>
                            </NavigationMenuViewport>
                        </NavigationMenuPositioner>
                    </NavigationMenuPortal>
                </NavigationMenuItem>

                <NavigationMenuItem value="company">
                    <NavigationMenuTrigger>
                        Company
                        <NavigationMenuIcon />
                    </NavigationMenuTrigger>
                    <NavigationMenuPortal>
                        <NavigationMenuPositioner>
                            <NavigationMenuViewport>
                                <NavigationMenuPopup>
                                    <NavigationMenuContent>
                                        <ul className="grid w-48 gap-1">
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    About
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    Blog
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    Careers
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuPopup>
                            </NavigationMenuViewport>
                        </NavigationMenuPositioner>
                    </NavigationMenuPortal>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#"
                        className="px-3 py-2 text-sm font-medium"
                    >
                        Docs
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenuRoot>
    )
};

export const WithArrowAndBackdrop: Story = {
    render: () => (
        <NavigationMenuRoot>
            <NavigationMenuList>
                <NavigationMenuItem value="products">
                    <NavigationMenuTrigger>
                        Products
                        <NavigationMenuIcon />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-64 gap-1">
                            <li>
                                <NavigationMenuLink href="#">
                                    <div className="font-semibold">
                                        Analytics
                                    </div>
                                    <p className="mt-0.5 text-xs text-pecan/60">
                                        Track performance metrics.
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#">
                                    <div className="font-semibold">
                                        Automation
                                    </div>
                                    <p className="mt-0.5 text-xs text-pecan/60">
                                        Streamline your workflows.
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="company">
                    <NavigationMenuTrigger>
                        Company
                        <NavigationMenuIcon />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-48 gap-1">
                            <li>
                                <NavigationMenuLink href="#">
                                    About
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#">
                                    Careers
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuPortal>
                <NavigationMenuBackdrop
                    data-testid="nav-backdrop"
                    className="bg-pecan/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:bg-pecan/5"
                />
                <NavigationMenuPositioner sideOffset={10}>
                    <NavigationMenuPopup className="relative p-0">
                        <NavigationMenuArrow data-testid="nav-arrow">
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
                        </NavigationMenuArrow>
                        <NavigationMenuViewport className="mt-0" />
                    </NavigationMenuPopup>
                </NavigationMenuPositioner>
            </NavigationMenuPortal>
        </NavigationMenuRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Products' }));

        const body = within(document.body);
        await body.findByRole('link', { name: /Analytics/ }, { timeout: 3000 });
        const arrow = await body.findByTestId('nav-arrow');
        await expect(arrow).toHaveAttribute('data-side', 'bottom');
        await expect(await body.findByTestId('nav-backdrop')).toHaveAttribute(
            'data-open'
        );
    }
};
