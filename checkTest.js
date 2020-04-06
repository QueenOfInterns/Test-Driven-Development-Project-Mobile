const fs = require('fs');

let rawdata = fs.readFileSync('output.json');
let output = JSON.parse(rawdata);
console.log(output.testResults[0].status === 'failed' ? 'wrong' : 'right');
