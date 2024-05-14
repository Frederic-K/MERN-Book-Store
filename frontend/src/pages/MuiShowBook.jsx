import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
//MUI
import {
  Container,
  Paper,
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
// Assets
import cimentDarkBckground from '../assets/cimentDarkWallpaper.jpg'

const MuiShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    navigate('/')
  }

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
      {loading ? (
        <Spinner />
      ) : (
        <Paper
          component="section"
          aria-label="Book infos section"
          className="basic-bg-radial"
          sx={{
            width: '100%',
            maxWidth: '310px',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            // animation: 'fadeIn 1.5s forwards',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', top: '5px', right: '5px' }}
          >
            <HighlightOffIcon />
          </IconButton>
          <Typography
            variant="h5"
            className="text-radial-gradient-Text"
            sx={{ fontWeight: 700 }}
          >
            Book Show
          </Typography>
          <Divider />
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" className="text-radial-gradient-Text">
              ID :
            </Typography>
            <Typography>{book._id}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" className="text-radial-gradient-Text">
              Title :
            </Typography>
            <Typography>{book.title}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" className="text-radial-gradient-Text">
              Author :{' '}
            </Typography>
            <Typography>{book.author}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" className="text-radial-gradient-Text">
              Publish Year :{' '}
            </Typography>
            <Typography>{book.publishYear}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" className="text-radial-gradient-Text">
              Create Time :{' '}
            </Typography>
            <Typography>{new Date(book.createdAt).toString()}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" className="text-radial-gradient-Text">
              Last Update Time :
            </Typography>
            <Typography>{new Date(book.updatedAt).toString()}</Typography>
          </Box>
        </Paper>
      )}
    </Container>
  )
}

export default MuiShowBook
