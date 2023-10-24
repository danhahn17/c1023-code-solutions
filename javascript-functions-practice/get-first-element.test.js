/* global getFirstElement, expect */

describe('getFirstElement(array)', function () {
  beforeEach('make sure that getFirstElement is defined', function () {
    expect(getFirstElement).to.be.a('function');
  });

  it('returns the first element of ["foo", "bar", "baz"]', function () {
    const output = getFirstElement(['foo', 'bar', 'baz']);
    expect(output).to.equal('foo');
  });

  it('returns the first element of [9, 10, 19, 20]', function () {
    const output = getFirstElement([9, 10, 19, 20]);
    expect(output).to.equal(9);
  });

  it('returns the first element of [false, true]', function () {
    const output = getFirstElement([false, true]);
    expect(output).to.equal(false);
  });
});
