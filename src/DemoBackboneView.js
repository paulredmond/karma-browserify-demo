module.exports = Backbone.View.extend({
  template: _.template("<a href=\"http://test.com\"><%= linkText %></a>"),
  render: function() {
    this.$el.html(this.template({ linkText: "Test 123" }));
    return this;
  }
});
