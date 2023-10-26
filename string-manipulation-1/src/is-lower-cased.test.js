/* global expect, isLowerCased */

describe('isLowerCased(word)', function () {
  beforeEach(function () {
    expect(isLowerCased).to.be.a('function');
  });

  it('returns false for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = isLowerCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "zip-ties"', function () {
    const input = 'zip-ties';
    const output = isLowerCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "JavaScript"', function () {
    const input = 'JavaScript';
    const output = isLowerCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "burgers"', function () {
    const input = 'burgers';
    const output = isLowerCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "HTML"', function () {
    const input = 'HTML';
    const output = isLowerCased(input);
    expect(output).to.equal(false);
  });
});
