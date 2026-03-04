import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { Button } from '../Button';
import { Badge } from '../Badge';

const meta: Meta<typeof PageHeader> = {
    title: 'Bonfire/PageHeader',
    component: PageHeader,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    args: {
        title: 'Contacts'
    }
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};

export const WithSubtitle: Story = {
    args: {
        title: 'Contacts',
        subtitle:
            'Manage your people and connections across the Lone Star State.'
    }
};

export const WithActions: Story = {
    args: {
        title: 'Contacts',
        subtitle: '142 contacts',
        actions: (
            <>
                <Button variant="outline" size="sm">
                    Export
                </Button>
                <Button size="sm">New Contact</Button>
            </>
        )
    }
};

export const WithEyebrow: Story = {
    args: {
        eyebrow: 'Dashboard',
        title: 'Contacts',
        subtitle: 'Manage your people and connections.',
        actions: <Button size="sm">New Contact</Button>
    }
};

export const WithBadge: Story = {
    args: {
        title: 'Contacts',
        subtitle: 'Manage your people.',
        eyebrow: 'CRM',
        actions: (
            <>
                <Badge variant="longhorn">142 total</Badge>
                <Button variant="outline" size="sm">
                    Filter
                </Button>
                <Button size="sm">New Contact</Button>
            </>
        )
    }
};
