/* global expect, isUpperCased */

describe('isUpperCased(word)', function () {
  beforeEach(function () {
    expect(isUpperCased).to.be.a('function');
  });

  it('returns false for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "JavaScript"', function () {
    const input = 'JavaScript';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "HTML"', function () {
    const input = 'HTML';
    const output = isUpperCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "css"', function () {
    const input = 'css';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "PHP"', function () {
    const input = 'PHP';
    const output = isUpperCased(input);
    expect(output).to.equal(true);
  });
});
