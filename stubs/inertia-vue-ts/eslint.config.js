import vuePlugin from 'eslint-plugin-vue';
import vueTsPlugin from '@vue/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    vuePlugin.configs['vue3-essential'],
    vueTsPlugin.configs['typescript/recommended'],
    {
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'no-undef': 'off',
        },
    },
    eslintConfigPrettier,
];
