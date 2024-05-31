import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import PrivateRoute from './utils/privateRoute'
import { DashboardPage } from './pages/Dashboard'
import { Subscription } from './pages/Subscription'
import { Iot } from './pages/Iot'
import { Analytics } from './pages/Analytics'
import InicioDashboard from './pages/InicioDashboard'
import UserProfile from './pages/UserProfile'
import { Cropfields } from './pages/Cropfields'
import { PayMethods } from './pages/PayMethods'
import { AddCropfield } from './pages/AddCropfield'



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
          <Route path='cultivos' element={<Cropfields />} />
          <Route path='cultivos/add-cultivo' element={<AddCropfield />} />
          <Route path='subscripcion' element={<Subscription />} />
          <Route path='iot' element={<Iot />} />
          <Route path='metricas' element={<Analytics />} />
          <Route path='perfil' element={<UserProfile/>}/>
          <Route path='metodos-de-pago' element={<PayMethods/>}/>
          {/* CropfieldForm */}
        </Route>
      </Route>
    </Routes>
  )
}
