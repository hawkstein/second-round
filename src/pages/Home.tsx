import { Link } from 'react-router-dom';
import { useGetStatusQuery } from '../redux/api';
import { Message } from '../components/Message';

const messages: Record<string, string> = {
  'no-products-available': 'Your mortgage has nothing to review right now',
  'products-available': 'You have products available to review',
  'products-selected': "We'll be in touch soon about your selected products",
};

export function Home() {
  const { data } = useGetStatusQuery();
  const message = data ? messages[data.status] : undefined;
  const hasProducts = data?.status === 'products-available';
  return (
    <>
      <h1>Welcome</h1>
      <Message message={message} />
      {hasProducts && (
        <p>
          <Link to="/products">Review products</Link>
        </p>
      )}
    </>
  );
}
