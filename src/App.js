import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './components/MainApp'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Restaurant from './components/Restaurant'
import Error from './components/Error'
import Body from './components/Body'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp />} errorElement={<Error />}>
          <Route index element={<Body />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/restaurants'>
            <Route path=':id' element={<Restaurant />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(<Router />)