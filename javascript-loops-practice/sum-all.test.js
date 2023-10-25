/* global expect, sumAll */

describe('sumAll(numbers)', function () {
  beforeEach(function () {
    expect(sumAll).to.be.a('function');
  });

  it('takes [1, 2, 3] and returns 6', function () {
    const input = [1, 2, 3];
    const output = sumAll(input);
    expect(output).to.equal(6);
  });

  it('takes [1200, 1, 0] and returns 1201', function () {
    const input = [1200, 1, 0];
    const output = sumAll(input);
    expect(output).to.equal(1201);
  });

  it('takes [999, 102, 234, 23, 90909, 25] and returns 92292', function () {
    const input = [999, 102, 234, 23, 90909, 25];
    const output = sumAll(input);
    expect(output).to.equal(92292);
  });
});
