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

    // Удаляем комментарии и trailing commas для корректного парсинга
    const jsonContent = rawConfig
        .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') // удаляем комментарии
        .replace(/,(\s*[}\]])/g, '$1'); // удаляем trailing commas

    const tsconfig = JSON.parse(jsonContent);

    // Получаем список директорий
    const packages = fs.readdirSync(packagesDir).filter((file) => {
        const stats = fs.statSync(path.join(packagesDir, file));
        return stats.isDirectory() && !file.startsWith('.');
    });

    // Обновляем references
    tsconfig.references = packages.map((pkg) => ({
        path: `./${pkg}/tsconfig.esm.json`,
    }));

    // Сохраняем с отступами и trailing comma
    const updatedContent = JSON.stringify(tsconfig, null, 2).replace(/}$/g, '}\n');

    fs.writeFileSync(tsconfigPath, updatedContent);
    console.log(`✨ Updated references in ${configName}`);
};

// Обновляем оба конфига
updateTsConfig('tsconfig.cjs.json');
updateTsConfig('tsconfig.esm.json');
