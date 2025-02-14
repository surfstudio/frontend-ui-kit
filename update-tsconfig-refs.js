#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-nodejs-modules */
const fs = require('fs');
const path = require('path');

const updateTsConfig = (configName) => {
    const packagesDir = path.join(__dirname, 'packages');
    const tsconfigPath = path.join(packagesDir, configName);

    // Читаем файл как строку
    const rawConfig = fs.readFileSync(tsconfigPath, 'utf8');

    const jsonContent = rawConfig.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').replace(/,(\s*[}\]])/g, '$1');

    const tsconfig = JSON.parse(jsonContent);

    const packages = fs.readdirSync(packagesDir).filter((file) => {
        const stats = fs.statSync(path.join(packagesDir, file));
        return stats.isDirectory() && !file.startsWith('.');
    });

    tsconfig.references = packages.map((pkg) => ({
        path: `./${pkg}/tsconfig.esm.json`,
    }));

    const updatedContent = JSON.stringify(tsconfig, null, 2).replace(/}$/g, '}\n');

    fs.writeFileSync(tsconfigPath, updatedContent);
    console.log(`✨ Updated references in ${configName}`);
};

updateTsConfig('tsconfig.cjs.json');
updateTsConfig('tsconfig.esm.json');
