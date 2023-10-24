/* global getLengthOfString, expect */

describe('getLengthOfString(string)', function () {
  beforeEach('make sure that getLengthOfString is defined', function () {
    expect(getLengthOfString).to.be.a('function');
  });

  it('returns the length of "foo"', function () {
    const output = getLengthOfString('foo');
    expect(output).to.equal(3);
  });

  it('returns the length of "ham sandwich"', function () {
    const output = getLengthOfString('ham sandwich');
    expect(output).to.equal(12);
  });

  it('returns the length of "arbitrary"', function () {
    const output = getLengthOfString('arbitrary');
    expect(output).to.equal(9);
  });
});
