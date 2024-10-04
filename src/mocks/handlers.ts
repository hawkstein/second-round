import { delay, http, HttpResponse, passthrough } from 'msw';

type ConsumerStatus =
  | 'no-products-available'
  | 'products-available'
  | 'products-selected';

export type StatusResponse = {
  status: ConsumerStatus;
};

export type Product = {
  id: string;
  name: string;
  monthlyPayment: string;
  initialRate: string;
  aprc: string;
  fees: string;
};

export type ProductsResponse = {
  products: Product[];
};

const products: Product[] = [
  {
    id: 'a726d1c6-4c33-48d7-9e7a-110ddf16fb88',
    name: '2 year fixed',
    monthlyPayment: '£1,081',
    initialRate: '4.43%',
    aprc: '8.4%',
    fees: '£1295',
  },
  {
    id: 'd38d11e2-2548-470c-b8ce-748cd1b34662',
    name: '5 year fixed',
    monthlyPayment: '£1,200',
    initialRate: '4.24%',
    aprc: '6.6%',
    fees: '£1200',
  },
  {
    id: 'ab7c697f-a37a-4d1b-ba3c-1ac0a736be2c',
    name: '10 year fixed',
    monthlyPayment: '£1,000',
    initialRate: '4.99%',
    aprc: '6.2%',
    fees: '£1079',
  },
  {
    id: '93050e86-a387-4527-9b86-ae0fd6609d87',
    name: '2 year tracker',
    monthlyPayment: '£1,500',
    initialRate: '6.1%',
    aprc: '3.5%',
    fees: '£999',
  },
  {
    id: '793a4d6a-746f-4446-ae53-c4ac36e2a9aa',
    name: '5 year tracker',
    monthlyPayment: '£1,600',
    initialRate: '6.4%',
    aprc: '3.5%',
    fees: '£999',
  },
];

export const handlers = [
  http.get('http://localhost:5173/v1/status/', async () => {
    await delay();
    return HttpResponse.json<StatusResponse>({
      status: products.length ? 'products-available' : 'no-products-available',
    });
  }),
  http.get('http://localhost:5173/v1/products/', async () => {
    await delay();
    return HttpResponse.json<ProductsResponse>({
      products,
    });
  }),
  http.get('*', () => {
    return passthrough();
  }),
];
