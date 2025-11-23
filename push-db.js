const { execSync } = require('child_process');
const path = require('path');
const dotenv = require('dotenv');

// Explicitly load .env
const result = dotenv.config({ path: path.join(__dirname, '.env') });

if (result.error) {
    console.error('Error loading .env:', result.error);
    process.exit(1);
}

const pooling = process.env.POSTGRES_PRISMA_URL;
const nonPooling = process.env.POSTGRES_URL_NON_POOLING;

if (!pooling || !nonPooling) {
    console.error('Missing env vars');
    process.exit(1);
}

console.log('Pushing DB with inline env vars...');

// Construct command with inline env vars for Windows
// Note: This might expose secrets in process list if inspected, but it's local and temporary.
const command = `set "POSTGRES_PRISMA_URL=${pooling}" && set "POSTGRES_URL_NON_POOLING=${nonPooling}" && npx prisma db push`;

try {
    execSync(command, {
        stdio: 'inherit',
        shell: true // Required for 'set'
    });
    console.log('Push success!');

    const seedCommand = `set "POSTGRES_PRISMA_URL=${pooling}" && set "POSTGRES_URL_NON_POOLING=${nonPooling}" && npx prisma db seed`;
    console.log('Seeding DB...');
    execSync(seedCommand, {
        stdio: 'inherit',
        shell: true
    });
    console.log('Seed success!');

} catch (e) {
    console.error('Command failed');
    process.exit(1);
}
