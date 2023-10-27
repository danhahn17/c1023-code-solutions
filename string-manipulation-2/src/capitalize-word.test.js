/* global expect, capitalizeWord */

describe('capitalizeWord(word)', function () {
  beforeEach(function () {
    expect(capitalizeWord).to.be.a('function');
  });

  it('capitalizes "broKeN"', function () {
    const input = 'broKeN';
    const output = capitalizeWord(input);
    expect(output).to.equal('Broken');
  });

  it('capitalizes "sEarCHinG"', function () {
    const input = 'sEarCHinG';
    const output = capitalizeWord(input);
    expect(output).to.equal('Searching');
  });

  it('capitalizes "quEStiOn"', function () {
    const input = 'quEStiOn';
    const output = capitalizeWord(input);
    expect(output).to.equal('Question');
  });

  it('capitalizes "tHoUghTfUl"', function () {
    const input = 'tHoUghTfUl';
    const output = capitalizeWord(input);
    expect(output).to.equal('Thoughtful');
  });

  it('capitalizes "jaVAsCrIPt"', function () {
    const input = 'jaVAsCrIPt';
    const output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "javaScript"', function () {
    const input = 'javaScript';
    const output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "JavascRipt"', function () {
    const input = 'JavascRipt';
    const output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });
});
