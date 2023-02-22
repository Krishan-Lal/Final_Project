import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ShopContextProvider } from "../pages/context/shop-context"
import { Cart } from "../pages/cart/Cart";
import { Shop } from "../pages/shop/Shop";
import { Thankyou } from '../pages/shop/Thankyou';
import Register from '../pages/login/Register';
import Login from '../pages/login/Login';
import Admin from '../pages/login/Admin';

const queryClient = new QueryClient()

function App() {
  return (
    <ShopContextProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/shop' element={<Shop />}></Route>
              <Route path='/thankyou' element={<Thankyou />}></Route>
              <Route path='/admin' element={<Admin />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </ShopContextProvider>
  )
}

export default App
