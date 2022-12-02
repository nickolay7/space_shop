import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

import {Header} from 'components/Header'
import {Footer} from 'components/Footer'
import {NotFoundPage} from 'pages/NotFoundPage'

import {Home} from "pages/Home"
import {ProductItemPage} from "pages/ProductItemPage";

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
          <Route path="/about" element={<About/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path="*" element={<Navigate to='/404' />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
