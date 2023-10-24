/* global getSecondCharacter, expect */

describe('getSecondCharacter(string)', function () {
  beforeEach('make sure that getSecondCharacter is defined', function () {
    expect(getSecondCharacter).to.be.a('function');
  });

  it('returns the second character of "foo"', function () {
    const output = getSecondCharacter('foo');
    expect(output).to.equal('o');
  });

  it('returns the second character of "ham sandwich"', function () {
    const output = getSecondCharacter('ham sandwich');
    expect(output).to.equal('a');
  });

  it('returns the second character of "arbitrary"', function () {
    const output = getSecondCharacter('arbitrary');
    expect(output).to.equal('r');
  });
});
