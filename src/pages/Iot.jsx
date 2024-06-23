import React from 'react'
import { HeaderIoT } from '../components/iot/HeaderIoT'
import { Box, Button, Grid, Typography } from '@mui/material'
import ReportCard from '../components/card/ReportCard'
import CropFieldSensor from '../components/cropfield/CropFieldSensor'

export const Iot = () => {
  return (
    <div>
      <HeaderIoT />
      <div className='flex justify-center items-center'>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{mb: -2.25}}>
              <Typography variant='h5'>Informacion de sensores</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CropFieldSensor title="Temperatura: 25°C" color="warning" percentage="Estado del sensor" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CropFieldSensor title="Humedad: 50%" color="warning" percentage="Estado del sensor" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CropFieldSensor title="Temperatura optima" color="warning"/>
            </Grid>
        </Grid>
      </div>

      <div className='font-bold p-5'>
        <h1>Hora de inicio: </h1>
        <h1>Tiempo transcurrido:</h1>
      </div>

      <div className='flex justify-center my-8'>
        <img src={`${process.env.PUBLIC_URL}/regadera.png`} alt=''/>
      </div>

      <div className="absolute bottom-6 right-6">
        <Button variant='contained'>Iniciar</Button>
      </div>

    </div>
  )
}
