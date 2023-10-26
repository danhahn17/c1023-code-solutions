/* global expect, getLastChar */

describe('getLastChar(string)', function () {
  beforeEach(function () {
    expect(getLastChar).to.be.a('function');
  });

  it('returns "e" for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = getLastChar(input);
    expect(output).to.equal('e');
  });

  it('returns "l" for "paschal"', function () {
    const input = 'paschal';
    const output = getLastChar(input);
    expect(output).to.equal('l');
  });

  it('returns "L" for "HTML"', function () {
    const input = 'HTML';
    const output = getLastChar(input);
    expect(output).to.equal('L');
  });

  it('returns "e" for "code"', function () {
    const input = 'code';
    const output = getLastChar(input);
    expect(output).to.equal('e');
  });

  it('returns "g" for "String"', function () {
    const input = 'String';
    const output = getLastChar(input);
    expect(output).to.equal('g');
  });
});
