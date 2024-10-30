import React from 'react'
import Header from './components/Header/Header'
import Rotas from './routes/Rotas'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import FormContextProvider from './context/formContext'
import { UtagProvider } from './context/utag'

export default function App() {
  return (
    <>
      <UtagProvider>
        <FormContextProvider>

          <Header />
          <Rotas />
          <Banner />
          <Footer />

        </FormContextProvider>
      </UtagProvider>
    </>
  )
}
