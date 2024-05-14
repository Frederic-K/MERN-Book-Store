import { Box, Container, IconButton, Paper, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
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
      <Paper
        sx={{
          width: '100%',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Box component="section" aria-label="Erroe page section">
          <Typography>Oops an error occurred !!!!!</Typography>
          <Typography noWrap={true}>
            {error?.error?.toString() ?? error?.toString()}
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <IconButton href="/">
            <HomeIcon sx={{ color: 'primary.main', fontSize: '35px' }} />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  )
}

export default PageError
