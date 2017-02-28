const calc = require('../calc');
const chai = require('chai');
const expect = chai.expect;

describe('calc test', function() {
  it('should sum return 5', function(done) {
    const result = calc.sum(2, 3);
    expect(result).to.equal(5);
    done();
  });
});