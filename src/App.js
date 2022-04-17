import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blogs from './pages/Blogs/Blogs'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import Signup from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
