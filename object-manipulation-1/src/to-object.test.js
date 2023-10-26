/* global expect, toObject, banMethods */

describe('toObject(keyValuePair)', function () {
  beforeEach(function () {
    expect(toObject).to.be.a('function');
    banMethods(toObject, 'fromEntries');
  });

  it('creates a Dave object', function () {
    const output = toObject(['firstName', 'David']);
    expect(output).to.deep.equal({
      firstName: 'David',
    });
  });

  it('creates a cool object', function () {
    const output = toObject(['isCool', true]);
    expect(output).to.deep.equal({
      isCool: true,
    });
  });

  it('creates an employee object', function () {
    const output = toObject(['employer', 'LearningFuze']);
    expect(output).to.deep.equal({
      employer: 'LearningFuze',
    });
  });
});
