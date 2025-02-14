#!/usr/bin/env node
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}

const toKebabCase = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// Преобразование в CamelCase
const toCamelCase = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const packageName = toKebabCase(componentName);

const componentCamelCase = toCamelCase(componentName);

const packagePath = path.join(__dirname, 'packages', componentCamelCase);

// Базовая структура файлов
const files = {
    'package.json': `{
  "name": "@surf-dev/ui-${packageName}",
  "version": "0.1.0",
  "description": "Surf base ${componentCamelCase}",
  "publishConfig": {
    "access": "public"
  },
  "main": "index.js",
  "dependencies": {
    "react": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "lint-staged": "15.0.2"
  },
  "files": [
    "src",
    "dist/esm",
    "dist/cjs",
    "./CHANGELOG.md"
  ],
  "types": "./dist/esm/index.d.ts",
  "exports": {
    "import": "./dist/esm/index.js",
    "require": "./dist/cjs/index.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/surfstudio/frontend-ui-kit.git",
    "directory": "packages/${componentCamelCase}"
  },
  "author": "SurfStudio LLC",
  "license": "MIT",
  "homepage": "https://github.com/surfstudio/frontend-ui-kit#readme",
  "gitHead": "c103b5ec777f94ecce2c83c1f58fb3e35cf4bbd3"
}
`,

    'src/index.tsx': `import React from 'react';

interface ${componentName}Props {
    children?: React.ReactNode;
}

export const ${componentName} = ({ children }: ${componentName}Props) => {
    return <div>{children}</div>;
};`,

    [`src/${componentName}.stories.tsx`]: `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '.';

const meta: Meta<typeof ${componentName}> = {
    title: '${componentName}',
    component: ${componentName},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
    args: {
        children: 'Hello World',
    },
};`,

    'README.md': `# frontend-ui-kit ${packageName}'
    `,

    'tsconfig.cjs.json': `{
  "extends": "../tsconfig.cjs.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/cjs"
  },
  "include": ["./src"],
  "exclude": ["./dist"]
}`,
    'tsconfig.esm.json': `{
  "extends": "../tsconfig.esm.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/esm"
  },
  "include": ["./src"],
  "exclude": ["./dist"]
}`,
};

// Создание директорий и файлов
function createDirectoryContents(packagePath, files) {
    fs.mkdirSync(packagePath, { recursive: true });
    fs.mkdirSync(path.join(packagePath, 'src'), { recursive: true });

    Object.entries(files).forEach(([filename, content]) => {
        const filePath = path.join(packagePath, filename);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, content);
    });
}

try {
    createDirectoryContents(packagePath, files);
    console.log(`✨ Component ${componentCamelCase} created successfully in packages/${packageName}!`);
} catch (error) {
    console.error('Error creating component:', error);
}
