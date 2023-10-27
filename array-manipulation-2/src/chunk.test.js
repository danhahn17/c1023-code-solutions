/* global expect, banMethods, chunk */

describe('chunk(array, size)', function () {
  beforeEach(function () {
    expect(chunk).to.be.a('function');
    banMethods(chunk, 'shift', 'pop', 'splice');
  });

  it('returns ["foo", "bar", "baz", "qux"] in "chunks" of 2', function () {
    const input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    const output = chunk(input, 2);
    expect(output).to.deep.equal([
      ['foo', 'bar'],
      ['baz', 'qux'],
    ]);
  });

  it('returns [undefined, null, 0, false, NaN, "", undefined] in "chunks" of 3', function () {
    const input = Object.freeze([
      undefined,
      null,
      0,
      false,
      NaN,
      '',
      undefined,
    ]);
    const output = chunk(input, 3);
    expect(output).to.deep.equal([
      [undefined, null, 0],
      [false, NaN, ''],
      [undefined],
    ]);
  });

  it('returns [1, 2, 3, 4, 5] in "chunks" of 1', function () {
    const input = Object.freeze([1, 2, 3, 4, 5]);
    const output = chunk(input, 1);
    expect(output).to.deep.equal([[1], [2], [3], [4], [5]]);
  });

  it('returns [false, true, false, true] in "chunks" of 3', function () {
    const input = Object.freeze([false, true, false, true]);
    const output = chunk(input, 3);
    expect(output).to.deep.equal([[false, true, false], [true]]);
  });

  it('returns [] (empty array) in "chunks" of 7', function () {
    const input = Object.freeze([]);
    const output = chunk(input, 7);
    expect(output).to.deep.equal([]);
  });
});
