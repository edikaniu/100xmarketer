const fs = require('fs');
const path = require('path');

// Manually parse .env to see what's actually there
try {
    const envPath = path.join(__dirname, '.env');
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log('--- RAW CONTENT START ---');
    console.log(envContent);
    console.log('--- RAW CONTENT END ---');

    // Simple parse
    const lines = envContent.split('\n');
    lines.forEach(line => {
        const [key, ...val] = line.split('=');
        if (key) console.log(`Key found: [${key.trim()}]`);
    });

} catch (e) {
    console.error('Error reading .env:', e);
}
