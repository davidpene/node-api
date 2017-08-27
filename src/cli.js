const yargs = require('yargs');

const startServer = require('./index');

const argv = yargs
  .usage('$0 [options]')
  .help('h')
  .alias('h', 'help')
  .options({
    port: {
      alias: 'p',
      description: 'Set port',
      default: 3000,
      type: 'number'
    }
  })
  .argv;

startServer(argv.port).then(() => {
  console.log('node-api is running on port ' + argv.port);
});
