const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = path.join(__dirname, '../public/images');
const outputPath = path.join(__dirname, '../src/data/imageDimensions.ts');
const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

const result = {};

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!supportedExtensions.includes(ext)) continue;

      try {
        const metadata = await sharp(fullPath).metadata();
          const relativePath = path.relative(path.join(__dirname, '../'), fullPath);
const publicPath = '/' + relativePath.replace(/^public\//, '').replace(/\\/g, '/');

        if (metadata.width && metadata.height) {
          result[publicPath] = {
            width: metadata.width,
            height: metadata.height,
          };
        } else {
          console.warn(`⚠️  Missing dimensions: ${publicPath}`);
        }
      } catch (err) {
        console.warn(`⚠️  Skipped: ${fullPath} (${err.message})`);
      }
    }
  }
}

(async () => {
  await walk(imageDir);

    const content = `export default ${JSON.stringify(result, null, 2)} as const;`;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, content);
  console.log(`✅ Wrote ${Object.keys(result).length} entries to ${outputPath}`);
})();
