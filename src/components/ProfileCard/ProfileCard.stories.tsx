import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Button } from '../Button';

const meta: Meta<typeof ProfileCard> = {
    title: 'Bonfire/ProfileCard',
    component: ProfileCard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        initials: 'JR',
        name: 'Jesse Rodriguez',
        role: 'Senior Engineer'
    }
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};

export const WithBadge: Story = {
    args: {
        badge: 'Pro Member',
        badgeVariant: 'sky'
    }
};

export const WithBio: Story = {
    args: {
        badge: 'Austin, TX',
        badgeVariant: 'pecan',
        bio: 'Builds fast frontends and even faster BBQ. Deeply committed to good DX and great tacos.'
    }
};

export const WithActions: Story = {
    args: {
        bio: 'Ten years in the saddle, shipping software across the Lone Star State.',
        badge: 'Staff Engineer',
        badgeVariant: 'longhorn',
        actions: (
            <>
                <Button variant="outline" size="sm">
                    Message
                </Button>
                <Button size="sm">Follow</Button>
            </>
        )
    }
};

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=47',
        alt: 'Jesse Rodriguez',
        role: 'Frontend Architect',
        badge: 'Austin, TX',
        badgeVariant: 'sky',
        bio: 'Obsessed with design systems and the Texas Hill Country.',
        actions: (
            <>
                <Button variant="outline" size="sm">
                    Message
                </Button>
                <Button size="sm">Follow</Button>
            </>
        )
    }
};

export const Destructive: Story = {
    name: 'With Destructive Badge',
    args: {
        initials: 'AX',
        name: 'Alpha Xray',
        role: 'Security Researcher',
        badge: 'Suspended',
        badgeVariant: 'prickly-pear',
        bio: 'Account under review.'
    }
};
