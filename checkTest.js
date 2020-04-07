var screen = process.argv[2];
if (screen < 5 && screen > 0) {
  const {exec} = require('child_process');
  exec('jest --json --outputFile=./output/output' + screen + '.json', err => {
    if (err) {
      return;
    }
  });
} else {
  console.log('\x1b[1m\x1b[33m', 'Choose a screen from 1 to 4 to test');
}
