/* global getLastNameOfPerson, expect */

describe('getLastNameOfPerson(person)', function () {
  beforeEach(function () {
    expect(getLastNameOfPerson).to.be.a('function');
  });

  it("gets Ada Lovelace's last name", function () {
    const input = {
      firstName: 'Ada',
      lastName: 'Lovelace',
    };
    const output = getLastNameOfPerson(input);
    expect(output).to.equal('Lovelace');
  });

  it("gets Barbara Liskov's last name", function () {
    const input = {
      firstName: 'Barbara',
      lastName: 'Liskov',
    };
    const output = getLastNameOfPerson(input);
    expect(output).to.equal('Liskov');
  });

  it("gets Grace Hopper's last name", function () {
    const input = {
      firstName: 'Grace',
      lastName: 'Hopper',
    };
    const output = getLastNameOfPerson(input);
    expect(output).to.equal('Hopper');
  });
});
