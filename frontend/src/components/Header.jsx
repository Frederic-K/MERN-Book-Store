// Router
import { useNavigate } from 'react-router-dom'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { modeThemeSelector } from '../features/ModeTheme/modeThemeSlice'
import {
  addModeTheme,
  clearModeTheme,
} from '../features/ModeTheme/modeThemeSlice'
// MUI
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Box, IconButton, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ContactPageIcon from '@mui/icons-material/ContactPage'
// Asset
import bannerBckground from '../assets/wallpaperflare.com_wallpaper-11-banner.jpg'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { modeTheme } = useSelector(modeThemeSelector)

  const ToggleModeTheme = () => {
    dispatch(clearModeTheme())
    dispatch(addModeTheme(modeTheme === 'light' ? 'dark' : 'light'))
    // console.log('dodo')
  }

  return (
    <Box
      component="header"
      position="fixed"
      // position="static"
      sx={{
        width: '100%',
        height: '45px',
        px: '20px',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundImage: `url(${bannerBckground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <IconButton
        // href="/"
        aria-label="Go Homepage"
        sx={{
          color: 'primary.main',
          '&:hover': { color: 'secondary.main' },
        }}
        onClick={() => {
          navigate('/')
        }}
      >
        <HomeIcon />
      </IconButton>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography color="primary">{modeTheme} mode</Typography>
        <IconButton
          aria-label="Dark mode toggle"
          sx={{ ml: 1 }}
          onClick={() => {
            ToggleModeTheme()
          }}
        >
          {modeTheme === 'dark' ? (
            <Brightness4Icon color="primary" />
          ) : (
            <Brightness7Icon color="primary" />
          )}
        </IconButton>
      </Box>
      {/* <Typography
        className="text-radial-gradient-Text"
        variant="h5"
        sx={{ fontWeight: 700 }}
      >
        Book List
      </Typography> */}
      {/* <Button
        // variant="contained"
        aria-label="Go Homepage"
        onClick={() => {
          navigate('/')
        }}
        sx={{
          '&:hover': { color: 'secondary.main' },
        }}
      >
        <HomeIcon />
      </Button>
      <Button
        // variant="contained"
        aria-label="Contact"
        onClick={() => {
          navigate('/contact')
        }}
        sx={{
          '&:hover': { color: 'secondary.main' },
        }}
      >
        <ContactPageIcon />
      </Button> */}
    </Box>
  )
}

export default Header
