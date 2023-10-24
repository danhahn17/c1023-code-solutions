/* global getDescriptionOfPerson, expect */

describe('getDescriptionOfPerson(person)', function () {
  beforeEach(function () {
    expect(getDescriptionOfPerson).to.be.a('function');
  });

  it('gets a description of Ada Lovelace', function () {
    const input = {
      name: 'Ada Lovelace',
      occupation: 'countess',
      birthPlace: 'London, England',
    };
    const output = getDescriptionOfPerson(input);
    expect(output).to.equal('Ada Lovelace is a countess from London, England.');
  });

  it('gets a description of Barbara Liskov', function () {
    const input = {
      name: 'Barbara Liskov',
      occupation: 'computer scientist',
      birthPlace: 'Los Angeles, California',
    };
    const output = getDescriptionOfPerson(input);
    expect(output).to.equal(
      'Barbara Liskov is a computer scientist from Los Angeles, California.'
    );
  });

  it('gets a description of Grace Hopper', function () {
    const input = {
      name: 'Grace Hopper',
      occupation: 'navy rear admiral',
      birthPlace: 'New York City, New York',
    };
    const output = getDescriptionOfPerson(input);
    expect(output).to.equal(
      'Grace Hopper is a navy rear admiral from New York City, New York.'
    );
  });
});
