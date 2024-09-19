const chromium = require('chromium'); 
const fs = require('fs'); 
const path = require('path'); 

const binaryPath = chromium.path; 
const destination = path.join(__dirname, './chromium-binary');

// Copy the binary to your desired path
fs.copyFileSync(binaryPath, destination); 
console.log('Chromium copied to:', destination);
