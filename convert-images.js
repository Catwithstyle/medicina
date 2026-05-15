
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, 'src/assets/images');

async function convertImages(directory) {
    try {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                await convertImages(filePath);
            } else {
                const ext = path.extname(file).toLowerCase();
                if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                    const newFilePath = filePath.replace(ext, '.webp');

                    // Skip if webp already exists
                    if (fs.existsSync(newFilePath)) {
                        console.log(`Skipping: ${newFilePath} (already exists)`);
                        continue;
                    }

                    console.log(`Converting: ${filePath} -> ${newFilePath}`);

                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(newFilePath);
                }
            }
        }
    } catch (err) {
        console.error('Error converting images:', err);
    }
}

console.log('Starting image conversion...');
convertImages(rootDir).then(() => {
    console.log('Conversion complete!');
});
