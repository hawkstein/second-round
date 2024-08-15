import { ProductList } from '.';
import { renderWithProviders } from '../../redux/test-utils';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';
import { delay, http, HttpResponse } from 'msw';

const server = setupServer(...handlers);

describe('ProductList', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('renders a loading state', async () => {
    renderWithProviders(<ProductList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByText('Loading...'));
  });

  it('renders a list of products', async () => {
    renderWithProviders(<ProductList />);
    expect(
      await screen.findByRole('heading', { name: '2 year fixed' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '5 year fixed' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '10 year fixed' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '2 year tracker' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '5 year tracker' }),
    ).toBeInTheDocument();
  });

  it('renders an error state', async () => {
    server.use(
      http.get('http://localhost:5173/v1/products/', async () => {
        await delay();
        return HttpResponse.json(null, { status: 401 });
      }),
    );
    renderWithProviders(<ProductList />);
    expect(await screen.findByText('An error occurred')).toBeInTheDocument();
  });
});
