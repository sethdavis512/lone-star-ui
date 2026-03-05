import '../src/styles.css';
import './preview.css';
import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
    decorators: [
        withThemeByClassName({
            themes: {
                'High Noon': '',
                'Stars at Night': 'dark'
            },
            defaultTheme: 'High Noon'
        })
    ],
    parameters: {
        options: {
            storySort: {
                order: ['Sparks', 'Kindling', 'Bonfire', 'Camps', 'Plains'],
                method: 'alphabetical'
            }
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    }
};

export default preview;
