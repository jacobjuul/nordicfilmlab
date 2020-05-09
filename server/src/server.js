import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

const router = express.Router();

app.use('/api', router);
router.use((req, res, next) => {
  console.log('something');
  next();
});

router.get('/user', (req, res) => {
  res.send('me');
});

app.get('/:id', (req, res, next) => {
  console.log(next);
  if (req.params.id === 'test') {
    next();
  }
  // console.log(req);
  res.send('test');
});

app.get('/:id', (req, res) => {
  res.send('wow');
});

export const start = () => {
  app.listen(4000, () => {
    console.log('server running on', 4000);
  });
};
