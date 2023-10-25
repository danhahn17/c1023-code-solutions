/* global expect, addSuffixToAll */

describe('addSuffixToAll(words, suffix)', function () {
  beforeEach(function () {
    expect(addSuffixToAll).to.be.a('function');
  });

  it('Adds "ly" to the end of each word', function () {
    const input = ['clever', 'meek', 'hurried', 'nice'];
    const output = addSuffixToAll(input, 'ly');
    expect(output).to.deep.equal(['cleverly', 'meekly', 'hurriedly', 'nicely']);
  });

  it('Adds "er" to the end of each word', function () {
    const input = ['new', 'pander', 'scoop'];
    const output = addSuffixToAll(input, 'er');
    expect(output).to.deep.equal(['newer', 'panderer', 'scooper']);
  });

  it('Adds "ing" to the end of each word', function () {
    const input = ['bend', 'sharpen', 'mean'];
    const output = addSuffixToAll(input, 'ing');
    expect(output).to.deep.equal(['bending', 'sharpening', 'meaning']);
  });

  it('Adds "ity" to the end of each word', function () {
    const input = ['equal', 'abnormal', 'civil'];
    const output = addSuffixToAll(input, 'ity');
    expect(output).to.deep.equal(['equality', 'abnormality', 'civility']);
  });
});
