/* global expect, banMethods, compact */

describe('compact(array)', function () {
  beforeEach(function () {
    expect(compact).to.be.a('function');
    banMethods(compact, 'slice', 'splice', 'pop', 'shift', 'filter');
  });

  it('omits false from arrays', function () {
    const input = [true, true, false, true];
    const output = compact(input);
    expect(output).to.deep.equal([true, true, true]);
  });

  it('omits null from arrays', function () {
    const input = [{}, null, {}, {}];
    const output = compact(input);
    expect(output).to.deep.equal([{}, {}, {}]);
  });

  it('omits NaN from arrays', function () {
    const input = [1, 2, 3, 4, NaN, 6, 7];
    const output = compact(input);
    expect(output).to.deep.equal([1, 2, 3, 4, 6, 7]);
  });

  it('omits 0 and -0 from arrays', function () {
    const input = [-0, 8, 9, 10, 11, 0, 13];
    const output = compact(input);
    expect(output).to.deep.equal([8, 9, 10, 11, 13]);
  });

  it('omits undefined from arrays', function () {
    const input = [[], undefined, [], [], undefined];
    const output = compact(input);
    expect(output).to.deep.equal([[], [], []]);
  });

  it('omits "" (empty strings) from arrays', function () {
    const input = ['', 'foo', 'bar', '', 'baz', 'qux'];
    const output = compact(input);
    expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux']);
  });

  it('maintains the order of truthy elements', function () {
    const input = [1, 'a', {}, [], true];
    const output = compact(input);
    expect(output).to.deep.equal([1, 'a', {}, [], true]);
  });
});
