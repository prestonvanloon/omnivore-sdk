const expect = require('chai').expect;

const Omnivore = require('../index');

describe('library', function () {
  it('should return a function', function () {
    expect(Omnivore).to.be.a.function;
  });

  describe('constructed', function () {
    const apiKey = 'api-key';
    const omnivore = Omnivore(apiKey);

    it('should be an sdk', function () {
      return omnivore.then(sdk => {
        expect(sdk).to.be.ok;
      });
    });

  });
});
