import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
const app = express();

if (app.get('env') !== 'test') app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// set base url for api
import routes from './controllers';
routes(app);

app.use('*', (req, res) => res.status(404).json({
  message: 'Route Not Found.'
}));

export default app;
