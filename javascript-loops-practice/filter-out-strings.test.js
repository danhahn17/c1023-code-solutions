/* global expect, filterOutStrings */

describe('filterOutStrings(values)', function () {
  beforeEach(function () {
    expect(filterOutStrings).to.be.a('function');
  });

  it('takes [1, 2, 3, "x", "y", 10] and returns [1, 2, 3, 10]', function () {
    const input = [1, 2, 3, 'x', 'y', 10];
    const output = filterOutStrings(input);
    expect(output).to.deep.equal([1, 2, 3, 10]);
  });

  it('takes [1, "a", 2, "b", 3, "c"] and returns [1, 2, 3]', function () {
    const input = [1, 'a', 2, 'b', 3, 'c'];
    const output = filterOutStrings(input);
    expect(output).to.deep.equal([1, 2, 3]);
  });

  it('takes [null, null, "yeet", null, null] and returns [null, null, null, null]', function () {
    const input = [null, null, 'yeet', null, null];
    const output = filterOutStrings(input);
    expect(output).to.deep.equal([null, null, null, null]);
  });

  it('takes [0, -32, "&@A", 64, "99", -128] and returns [0, -32, 64, -128]', function () {
    const input = [0, -32, '&@A', 64, '99', -128];
    const output = filterOutStrings(input);
    expect(output).to.deep.equal([0, -32, 64, -128]);
  });
});
