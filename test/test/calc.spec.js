// const calc = require('../calc');
// const chai = require('chai');
// const expect = chai.expect;

// import sinon from 'sinon';

// describe('calc test', function() {
//   it('should sum return 5', (done) => {
//     let mock = sinon.mock(calc);

//     mock.expects('sum').yields(null, 5);

//     calc.sum(2, 3, (err, result) => {
//       mock.verify();
//       mock.restore();

//       expect(result).to.be.equal(5);
//       done();

//     });
    
//     // const result = calc.sum(2, 3);
//     // expect(result).to.equal(5);
//     // done();
//   });

//   it('stub func', (done) => {
//     let stub = sinon.stub(calc, 'sum');

//     stub.returns(5);

//     let result = calc.calc(4, 1);

//     expect(calc.sum).to.have.been.calledOne;
//     expect(result).to.equal(5);
//     stub.restore();
//     done();
//   });
// });