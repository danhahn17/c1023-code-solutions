/* global getFirstInitialOfPerson, expect */

describe('getFirstInitialOfPerson(person)', function () {
  beforeEach(function () {
    expect(getFirstInitialOfPerson).to.be.a('function');
  });

  it("gets Ada Lovelace's first initial", function () {
    const input = {
      firstName: 'Ada',
      lastName: 'Lovelace',
    };
    const output = getFirstInitialOfPerson(input);
    expect(output).to.equal('A');
  });

  it("gets Barbara Liskov's first initial", function () {
    const input = {
      firstName: 'Barbara',
      lastName: 'Liskov',
    };
    const output = getFirstInitialOfPerson(input);
    expect(output).to.equal('B');
  });

  it("gets Grace Hopper's first initial", function () {
    const input = {
      firstName: 'Grace',
      lastName: 'Hopper',
    };
    const output = getFirstInitialOfPerson(input);
    expect(output).to.equal('G');
  });
});
