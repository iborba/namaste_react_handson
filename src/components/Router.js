import { BrowserRouter, Routes, Route } from 'react-router'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Restaurant from './Restaurant'
import Error from './Error'
import MainApp from './MainApp'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp />} errorElement={<Error />} />
        <Route path='/about' element={<About />} errorElement={<Error />} />
        <Route path='/contact' element={<Contact />} errorElement={<Error />} />
        <Route path='/cart' element={<Cart />} errorElement={<Error />} />
        <Route path='/restaurant/:id' element={<Restaurant />} errorElement={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;