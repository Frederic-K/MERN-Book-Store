import { useState, useEffect } from 'react'
// import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
// Services
import CheckInputValues from '../services/CheckInputValues/CheckInputValues'
// MUI
import {
  Container,
  Paper,
  TextField,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SendIcon from '@mui/icons-material/Send'
// Assets
import cimentDarkBckground from '../assets/cimentDarkWallpaper.jpg'

const MuiCreateBook = () => {
  //   const [title, setTitle] = useState('')
  //   const [author, setAuthor] = useState('')
  //   const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  // Validation data state
  const [errors, setErrors] = useState({})
  // Handle reset
  const [submitting, setSubmitting] = useState(false)

  // Input state
  const [bookInputs, setBookInputs] = useState({
    title: '',
    author: '',
    publishYear: '',
  })

  // Update input
  const handleChangeInput = (e) => {
    e.preventDefault()
    setBookInputs({
      ...bookInputs,
      [e.target.name]: e.target.value,
    })
  }

  // Launch datas checking
  const handelSubmitClick = (e) => {
    e.preventDefault()
    setErrors(CheckInputValues(bookInputs))
    setSubmitting(true)
  }

  // Validate datas
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      submitValidatedDatas()
    }
    // eslint-disable-next-line
  }, [errors])

  const submitValidatedDatas = () => {
    const data = {
      ...bookInputs,
    }
    console.log('dataAxios-1', data)
    setLoading(true)
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Book Created successfully', { variant: 'success' })
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        // alert('An error happened. Please Chack console')
        enqueueSnackbar('Error', { variant: 'error' })
        console.log(error)
      })
  }

  const handelRestartClick = () => {
    setBookInputs({
      ...bookInputs,
      title: '',
      author: '',
      publishYear: '',
    })
    setSubmitting(false)
    setErrors({})
  }

  //   const handleSaveBook = () => {
  //     const data = {
  //       ...bookInputs,
  //     }
  //     setLoading(true)
  //     axios
  //       .post('http://localhost:5555/books', data)
  //       .then(() => {
  //         setLoading(false)
  //         enqueueSnackbar('Book Created successfully', { variant: 'success' })
  //         navigate('/')
  //       })
  //       .catch((error) => {
  //         setLoading(false)
  //         // alert('An error happened. Please Chack console')
  //         enqueueSnackbar('Error', { variant: 'error' })
  //         console.log(error)
  //       })
  //   }
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
      {loading ? <Spinner /> : ''}
      <Paper
        elevation={6}
        component="form"
        className="basic-bg-radial"
        onSubmit={(e) => handelSubmitClick(e)}
        sx={{
          width: '100%',
          maxWidth: '310px',
          minHeight: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // animation: 'fadeIn 1.5s forwards',
        }}
      >
        <Typography
          variant="h4"
          className="text-radial-gradient-Text"
          sx={{ fontWeight: 700, mb: '25px' }}
        >
          Create a Book
        </Typography>
        <Box
          aria-label="Book inputs"
          component="section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            mb: '20px',
          }}
        >
          <TextField
            fullWidth={true}
            error={!!errors.title}
            aria-label="Book title"
            autoFocus={true}
            id={'title'}
            name={'title'}
            label={'Title'}
            helperText={errors.title ? errors.title : 'Choose a title'}
            value={bookInputs.title}
            onChange={(e) => handleChangeInput(e)}
          />
          <TextField
            fullWidth={true}
            error={!!errors.author}
            aria-label="Book author"
            // autoFocus={true}
            id={'author'}
            name={'author'}
            label={'Author'}
            helperText={errors.author ? errors.author : 'Choose an author'}
            value={bookInputs.author}
            onChange={(e) => handleChangeInput(e)}
          />
          <TextField
            fullWidth={true}
            type={'number'}
            // InputProps={{ inputProps: { min: 0 } }}
            error={!!errors.publishYear}
            aria-label="Publish year"
            id={'publishYear'}
            name={'publishYear'}
            label={'Publish year'}
            helperText={
              errors.publishYear
                ? errors.publishYear
                : 'Choose publish year > 0'
            }
            value={bookInputs.publishYear}
            onChange={(e) => handleChangeInput(e)}
          />
        </Box>
        <Stack
          component="section"
          direction="row"
          alignItems="center"
          spacing={5}
        >
          <Button
            variant="contained"
            type="submit"
            aria-label="Submit button"
            sx={{
              width: '100px',
              // height: '40px',
              ml: '10px',
              // color: 'white',
            }}
          >
            <SendIcon
              sx={{
                color: 'white',
                // '&:hover': { color: 'secondary.main' },
              }}
            />
          </Button>
          <Button
            variant="contained"
            aria-label="Restart button"
            onClick={() => {
              handelRestartClick()
            }}
          >
            <RestartAltIcon
              sx={{
                color: 'white',
                // '&:hover': { color: 'secondary.main' },
              }}
            />
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default MuiCreateBook
