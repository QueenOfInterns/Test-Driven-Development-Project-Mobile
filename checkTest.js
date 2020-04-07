const fs = require('fs');
var screen = process.argv[2];
if (screen < 5 && screen > 0) {
  const {exec} = require('child_process');
  exec('jest --json --outputFile=./output/output' + screen + '.json', err => {
    if (err) {
      return;
    }
  });
  var watcher = fs.watch('./output/output' + screen + '.json', () => {
    let data = fs.readFileSync('./output/output' + screen + '.json');
    let output = JSON.parse(data);
    console.log(output.testResults[0].status);
    watcher.close();
  });
} else {
  console.log('\x1b[1m\x1b[33m', 'Choose a screen from 1 to 4 to test');
}
