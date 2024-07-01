import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/.nuxt', '**/node_modules', '**/build', '**/dist', '**/public'],
  },
  ...compat.extends('eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      prettier,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
      ecmaVersion: 6,
      sourceType: 'module',
    },

    rules: {
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
