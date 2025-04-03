import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import cypressPlugin from 'eslint-plugin-cypress';
import chaiFriendly from 'eslint-plugin-chai-friendly';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        Cypress: 'readonly',
        cy: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      cypress: cypressPlugin,
      'chai-friendly': chaiFriendly,
      prettier: prettierPlugin,
    },
    rules: {
      'cypress/unsafe-to-chain-command': 'off',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-pause': 'error',
      'no-unused-expressions': 'off',
      'chai-friendly/no-unused-expressions': 'error',
      'prettier/prettier': 'error',
    },
  },
];
