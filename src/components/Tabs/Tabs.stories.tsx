import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import { TabsRoot, TabsList, TabsTab, TabsIndicator, TabsPanel } from './Tabs';

const meta = {
    title: 'Sparks/Tabs',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <TabsRoot
            defaultValue="overview"
            className="w-80 rounded-md border border-pecan/15"
        >
            <TabsList>
                <TabsTab value="overview">Overview</TabsTab>
                <TabsTab value="projects">Projects</TabsTab>
                <TabsTab value="settings">Settings</TabsTab>
                <TabsIndicator />
            </TabsList>
            <TabsPanel value="overview">
                <p>Overview content goes here.</p>
            </TabsPanel>
            <TabsPanel value="projects">
                <p>Projects content goes here.</p>
            </TabsPanel>
            <TabsPanel value="settings">
                <p>Settings content goes here.</p>
            </TabsPanel>
        </TabsRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const overviewTab = canvas.getByRole('tab', { name: 'Overview' });
        const projectsTab = canvas.getByRole('tab', { name: 'Projects' });

        await expect(overviewTab).toBeInTheDocument();
        await expect(projectsTab).toBeInTheDocument();

        await expect(overviewTab).toHaveAttribute('data-active');
    }
};

export const WithDisabledTab: Story = {
    render: () => (
        <TabsRoot
            defaultValue="overview"
            className="w-80 rounded-md border border-pecan/15"
        >
            <TabsList>
                <TabsTab value="overview">Overview</TabsTab>
                <TabsTab value="projects" disabled>
                    Projects
                </TabsTab>
                <TabsTab value="settings">Settings</TabsTab>
                <TabsIndicator />
            </TabsList>
            <TabsPanel value="overview">
                <p>Overview content goes here.</p>
            </TabsPanel>
            <TabsPanel value="projects">
                <p>Projects content goes here.</p>
            </TabsPanel>
            <TabsPanel value="settings">
                <p>Settings content goes here.</p>
            </TabsPanel>
        </TabsRoot>
    )
};
