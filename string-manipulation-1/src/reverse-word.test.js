/* global expect, reverseWord, banMethods */

describe('reverseWord(word)', function () {
  beforeEach(function () {
    expect(reverseWord).to.be.a('function');
    banMethods(reverseWord, 'split', 'from', '\\.\\.'); // no spreading
  });

  it('returns "oof" for "foo"', function () {
    const input = 'foo';
    const output = reverseWord(input);
    expect(output).to.equal('oof');
  });

  it('returns "bar" for "rab"', function () {
    const input = 'rab';
    const output = reverseWord(input);
    expect(output).to.equal('bar');
  });

  it('returns "ezuFgninraeL" for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = reverseWord(input);
    expect(output).to.equal('ezuFgninraeL');
  });

  it('returns "JavaScript" for "tpircSavaJ"', function () {
    const input = 'tpircSavaJ';
    const output = reverseWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('returns "racecar" for "racecar"', function () {
    const input = 'racecar';
    const output = reverseWord(input);
    expect(output).to.equal('racecar');
  });
});
