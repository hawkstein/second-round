import { useGetProductsQuery } from '../../redux/api';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();
  return (
    <>
      {error ? <p>An error occurred</p> : null}
      {isLoading ? <p>Loading...</p> : null}
      {data?.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
