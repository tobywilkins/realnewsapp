var app = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');
describe('index page', function() {

  beforeEach(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('has an index page', function() {
    browser.assert.status(200);
  });

  it('displays headlines', function() {
    browser.assert.text("#headlines");
  });

});
