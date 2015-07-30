var fixture = require("../test_helper").Fixture;

/**
 * Demonstrate using a simple fixture helper
 * to allow Backbone to render to the DOM
 * and make some assertions.
 *
 * Not meant to replace or replicate e2e tests!
 * This might not even be needed for simple view tests...see the second test
 */
describe('Example backbone view', function() {
  var View = require('../../src/DemoBackboneView');
  var subject;

  beforeEach(fixture.beforeEach);
  beforeEach(function() {
    subject = new View({
      el: fixture.getContainer()
    });
  });

  afterEach(fixture.afterEach);

  it ('can render', function() {
    subject.render();
    expect(subject.$el.prop('tagName').toLowerCase()).to.equal("div");
    var $link = subject.$el.find('a').first();
    expect($link.html()).to.equal("Test 123");
  });

  it('can pass without a fixture container in the DOM', function() {
    subject = new View({});
    subject.render();
    expect(subject.$el.prop('tagName').toLowerCase()).to.equal("div");
    expect(subject.$el.parent().length).to.equal(0);
    var $link = subject.$el.find('a').first();
    expect($link.html()).to.equal("Test 123");
  });

  it ('can log clicks to the view', function(done) {
    subject.render();
    subject.on("log:appended", function(count) {
      expect(count).to.equal(1);
      expect(subject.$el.find('p').html()).to.equal("link clicked!");
      done();
    });

    subject.$el.find('a').first().trigger('click');
  });
});
