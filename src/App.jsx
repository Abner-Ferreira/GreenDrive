import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import FormContextProvider from './context/formContext'
import Rotas from './routes/Rotas'

export default function App() {
  return (
    <>
        <FormContextProvider>

          <Header />
          <Rotas />
          <Footer />

        </FormContextProvider>
    </>
  )
}
