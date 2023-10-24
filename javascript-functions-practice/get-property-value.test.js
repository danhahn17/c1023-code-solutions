/* global getPropertyValue, expect */

describe('getPropertyValue(object, key)', function () {
  beforeEach(function () {
    expect(getPropertyValue).to.be.a('function');
  });

  it('gets the birthPlace of Ada Lovelace', function () {
    const object = {
      name: 'Ada Lovelace',
      occupation: 'countess',
      birthPlace: 'London, England',
    };
    const key = 'birthPlace';
    const output = getPropertyValue(object, key);
    expect(output).to.equal('London, England');
  });

  it('gets the occupation of Barbara Liskov', function () {
    const object = {
      name: 'Barbara Liskov',
      occupation: 'computer scientist',
      birthPlace: 'Los Angeles, California',
    };
    const key = 'occupation';
    const output = getPropertyValue(object, key);
    expect(output).to.equal('computer scientist');
  });

  it('gets the name of Grace Hopper', function () {
    const object = {
      name: 'Grace Hopper',
      occupation: 'navy rear admiral',
      birthPlace: 'New York City, New York',
    };
    const key = 'name';
    const output = getPropertyValue(object, key);
    expect(output).to.equal('Grace Hopper');
  });
});
