import type { Meta, StoryObj } from '@storybook/react';
import { AvatarLabel } from './AvatarLabel';

const meta: Meta<typeof AvatarLabel> = {
    title: 'Kindling/AvatarLabel',
    component: AvatarLabel,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        initials: 'JR',
        name: 'Jesse Rodriguez',
        subtitle: 'Software Engineer'
    }
};

export default meta;
type Story = StoryObj<typeof AvatarLabel>;

export const Default: Story = {};

export const Small: Story = {
    args: { size: 'sm', subtitle: 'Austin, TX' }
};

export const Large: Story = {
    args: { size: 'lg', subtitle: 'Principal Engineer · Austin, TX' }
};

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=12',
        alt: 'Jesse Rodriguez',
        subtitle: 'Staff Engineer'
    }
};

export const AllColors: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            {(
                [
                    'sky',
                    'longhorn',
                    'pecan',
                    'bluebonnet',
                    'prickly-pear',
                    'mesa'
                ] as const
            ).map((color) => (
                <AvatarLabel
                    key={color}
                    avatarColor={color}
                    initials="TX"
                    name={`Color: ${color}`}
                    subtitle="Lone Star UI"
                />
            ))}
        </div>
    )
};
