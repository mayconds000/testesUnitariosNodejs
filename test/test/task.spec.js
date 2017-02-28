import sinon from 'sinon';
import chai from 'chai';
import mongoose from 'mongoose';
import Todo from './../models/task';

const expect = chai.expect;
require('sinon-mongoose'); 

describe('', () => {
  it('should create a new task', (done) => {
    let mock = sinon.mock(
      new Todo({
        name: 'Task test'
      })
    );

    let todo = mock.object; //objeto necessario para criação

    mock.expects('save').yields(null, {
      status: true,
      data: {
        name: 'Task test',
        completed: false
      }
    });

    todo.save((err, result) => {
      mock.verify();
      mock.restore();

      expect(result.status).to.equal(true);
      expect(result.data).to.be.an('object');
      done();
    })

  });

  it('should remove one task by id', (done) => {
    let mock = sinon.mock(Todo);

    mock.expects('findOneAndRemove').withArgs({
      _id: '58b578e82f05322530fba8e6'
    }).yields(null, {
      status: true,
      _id: '58b578e82f05322530fba8e6'
    });

    Todo.findOneAndRemove({
      _id: '58b578e82f05322530fba8e6',

    }, (err, result) => {
      mock.verify();
      mock.restore();

      expect(result.status).to.equal(true);

      done();
    });
  })
});