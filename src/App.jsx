import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import AddAddress from './components/AddAddress/AddAddress'
import Address from './components/Address/Address'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Order from './components/Order/Order'
import Profile from './components/Profile/Profile'
import Account from './pages/account/Account'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import ProductPage from './pages/product/ProductPage'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/account' element={<Account/>}>
              <Route path='/account/profile' element={<Profile/>}/>
              <Route path='/account/address' element={<Address/>}/>
              <Route path='/account/order-history' element={<Order/>}/>
              <Route path='/account/add-address' element={<AddAddress/>}/>
            </Route>
        </Routes>
        <Footer/>

      </Router>

    </>
  )
}

export default App
