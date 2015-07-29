var fixture = require("../test_helper").Fixture;

/**
 * Demonstrate using a simple fixture helper
 * to allow Backbone to render to the DOM
 * and make some assertions.
 *
 * Not meant to replace or replicate e2e tests!
 */
describe('Example backbone view', function() {
  var subject;

  beforeEach(fixture.beforeEach);
  beforeEach(function() {
    var Subject = require('../../src/DemoBackboneView');
    subject = new Subject({});
  });

  afterEach(fixture.afterEach);

  it ('can render', function() {
    subject.render();
    expect(subject.$el.prop('tagName').toLowerCase()).to.equal("div");
    var $link = subject.$el.find('a').first();
    expect($link.html()).to.equal("Test 123");
  });
});
