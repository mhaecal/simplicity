import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from '../components/layouts/MainLayout'
import Dashboard from '../pages/Dashboard'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
