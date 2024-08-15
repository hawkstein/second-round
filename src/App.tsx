import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
