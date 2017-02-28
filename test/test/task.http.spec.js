import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import Todo from './../models/task';

chai.use(chaiHttp);
require('sinon-mongoose'); 
const expect = chai.expect;
const request = chai.request;
const uri = 'http://localhost:3000';

describe('Task request', () => {
  it('should make a request and return a list of tasks', (done) => {
    request(uri)
        .get('/tasks')
        .end((err, result) => {
          if(!err) {
            expect(result.body.status).to.be.true;
            expect(result.body.data).to.be.an('array');
            done();
          }

          console.log(err);
        });
  });
});


