/* global getSecondElement, expect */

describe('getSecondElement(array)', function () {
  beforeEach('make sure that getSecondElement is defined', function () {
    expect(getSecondElement).to.be.a('function');
  });

  it('returns "bar" from ["foo", "bar", "baz"]', function () {
    const output = getSecondElement(['foo', 'bar', 'baz']);
    expect(output).to.equal('bar');
  });

  it('returns 10 from [9, 10, 19, 20]', function () {
    const output = getSecondElement([9, 10, 19, 20]);
    expect(output).to.equal(10);
  });

  it('returns true from [false, true]', function () {
    const output = getSecondElement([false, true]);
    expect(output).to.equal(true);
  });
});
