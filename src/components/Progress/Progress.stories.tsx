import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    ProgressRoot,
    ProgressLabel,
    ProgressTrack,
    ProgressIndicator,
    ProgressValue
} from './Progress';

const meta: Meta = {
    title: 'Sparks/Progress',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <ProgressRoot value={60} className="w-72">
            <div className="flex items-center justify-between">
                <ProgressLabel>Loading…</ProgressLabel>
                <ProgressValue />
            </div>
            <ProgressTrack>
                <ProgressIndicator />
            </ProgressTrack>
        </ProgressRoot>
    )
};

export const Complete: Story = {
    render: () => (
        <ProgressRoot value={100} className="w-72">
            <ProgressLabel>Done</ProgressLabel>
            <ProgressTrack>
                <ProgressIndicator />
            </ProgressTrack>
        </ProgressRoot>
    )
};

export const Indeterminate: Story = {
    render: () => (
        <ProgressRoot value={null} className="w-72">
            <ProgressLabel>Processing…</ProgressLabel>
            <ProgressTrack>
                <ProgressIndicator />
            </ProgressTrack>
        </ProgressRoot>
    )
};
