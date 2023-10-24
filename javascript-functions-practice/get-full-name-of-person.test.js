/* global getFullNameOfPerson, expect */

describe('getFullNameOfPerson(person)', function () {
  beforeEach(function () {
    expect(getFullNameOfPerson).to.be.a('function');
  });

  it("gets Ada Lovelace's full name", function () {
    const input = {
      firstName: 'Ada',
      lastName: 'Lovelace',
    };
    const output = getFullNameOfPerson(input);
    expect(output).to.equal('Ada Lovelace');
  });

  it("gets Barbara Liskov's full name", function () {
    const input = {
      firstName: 'Barbara',
      lastName: 'Liskov',
    };
    const output = getFullNameOfPerson(input);
    expect(output).to.equal('Barbara Liskov');
  });

  it("gets Grace Hopper's full name", function () {
    const input = {
      firstName: 'Grace',
      lastName: 'Hopper',
    };
    const output = getFullNameOfPerson(input);
    expect(output).to.equal('Grace Hopper');
  });
});
