import vuePlugin from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    vuePlugin.configs['vue3-essential'],
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'no-undef': 'off',
        },
    },
    eslintConfigPrettier,
];
