var Person = require('../../src/Person');

describe('A demo test', function() {
  var subject;
  beforeEach(function() {
    subject = new Person("Bob");
  });

  it ('should be an object', function() {
    expect(subject).to.be.an('object');
  });

  it ('should respond to getName', function() {
    subject.should.respondTo('getName');
    subject.getName().should.equal("Bob");
  });
});
