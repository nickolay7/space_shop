import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

import {Header, Footer} from 'components'
import {NotFoundPage, Cart, Home, ProductItemPage} from 'pages'

import 'scss/main.scss'

const About = () => <h2>About</h2>

function App() {
  return (
    <div className='ui-wrapper'>
      <Header className=''/>
      <div className='ui-content-wrapper'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Navigate to='/' />}/>
          <Route path="/products/:productAlias" element={<ProductItemPage />} />
          <Route path="/about" element={<About />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path="*" element={<Navigate to='/404' />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
