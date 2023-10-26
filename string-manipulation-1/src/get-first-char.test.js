/* global expect, getFirstChar */

describe('getFirstChar(string)', function () {
  beforeEach(function () {
    expect(getFirstChar).to.be.a('function');
  });

  it('returns "L" for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = getFirstChar(input);
    expect(output).to.equal('L');
  });

  it('returns "p" for "paschal"', function () {
    const input = 'paschal';
    const output = getFirstChar(input);
    expect(output).to.equal('p');
  });

  it('returns "H" for "HTML"', function () {
    const input = 'HTML';
    const output = getFirstChar(input);
    expect(output).to.equal('H');
  });

  it('returns "c" for "code"', function () {
    const input = 'code';
    const output = getFirstChar(input);
    expect(output).to.equal('c');
  });

  it('returns "S" for "String"', function () {
    const input = 'String';
    const output = getFirstChar(input);
    expect(output).to.equal('S');
  });
});
