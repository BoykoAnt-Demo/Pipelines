const path = require('path');

const jasmine_module = require('jasmine');
const cli_reporter_module = require('jasmine-console-reporter');

let cli_reporter_engine = new cli_reporter_module({
    colors: 1,
    listStyle: 'indent',
    timeUnit: 'ms',
    emoji: true
});

let jasmine_engine = new jasmine_module();
jasmine_engine.loadConfigFile(path.join(__dirname, 'jasmine.json'));
jasmine_engine.clearReporters();
jasmine_engine.addReporter(cli_reporter_engine);

jasmine_engine.execute();