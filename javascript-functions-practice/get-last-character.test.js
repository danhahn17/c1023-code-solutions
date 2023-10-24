/* global getLastCharacter, expect */

describe('getLastCharacter(string)', function () {
  beforeEach('make sure that getLastCharacter is defined', function () {
    expect(getLastCharacter).to.be.a('function');
  });

  it('returns the last character of "foo"', function () {
    const output = getLastCharacter('foo');
    expect(output).to.equal('o');
  });

  it('returns the last character of "ham sandwich"', function () {
    const output = getLastCharacter('ham sandwich');
    expect(output).to.equal('h');
  });

  it('returns the last character of "arbitrary"', function () {
    const output = getLastCharacter('arbitrary');
    expect(output).to.equal('y');
  });
});
