import express, { Request, Response } from 'express';

import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

const products = [{
  id: 1,
  name: 'Airwalks',
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51b%2BfaJAyJL._AC_UY395_.jpg',
  description: 'Time-travel to 1997 and let\'s go Skateboarding!',
}, {
  id: 2,
  name: 'Xelero',
  imageUrl: 'https://m.media-amazon.com/images/I/71E5vDK4ucL._AC_UL1500_.jpg',
  description: 'You can make fun of these shoes all you want, but I can\'t even hear you from up here on these clouds I\'m walking on.',
}, {
  id: 3,
  name: 'Rothy\'s',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0877/4986/products/002_ChiliRed_pdp_A.jpg?v=1596060959',
  description: 'Did you know you can put these in the washing machine?',
}];

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('products', (request: Request, response: Response) => {
  response.json({ products });
});

export default app;
