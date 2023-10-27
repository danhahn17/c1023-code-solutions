/* global expect, lastChars */

describe('lastChars(length, string)', function () {
  beforeEach(function () {
    expect(lastChars).to.be.a('function');
  });

  it('returns the last 8 characters of "All Code All Day"', function () {
    const result = lastChars(8, 'All Code All Day');
    expect(result).to.equal(' All Day');
  });

  it('returns the last 15 characters of "HTML, CSS, JavaScript, React"', function () {
    const result = lastChars(15, 'HTML, CSS, JavaScript, React');
    expect(result).to.equal('vaScript, React');
  });

  it('returns the last character of "React"', function () {
    const result = lastChars(1, 'React');
    expect(result).to.equal('t');
  });

  it('returns the last 3 characters of "Angular"', function () {
    const result = lastChars(3, 'Angular');
    expect(result).to.equal('lar');
  });

  it('returns the last 20 characters of "LearningFuze"', function () {
    const result = lastChars(20, 'LearningFuze');
    expect(result).to.equal('LearningFuze');
  });
});
