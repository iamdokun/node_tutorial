const path = require('path')

console.log(path.sep);

const filePath = path.join('/content', 'subFolder', 'test.txt');
console.log("filePath: ",filePath);

const base = path.basename(filePath)

console.log("baseName: ",base);

const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt');
console.log("absolute: ",absolute);