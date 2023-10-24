/* global getInitialsOfPerson, expect */

describe('getInitialsOfPerson(person)', function () {
  beforeEach(function () {
    expect(getInitialsOfPerson).to.be.a('function');
  });

  it("gets Ada Lovelace's initials", function () {
    const input = {
      firstName: 'Ada',
      lastName: 'Lovelace',
    };
    const output = getInitialsOfPerson(input);
    expect(output).to.equal('AL');
  });

  it("gets Barbara Liskov's initials", function () {
    const input = {
      firstName: 'Barbara',
      lastName: 'Liskov',
    };
    const output = getInitialsOfPerson(input);
    expect(output).to.equal('BL');
  });

  it("gets Grace Hopper's initials", function () {
    const input = {
      firstName: 'Grace',
      lastName: 'Hopper',
    };
    const output = getInitialsOfPerson(input);
    expect(output).to.equal('GH');
  });
});
