/* global expect, countdown */

describe('countdown(number)', function () {
  beforeEach(function () {
    expect(countdown).to.be.a('function');
  });

  it('takes 5 and returns an array of numbers counting down from 5 to 0', function () {
    const input = 5;
    const output = countdown(input);
    expect(output).to.deep.equal([5, 4, 3, 2, 1, 0]);
  });

  it('takes 10 and returns an array of numbers counting down from 10 to 0', function () {
    const input = 10;
    const output = countdown(input);
    expect(output).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('takes 0 and returns an array with only 0', function () {
    const input = 0;
    const output = countdown(input);
    expect(output).to.deep.equal([0]);
  });

  it('takes 2 and returns an array of numbers counting down from 2 to 0', function () {
    const input = 2;
    const output = countdown(input);
    expect(output).to.deep.equal([2, 1, 0]);
  });
});
