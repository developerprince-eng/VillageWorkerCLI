const program = require(`commander`)
const nd = require(`./platforms/nodejs/index`)

program
  .version(`0.0.1`, `-v --version`)

program
  .command(`vwcli <name>`)
  .option(`-g --generate`, `Trigger Generate Operation`)
  .option(`--project -p`)
  .action((name) => {
    nd.ndjs.emptypro(name);
  })
program.parse(process.argv);
// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });