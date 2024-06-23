import React from 'react'
import { HeaderIoT } from '../components/iot/HeaderIoT'
import { Box, Button, FormControl, Grid, InputLabel, Select, Typography } from '@mui/material'
import ReportCard from '../components/card/ReportCard'
import CropFieldSensor from '../components/cropfield/CropFieldSensor'

export const Iot = () => {
  return (
    <div>
      <HeaderIoT />
      <div className='flex flex-row p-6'>
          <Typography variant='h6'>Informacion de sensores</Typography>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Seleccionar cultivo</InputLabel>
            <Select labelId='cultive-label' id="cultive-select" label="Seleccionar cultivo"></Select>
          </FormControl>
      </div>

      <div className='flex justify-center items-center'>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
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
        <img src={""} alt=''/>
      </div>

      <div className="absolute bottom-6 right-6">
        <Button variant='contained'>Iniciar</Button>
      </div>

    </div>
  )
}
