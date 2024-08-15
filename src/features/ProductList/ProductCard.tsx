import { Product } from '../../mocks/handlers';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <h2>{product.name}</h2>
      <dl>
        <div>
          <dt>Monthly payment</dt>
          <dd>{product.monthlyPayment}</dd>
        </div>
        <div>
          <dt>Initial rate</dt>
          <dd>{product.initialRate}</dd>
        </div>
        <div>
          <dt>APRC</dt>
          <dd>{product.aprc}</dd>
        </div>
        <div>
          <dt>Fees</dt>
          <dd>{product.fees}</dd>
        </div>
      </dl>
    </article>
  );
}
