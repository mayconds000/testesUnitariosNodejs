import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import task from './task';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost/test_mongo');

// app.get('/', (req, res) => {
//   res.send('my route!');
// });

app.post('/tasks', task.create);
app.delete('/tasks/:id', task.remove);

app.listen(3000, () => {
  console.log('express started');
})