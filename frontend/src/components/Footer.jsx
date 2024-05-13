// Redux
// import { useSelector, useDispatch } from 'react-redux'
// import { modeThemeSelector } from '../../features/ModeTheme/modeThemeSlice'
// import {
//   addModeTheme,
//   clearModeTheme,
// } from '../../features/ModeTheme/modeThemeSlice'
// MUI
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
// Asset
import bannerBckground from '../assets/wallpaperflare.com_wallpaper-11-banner.jpg'
import LogoFK from '../assets/LogoFK-waterpx-red3-100px.png'
// Components
// import LiveClock from '../LiveClock/LiveClock'
// import LiveDate from '../LiveDate/LiveDate'

const Footer = () => {
  // const dispatch = useDispatch()
  // const { modeTheme } = useSelector(modeThemeSelector)

  // const ToggleModeTheme = () => {
  //   dispatch(clearModeTheme())
  //   dispatch(addModeTheme(modeTheme === 'light' ? 'dark' : 'light'))
  //   // console.log('dodo')
  // }

  return (
    <Box
      component="footer"
      // className="footer"
      position="fixed"
      // position="static"
      sx={{
        width: '100%',
        height: '45px',
        bottom: 0,
        display: 'flex',
        // justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        px: '15px',
        backgroundImage: `url(${bannerBckground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Avatar
        alt="Logo Frédéric KREUDER"
        src={LogoFK}
        sx={{ width: 30, height: 30 }}
      />
      <Typography
        className="text-radial-gradient-Text"
        sx={{ fontWeight: 700 }}
      >
        Book-Store-MERN-Stack
      </Typography>
      {/* <LiveDate />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography color="primary">{modeTheme} mode</Typography>
        <IconButton
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
      <LiveClock /> */}
    </Box>
  )
}

export default Footer
