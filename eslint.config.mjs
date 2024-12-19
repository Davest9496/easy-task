import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends('plugin:@angular-eslint/recommended'),
  ...compat.extends('plugin:@angular-eslint/template/process-inline-templates'),
  {
    files: ['**/*.ts'],
    rules: {
      // your TypeScript specific rules
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      // your template specific rules
    },
  },
];
