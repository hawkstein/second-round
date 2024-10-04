import { useGetProductsQuery } from '../../redux/api';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (error) {
    return <p>An error occurred</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data?.products.length === 0) {
    return <p>There are no products to view.</p>;
  }

  return data?.products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
