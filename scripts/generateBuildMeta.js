// scripts/generateBuildMeta.js
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commit = execSync('git rev-parse --short HEAD').toString().trim();
const date = new Date().toISOString();

const content = `export const buildMeta = {
  date: '${date}',
  commit: '${commit}'
};\n`;

const outPath = join(__dirname, '../src/buildMeta.ts');
writeFileSync(outPath, content);

console.log(`✅ buildMeta.ts generated at ${outPath}`);