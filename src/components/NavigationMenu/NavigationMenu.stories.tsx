import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    NavigationMenuRoot,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuIcon,
    NavigationMenuPortal,
    NavigationMenuPositioner,
    NavigationMenuViewport,
    NavigationMenuPopup,
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
                                                    <div className="font-semibold">Analytics</div>
                                                    <p className="mt-0.5 text-xs text-pecan/60">
                                                        Track performance metrics.
                                                    </p>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    <div className="font-semibold">Automation</div>
                                                    <p className="mt-0.5 text-xs text-pecan/60">
                                                        Streamline your workflows.
                                                    </p>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">
                                                    <div className="font-semibold">Integrations</div>
                                                    <p className="mt-0.5 text-xs text-pecan/60">
                                                        Connect your favorite tools.
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
                                                <NavigationMenuLink href="#">About</NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">Blog</NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="#">Careers</NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuPopup>
                            </NavigationMenuViewport>
                        </NavigationMenuPositioner>
                    </NavigationMenuPortal>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="#" className="px-3 py-2 text-sm font-medium">
                        Docs
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenuRoot>
    )
};
