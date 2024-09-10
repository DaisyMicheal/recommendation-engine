import { Typography, Grid } from '@mui/material'

function App() {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      style={{ height: '100vh' }}
    >
      <Grid item>
        <Typography variant='h4' component='h1'>
          <h4>Just a Search Engine </h4>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default App
