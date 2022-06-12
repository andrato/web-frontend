// Router = to make it similar to all pages 
// Switch/Routes = a route at a time; different pages or routes that we want to have 

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ProductsComponent from './components/ProductsComponent';
import ProductsByCategoryComponent from './components/ProductsByCategoryComponent';
import ProductComponent from './components/ProductComponent';
import ProductsByAnimalComponent from './components/ProductsByAnimalComponent';
import CartComponent from './components/CartComponent';
import UserComponent from './components/UserComponent';
import LogoutComponent from './components/LogoutComponent';
import UserBillingsComponent from './components/UserBillingsComponent';
import UserFormComponent from './components/UserFormComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
        <Route path='/' element={<ProductsComponent/>} />
          <Route path='/products/:id' element={<ProductComponent />} />
          <Route path='/categories/:id' element={<ProductsByCategoryComponent/>} />
          <Route path='/animals/:id' element={<ProductsByAnimalComponent/>} />
          <Route path='/cart' element={<CartComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/register' element={<RegisterComponent />} />
          <Route path='/logout' element={<LogoutComponent />} />
          <Route path='/users/:id' element={<UserComponent />} />
          <Route path='/users/:id/form' element={<UserFormComponent />} />
          <Route path='/users/:id/allusers' element={<UserComponent />} />
          <Route path='/users/:id/allbillings' element={< UserComponent/>} />
          <Route path='/users/:id/billings' element={< UserBillingsComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
