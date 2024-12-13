import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import Header from './components/Header'

const header = ReactDOM.createRoot(document.getElementById('header'))
const root = ReactDOM.createRoot(document.getElementById('root'))

header.render(<Header />)
root.render(<Router />)