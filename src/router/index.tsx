import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from '../components/layouts/MainLayout'
import BlankLayout from '../components/layouts/BlankLayout'
// pages
import Dashboard from '../pages/Dashboard'
import ButtonPage from '../pages/components/ButtonPage'
import Login from '../pages/Login'
import Form from '../pages/Form'
import Register from '../pages/Register'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
