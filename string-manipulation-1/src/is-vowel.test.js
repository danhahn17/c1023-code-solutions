/* global expect, isVowel */

describe('isVowel(character)', function () {
  beforeEach(function () {
    expect(isVowel).to.be.a('function');
  });

  it('returns false for "L"', function () {
    const input = 'L';
    const output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns false for "f"', function () {
    const input = 'f';
    const output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns false for "Z"', function () {
    const input = 'Z';
    const output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns true for "a"', function () {
    const input = 'a';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "E"', function () {
    const input = 'E';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "I"', function () {
    const input = 'I';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "o"', function () {
    const input = 'o';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "u"', function () {
    const input = 'u';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });
});
