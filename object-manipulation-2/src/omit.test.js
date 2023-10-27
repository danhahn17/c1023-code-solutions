/* global omit, expect */

describe('omit(source, keys)', function () {
  beforeEach(function () {
    expect(omit).to.be.a('function');
  });

  it('creates an object without the listed keys', function () {
    const testCases = [
      [{ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz'], { bar: 2 }],
      [{ qux: 4, corge: 5 }, ['bar', 'grault'], { qux: 4, corge: 5 }],
      [{}, ['foo', 'bar', 'baz'], {}],
    ];
    for (let i = 0; i < testCases.length; i++) {
      const source = testCases[i][0];
      const keys = testCases[i][1];
      const expected = testCases[i][2];
      const frozen = Object.freeze(source);
      const actual = omit(frozen, keys);
      expect(actual).to.deep.equal(expected);
    }
  });
});
