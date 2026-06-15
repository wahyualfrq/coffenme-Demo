const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove single line JSX comments: {/* Comment */}
    let newContent = content.replace(/^[ \t]*\{\/\*.*?\*\/\}[ \t]*\r?\n/gm, '');
    
    // Remove inline JSX comments on the same line if they are the only thing
    // Actually, just remove the JSX comment blocks entirely
    newContent = newContent.replace(/\{\/\*.*?\*\/\}/g, '');
    
    // Remove single line JS comments: // Comment
    // Careful with URLs like https://
    newContent = newContent.replace(/^[ \t]*\/\/.*?\r?\n/gm, '');

    // Cleanup multiple blank lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Cleaned:', filePath);
    }
  }
});
