module.exports = Backbone.View.extend({
  template: _.template("<a href=\"http://test.com\"><%= linkText %></a>"),
  events: {
    "click a": "linkClicked"
  },
  render: function() {
    this.$el.html(this.template({ linkText: "Test 123" }));
    return this;
  },
  linkClicked: function(e) {
    e.preventDefault();
    this.$el.append(_.template("<p class=\"log\"><%= text %></p>")({ text: "link clicked!"}));
    this.trigger('log:appended', this.$('p.log').length);
  }
});
