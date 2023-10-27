/* global expect, ransomCase */

describe('ransomCase(string)', function () {
  beforeEach(function () {
    expect(ransomCase).to.be.a('function');
  });

  it('returns "fOo" for "foo"', function () {
    const input = 'foo';
    const output = ransomCase(input);
    expect(output).to.equal('fOo');
  });

  it('returns "qUuX" for "QUUX"', function () {
    const input = 'QUUX';
    const output = ransomCase(input);
    expect(output).to.equal('qUuX');
  });

  it('returns "wAlDo" for "WaldO"', function () {
    const input = 'WaldO';
    const output = ransomCase(input);
    expect(output).to.equal('wAlDo');
  });

  it('returns "jAvAsCrIpT" for "JavaScript"', function () {
    const input = 'JavaScript';
    const output = ransomCase(input);
    expect(output).to.equal('jAvAsCrIpT');
  });

  it('returns "lEaRnInGfUzE" for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = ransomCase(input);
    expect(output).to.equal('lEaRnInGfUzE');
  });
});
