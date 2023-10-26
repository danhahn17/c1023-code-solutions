/* global expect, capitalize */

describe('capitalize(word)', function () {
  beforeEach(function () {
    expect(capitalize).to.be.a('function');
  });

  it('returns "A" for "a"', function () {
    const input = 'a';
    const output = capitalize(input);
    expect(output).to.equal('A');
  });

  it('returns "Link" for "link"', function () {
    const input = 'link';
    const output = capitalize(input);
    expect(output).to.equal('Link');
  });

  it('returns "To" for "tO"', function () {
    const input = 'tO';
    const output = capitalize(input);
    expect(output).to.equal('To');
  });

  it('returns "The" for "ThE"', function () {
    const input = 'ThE';
    const output = capitalize(input);
    expect(output).to.equal('The');
  });

  it('returns "Past" for "pAsT"', function () {
    const input = 'pAsT';
    const output = capitalize(input);
    expect(output).to.equal('Past');
  });

  it('returns "Hookshot" for "hookshot"', function () {
    const input = 'hookshot';
    const output = capitalize(input);
    expect(output).to.equal('Hookshot');
  });

  it('returns "Bow" for "bow"', function () {
    const input = 'bow';
    const output = capitalize(input);
    expect(output).to.equal('Bow');
  });

  it('returns "Bombs" for "bombs"', function () {
    const input = 'bombs';
    const output = capitalize(input);
    expect(output).to.equal('Bombs');
  });

  it('returns "Sword" for "sword"', function () {
    const input = 'sword';
    const output = capitalize(input);
    expect(output).to.equal('Sword');
  });
});
