const path = require('path');

const jasmine_module = require('jasmine');
const trx_reporter_module = require('jasmine-trx-reporter');

const trx_config = { folder: 'test_results' };
let trx_reporter_engine = new trx_reporter_module(trx_config);

let jasmine_engine = new jasmine_module();
jasmine_engine.loadConfigFile(path.join(__dirname, 'jasmine.json'));
jasmine_engine.clearReporters();
jasmine_engine.addReporter(trx_reporter_engine);

jasmine_engine.execute();