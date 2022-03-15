import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import NotFound from './pages/NotFound'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { IAccomodations } from './types'

async function getAccomodations () {
  const res = await fetch('./logements.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const data = await res.json()
  return data
}

function App () {
  const [accomodations, setAccomodations] = useState<IAccomodations>([])
  useEffect(() => {
    getAccomodations().then(accomodationData => {
      setAccomodations(accomodationData)
    })
  }, [])
  console.log(accomodations)
  if (!accomodations) {
    return <div>No accomodations found</div>
  } else {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element=
            {
              <div className="page">
                <Header />
                <Home accomodations={accomodations}/>
                <Footer />
              </div>
            }>
            </Route>

            <Route path="/accomodation/:id" element=
            {
              <div className="page">
                <Header/>
                <Accomodation accomodations={accomodations}/>
                <Footer />
              </div>
            }>
            </Route>

            <Route path="/about" element=
            {
            <div className="page">
              <Header />
              <About/>
              <Footer />
            </div>
            }>
            </Route>

            <Route path="/404" element=
            {
            <div className="page">
              <Header />
              <NotFound />
              <Footer />
            </div>
            }>
            </Route>

            <Route path="*" element=
            {
            <div className="page">
              <Header />
              <NotFound />
              <Footer />
            </div>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
