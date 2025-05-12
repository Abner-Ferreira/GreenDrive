import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Conteudos from '../pages/Conteudos/Conteudos'
import Home from '../pages/Home/Home'
import Produtos from '../pages/Produtos/Produtos'
import ThankYou from '../pages/ThankYou/ThankYou'

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/conteudos' element={<Conteudos />} />
        <Route path='/thank-you' element={<ThankYou/>} />

      </Routes>
    </>
  )
}
