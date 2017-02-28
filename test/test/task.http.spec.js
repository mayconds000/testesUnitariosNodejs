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

describe('Tasks request', () => {
  it('should make a request and return a list of tasks', (done) => {
    request(uri)
        .get('/tasks')
        .end((err, result) => {
          if(!err) {
            expect(result.body.status).to.be.true;
            expect(result.body.data).to.be.an('array');
            done();
          }
        });
  });

  it('should make a request and not send name form data', (done) => {
    request(uri)
        .post('/tasks')
        .send()
        .end((err, res) => {
          if (err) {
            expect(res.body.status).to.be.false;
            expect(res).to.have.status(500);
            done();
          }
        });
  });
});


