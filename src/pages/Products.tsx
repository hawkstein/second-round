import { ProductList } from '../features/ProductList';
import { Link } from 'react-router-dom';

export function Products() {
  return (
    <>
      <h1>Products available</h1>
      <ProductList />
      <p>
        <Link to="/">Go back</Link>
      </p>
    </>
  );
}
