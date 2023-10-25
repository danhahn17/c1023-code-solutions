/* global expect, getStudentNames */

describe('getStudentNames(students)', function () {
  beforeEach(function () {
    expect(getStudentNames).to.be.a('function');
  });

  it(`takes [{ name: "Robert" },
      { name: "Steve" },
      { name: "Ken" }] and returns [
      "Robert",
      "Steve",
      "Ken"
    ]`, function () {
    const input = [{ name: 'Robert' }, { name: 'Steve' }, { name: 'Ken' }];
    const output = getStudentNames(input);
    expect(output).to.deep.equal(['Robert', 'Steve', 'Ken']);
  });

  it(`takes [{ name: "Shrek" },
      { name: "Donkey" }] and returns [
      "Shrek",
      "Donkey"
    ]`, function () {
    const input = [{ name: 'Shrek' }, { name: 'Donkey' }];
    const output = getStudentNames(input);
    expect(output).to.deep.equal(['Shrek', 'Donkey']);
  });

  it('takes [] and returns []', function () {
    const argument = [];
    const output = getStudentNames(argument);
    expect(output).to.deep.equal([]);
  });
});
