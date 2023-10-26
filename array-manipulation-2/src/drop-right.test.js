/* global expect, banMethods, dropRight */

describe('dropRight(array, count)', function () {
  beforeEach(function () {
    expect(dropRight).to.be.a('function');
    banMethods(dropRight, 'shift', 'pop', 'splice');
  });

  it('drops the last 2 elements of ["foo", "bar", "baz", "qux"]', function () {
    const input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    const output = dropRight(input, 2);
    expect(output).to.deep.equal(['foo', 'bar']);
  });

  it('drops the last element of [1, 2, 3, 4, 5]', function () {
    const input = Object.freeze([1, 2, 3, 4, 5]);
    const output = dropRight(input, 1);
    expect(output).to.deep.equal([1, 2, 3, 4]);
  });

  it('drops the last 3 elements of [false, true, false, true]', function () {
    const input = Object.freeze([false, true, false, true]);
    const output = dropRight(input, 3);
    expect(output).to.deep.equal([false]);
  });

  it('drops the last 7 elements of [] (empty array)', function () {
    const input = Object.freeze([]);
    const output = dropRight(input, 7);
    expect(output).to.deep.equal([]);
  });

  it('drops the last 5 elements of ["chicken", "waffle", "syrup", "cheese"]', function () {
    const input = Object.freeze(['chicken', 'waffle', 'syrup', 'cheese']);
    const output = dropRight(input, 5);
    expect(output).to.deep.equal([]);
  });
});
