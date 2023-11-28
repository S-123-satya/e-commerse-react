import './App.css';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import Cart from './components/Cart/Cart';
import CartContext from './Store/cart-context';
import { useContext } from 'react';

function App() {
  const cartCtx=useContext(CartContext);
  return (
    <>
    <Layout/>
    {cartCtx.isShow && <Cart />}
    </>
  );
}

export default App;
