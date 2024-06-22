import React from 'react'
import { HeaderIoT } from '../components/iot/HeaderIoT'
import { Box, Grid, Typography } from '@mui/material'
import ReportCard from '../components/card/ReportCard'


export const Iot = () => {
  return (
    <div>
      <HeaderIoT />

      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{mb: -2.25}}>
          <Typography variant='h5'>Reporte de consumo de agua</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard title="Volumen de agua utilizada" number="15,000 m3" percentage="Has ahorrado un 12% con respecto al mes anterior" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard title="Temperatura promedio" number="23°C" color="warning" percentage="La temperatura se ha mantenido constante este mes" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard title="Humedad promedio" number="46%" percentage="La temperatura se ha mantenido constante este mes" />
        </Grid>

      </Grid>
    </div>
  )
}
