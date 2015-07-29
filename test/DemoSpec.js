// Demo spec using http://facebook.github.io/immutable-js/
var Immutable = require("immutable");

describe('Immutable demo', function() {
  var subject;

  beforeEach(function() {
    subject = null;
  });

  describe('Map', function() {
    it ('should not mutate the Map', function() {
      var subject2;

      subject = Immutable.Map({ foo: "bar", fizz: "buzz" });
      subject.set("foo", "baz");
      expect(subject.get("foo")).to.equal("bar");
      expect(subject.set("foo", "buzz")).to.not.equal(subject);
    });

    it ('can be "copied" with a reference', function() {
      subject = Immutable.Map({ foo: "bar" });
      var copy = subject;
      expect(copy).to.equal(subject);
      copy.set("foo", "buzz");
      expect(copy.get("foo")).to.equal("bar");
      expect(copy).to.equal(subject);
    });

    it ('can map things', function() {
      subject = Immutable.Map({ a: 1, b:2, c:3, d:4 });
      var str = subject.map(function(val, key) {
        return key.toUpperCase();
      }).join(",");

      expect(str).to.equal("A,B,C,D")
    });
  });
});
