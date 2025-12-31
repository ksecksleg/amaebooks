// Simple HTTPS server for testing PWA locally
// Run: node server.js

const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HTTPS_PORT = 3443;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// HTTP Server
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
    console.log(`\n🚀 AMA eBooks Server Started!`);
    console.log(`\n📱 HTTP: http://localhost:${PORT}`);
    console.log(`\n💡 For PWA features, use HTTPS or localhost\n`);
});

// HTTPS Server (if certificates exist)
try {
    // Self-signed certificate for local testing
    // Generate with: openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout key.pem -out cert.pem
    
    if (fs.existsSync('key.pem') && fs.existsSync('cert.pem')) {
        const httpsOptions = {
            key: fs.readFileSync('key.pem'),
            cert: fs.readFileSync('cert.pem')
        };

        const httpsServer = https.createServer(httpsOptions, app);
        httpsServer.listen(HTTPS_PORT, () => {
            console.log(`🔒 HTTPS: https://localhost:${HTTPS_PORT}`);
            console.log(`\n✅ PWA features fully enabled!\n`);
        });
    } else {
        console.log(`\n⚠️  HTTPS not configured. PWA features limited.`);
        console.log(`   To enable HTTPS, run:`);
        console.log(`   openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout key.pem -out cert.pem\n`);
    }
} catch (error) {
    console.log(`\n⚠️  HTTPS setup failed: ${error.message}\n`);
}
