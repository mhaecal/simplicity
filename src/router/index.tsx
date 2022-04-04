import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/Home'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
