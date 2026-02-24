const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the long URLs back to placeholders as the component now handles dynamic generation
const productRegex = /\{ productId: '([^']+)', includedApps: '([^']*)', onlineX64: '([^']*)', onlineX32: '([^']*)', offlineX32X64: '([^']*)' \}/g;

const updatedContent = content.replace(productRegex, (match, pid, apps, x64, x32, offline) => {
    let newX64 = x64 === 'NA' ? 'NA' : '#';
    let newX32 = x32 === 'NA' ? 'NA' : '#';
    let newOffline = offline === 'NA' ? 'NA' : '#';

    return `{ productId: '${pid}', includedApps: '${apps}', onlineX64: '${newX64}', onlineX32: '${newX32}', offlineX32X64: '${newOffline}' }`;
});

fs.writeFileSync(filePath, updatedContent);
console.log('Office links cleaned up successfully.');
