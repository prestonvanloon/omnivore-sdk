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
        // console.log(Object.keys(sdk));
        console.log(Object.keys(sdk.apis));

        Object.keys(sdk.apis).forEach(key => {
          // console.log(sdk.apis[key]);
          console.log(`### ${sdk.apis[key].label}`);
          Object.keys(sdk.apis[key].operations || []).forEach(operation => {
            console.log(`#### ${operation}`);
            sdk.apis[key].operations[operation].parameters.forEach(parameter => {
              console.log(`-  ${parameter.name}`);
            });
            console.log();
          });
        });
        // console.log(sdk.Locations);
        return sdk.Locations.getAll();
      });
    });

  });
});
