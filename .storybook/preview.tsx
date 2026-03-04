import '../src/styles.css';
import type { Preview } from '@storybook/react-vite';
import React from 'react';

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Toggle light/dark theme',
            toolbar: {
                title: 'Theme',
                icon: 'sun',
                items: [
                    { value: 'light', title: 'Light', icon: 'sun' },
                    { value: 'dark', title: 'Stars at Night', icon: 'moon' },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme ?? 'light';
            React.useEffect(() => {
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.body.style.backgroundColor = theme === 'dark' ? 'oklch(15% 0.015 78)' : '';
            }, [theme]);
            return <Story />;
        },
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
