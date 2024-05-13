import { Container, Paper, Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'
// Assets
import cimentDarkBckground from '../assets/cimentDarkWallpaper.jpg'

const PageError = () => {
  const error = useRouteError()
  return (
    <Container
      maxWidth="false"
      component="main"
      sx={{
        minHeight: '100vh',
        py: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${cimentDarkBckground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Paper sx={{ p: 3 }}>
        <Typography>Oops an error occurred !!!!!</Typography>
        <Typography>
          {error?.error?.toString() ?? error?.toString()}{' '}
        </Typography>
      </Paper>
    </Container>
  )
}

export default PageError
