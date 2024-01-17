const program = require('commander');
const createProjectActions = require('./actios.js');

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repo into a folder')
    .action(createProjectActions);
};

module.exports = createCommands;
