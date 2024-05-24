import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import PrivateRoute from './utils/privateRoute'
import { DashboardPage } from './pages/Dashboard'
import { InicioDashboard } from './pages/InicioDashboard'
import { Cultivos } from './pages/Cultivos'
import { Subscripcion } from './pages/Subscripcion'
import { Iot } from './pages/Iot'
import { Metricas } from './pages/Metricas'


export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<RegisterPage />} />
      <Route exact path='/dashboard' element={<PrivateRoute />}>
        <Route exact path='/dashboard' element={<DashboardPage />}>
          <Route path='inicio' element={<InicioDashboard />} />
          <Route path='cultivos' element={<Cultivos />} />
          <Route path='subscripcion' element={<Subscripcion />} />
          <Route path='iot' element={<Iot />} />
          <Route path='metricas' element={<Metricas />} />
        </Route>
      </Route>
    </Routes>
  )
}
