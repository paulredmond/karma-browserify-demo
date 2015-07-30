/**
 * Rudimentary way to set up and tear down a base fixture DOM element.
 *
 * @type {Object}
 */
module.exports = {

  containerId: 'test-fixtures',

  getContainer: function() {
    return $('#' + module.exports.containerId);
  },

  hasContainer: function() {
    return module.exports.getContainer().length > 0;
  },

  /**
   * Adds the fixture container to the dom for use during a test case.
   * Use as a callback to run before each individual test.
   *
   * @return {null}
   */
  beforeEach: function() {
    module.exports.addBaseFixture();
  },

  /**
   * Cleans up the DOM by removing the fixture container.
   * Use as a callback to run after each individual test.
   *
   * @return {null}
   */
  afterEach: function() {
    module.exports.removeBaseFixture();
  },

  addBaseFixture: function() {
    if (!module.exports.hasContainer()) {
      var template = _.template('<div id="<%= id %>"></div>')({
        id: module.exports.containerId
      });

      $(template).appendTo("body");
    }
  },

  removeBaseFixture: function() {
    if (module.exports.hasContainer()) {
      module.exports.getContainer().remove();
    }
  }
};
