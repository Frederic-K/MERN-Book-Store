import { createTheme } from '@mui/material/styles'

export default function Themes(modeTheme) {
  const mode = modeTheme
  const originalTheme = createTheme({
    palette: {
      // let mode to be able to call default dark mode if needed
      mode,
      primary: {
        main: '#ff9800',
      },
      secondary: {
        main: '#ffc400',
      },
    },
  })

  return {
    theme: originalTheme,
  }
}
