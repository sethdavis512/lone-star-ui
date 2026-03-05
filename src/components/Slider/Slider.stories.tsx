import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    SliderRoot,
    SliderControl,
    SliderTrack,
    SliderIndicator,
    SliderThumb,
    SliderValue
} from './Slider';

const meta: Meta = {
    title: 'Sparks/Slider',
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <div className="w-72 space-y-2">
            <SliderRoot defaultValue={40}>
                <SliderControl>
                    <SliderTrack>
                        <SliderIndicator />
                        <SliderThumb />
                    </SliderTrack>
                </SliderControl>
                <SliderValue />
            </SliderRoot>
        </div>
    )
};

export const Range: Story = {
    render: () => (
        <div className="w-72 space-y-2">
            <SliderRoot defaultValue={[20, 70]}>
                <SliderControl>
                    <SliderTrack>
                        <SliderIndicator />
                        <SliderThumb />
                        <SliderThumb />
                    </SliderTrack>
                </SliderControl>
                <SliderValue />
            </SliderRoot>
        </div>
    )
};

export const Disabled: Story = {
    render: () => (
        <div className="w-72">
            <SliderRoot defaultValue={60} disabled>
                <SliderControl>
                    <SliderTrack>
                        <SliderIndicator />
                        <SliderThumb />
                    </SliderTrack>
                </SliderControl>
            </SliderRoot>
        </div>
    )
};
