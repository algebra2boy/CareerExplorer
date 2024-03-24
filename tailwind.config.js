import plugin from 'preline/plugin';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/preline/preline.js'],

    theme: {
        extend: {}
    },

    plugins: [plugin]
};
