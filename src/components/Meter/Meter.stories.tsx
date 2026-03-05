import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    MeterRoot,
    MeterLabel,
    MeterTrack,
    MeterIndicator,
    MeterValue
} from './Meter';

const meta: Meta = {
    title: 'Sparks/Meter',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <MeterRoot value={65} min={0} max={100} className="gap-1">
                <div className="flex items-center justify-between">
                    <MeterLabel>Storage used</MeterLabel>
                    <MeterValue />
                </div>
                <MeterTrack>
                    <MeterIndicator />
                </MeterTrack>
            </MeterRoot>
        </div>
    )
};

export const Low: Story = {
    render: () => (
        <div className="w-72">
            <MeterRoot value={15} min={0} max={100} className="gap-1">
                <MeterLabel>Battery</MeterLabel>
                <MeterTrack>
                    <MeterIndicator className="bg-prickly-pear" />
                </MeterTrack>
            </MeterRoot>
        </div>
    )
};

export const Full: Story = {
    render: () => (
        <div className="w-72">
            <MeterRoot value={100} min={0} max={100} className="gap-1">
                <MeterLabel>Capacity</MeterLabel>
                <MeterTrack>
                    <MeterIndicator className="bg-longhorn" />
                </MeterTrack>
            </MeterRoot>
        </div>
    )
};
