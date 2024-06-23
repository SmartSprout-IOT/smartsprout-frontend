import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import { HeaderAnalytics } from '../components/analytics/HeaderAnalytics'
import ReportCard from '../components/card/ReportCard';
import { LineChartIcon } from 'lucide-react';
import { LineChart } from '@mui/x-charts';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export const Analytics = () => {
  return (
    <div>
      <HeaderAnalytics />

      <div>
        <h1>Humedad</h1>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Income chart</InputLabel>
              <Select
                labelId="chart-label"
                id="chart-select"
                // value={age}
                label="Income chart "
                // onChange={handleChange}
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">This year</InputLabel>
              <Select
                labelId="year-label"
                id="year-select"
                // value={age}
                label="This year"
                // onChange={handleChange}
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="cultive-label">Select cultive</InputLabel>
              <Select
                labelId="cultive-label"
                id="cultive-select"
                // value={age}
                label="Select cultive"
                // onChange={handleChange}
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
          </FormControl>
        </Box>
      </div>

      <div className='flex justify-center items-center'>
        <LineChart
          xAxis={[{ scaleType: 'point', data: ["Enero", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"] }]}
          series={[
            {
              data: [200, 400, 120, 780, 350, 760, 180, 960,600,410,540,900],
            },
          ]}
          width={1000}
          height={400}
        />
      </div>

      <div className='flex justify-center items-center'>
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
      
    </div>
  )
}
