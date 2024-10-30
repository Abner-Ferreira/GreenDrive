import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Produtos from '../pages/Produtos/Produtos'
import Circularidade from '../pages/Circularidade/Circularidade'
import Conteudos from '../pages/Conteudos/Conteudos'
import ThankYou from '../pages/ThankYou/ThankYou'

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path='/mobilidade/'  element={<Home />} />
        <Route path='/mobilidade/produtos' element={<Produtos />} />
        <Route path='/mobilidade/programa-circularidade' element={<Circularidade />} />
        <Route path='/mobilidade/conteudos' element={<Conteudos />} />
        <Route path='/mobilidade/form/thank-you' element={<ThankYou/>} />

      </Routes>
    </>
  )
}
