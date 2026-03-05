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
        <div className="w-72 space-y-1">
            <div className="flex items-center justify-between">
                <ProgressLabel>Loading…</ProgressLabel>
                <ProgressValue />
            </div>
            <ProgressRoot value={60}>
                <ProgressTrack>
                    <ProgressIndicator />
                </ProgressTrack>
            </ProgressRoot>
        </div>
    )
};

export const Complete: Story = {
    render: () => (
        <div className="w-72 space-y-1">
            <ProgressLabel>Done</ProgressLabel>
            <ProgressRoot value={100}>
                <ProgressTrack>
                    <ProgressIndicator />
                </ProgressTrack>
            </ProgressRoot>
        </div>
    )
};

export const Indeterminate: Story = {
    render: () => (
        <div className="w-72 space-y-1">
            <ProgressLabel>Processing…</ProgressLabel>
            <ProgressRoot value={null}>
                <ProgressTrack>
                    <ProgressIndicator />
                </ProgressTrack>
            </ProgressRoot>
        </div>
    )
};
