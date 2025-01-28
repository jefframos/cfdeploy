const fs = require('fs');
const path = require('path');

// Define the root folder and output directory
const ROOT_FOLDER = __dirname;
const OUTPUT_FOLDER = ROOT_FOLDER//path.join(ROOT_FOLDER, 'package');
const INDEX_FILE = path.join(OUTPUT_FOLDER, 'index.html');

// Function to check if a path is a directory
function isDirectory(source) {
    return fs.lstatSync(source).isDirectory();
}

function containsGitFolder(folderPath) {
    return fs.existsSync(path.join(folderPath, '.git'));
}

// Function to get all folders in the root directory
function getRootFolders() {
    return fs.readdirSync(ROOT_FOLDER)
        .filter(item => {
            const folderPath = path.join(ROOT_FOLDER, item);
            return isDirectory(folderPath) && !containsGitFolder(folderPath) && item !== 'package';
        });
}

// Function to create the HTML content
function generateHTML(folderNames) {
    const links = folderNames.map(folder => `<li><a href="${folder}?platform=direct">${folder}</a></li>`).join('\n');
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 5px 0; }
        a { text-decoration: none; color: blue; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Folder Index</h1>
    <ul>
        ${links}
    </ul>
</body>
</html>
    `;
}

// Main function
function createIndexFile() {
    // Get root-level folders
    const folders = getRootFolders();

    // Generate HTML content
    const htmlContent = generateHTML(folders);

    // Ensure the output folder exists
    if (!fs.existsSync(OUTPUT_FOLDER)) {
        fs.mkdirSync(OUTPUT_FOLDER);
    }

    // Write the HTML content to the index.html file
    fs.writeFileSync(INDEX_FILE, htmlContent, 'utf8');
    console.log(`Index file created at: ${INDEX_FILE}`);
}

// Execute the script
createIndexFile();
