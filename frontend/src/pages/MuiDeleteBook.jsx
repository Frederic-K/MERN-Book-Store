import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
// MUI
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Divider,
  Container,
  Button,
  Stack,
} from '@mui/material'
// Icons
import InfoIcon from '@mui/icons-material/Info'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteIcon from '@mui/icons-material/Delete'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { blue, green, grey, red, yellow } from '@mui/material/colors'
// Assets
import cimentDarkBckground from '../assets/cimentDarkWallpaper.jpg'

const MuiDeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  console.log('id', id)
  const { enqueueSnackbar } = useSnackbar()
  //   const [title, setTitle] = useState('')
  //   const [author, setAuthor] = useState('')
  //   const [publishYear, setPublishYear] = useState('')
  const [book, setBook] = useState({})

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log('resp', response)
        // setAuthor(response.data.author)
        // setPublishYear(response.data.publishYear)
        // setTitle(response.data.title)
        setBook(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  console.log('book', book)

  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' })
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        // alert('An error happened. Please Chack console')
        enqueueSnackbar('Error', { variant: 'error' })
        console.log(error)
      })
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
      {loading ? <Spinner /> : ''}
      <Card
        elevation={4}
        className="basic-bg-radial"
        sx={{
          width: '100%',
          maxWidth: '310px',
          minHeight: '370px',
          //   ':hover': {
          //     boxShadow: '0px 0px 10px 5px #FFCB91',
          //     border: '1px solid black',
          //   },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '10px',
            pb: '0px',
          }}
        >
          <Typography sx={{ color: grey[500] }}>{book._id}</Typography>
          <Typography
            sx={{
              color: 'white',
              bgcolor: red[300],
              py: '5px',
              px: '10px',
              borderRadius: '10px',
            }}
          >
            {book.publishYear}
          </Typography>
        </CardContent>

        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <LibraryBooksIcon sx={{ color: red[300] }} />
            <Typography variant="h6">{book.title}</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ color: red[300] }} />
            <Typography variant="h6">{book.author}</Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>
            Are You Sure You want to delete this book ?
          </Typography>
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <Button
              sx={{ width: '290px', bgcolor: red[700] }}
              onClick={() => {
                handleDeleteBook()
              }}
            >
              <Typography sx={{ color: 'white' }}>DELETE</Typography>
            </Button>
            <Button
              sx={{ width: '290px', bgcolor: green[500] }}
              onClick={() => {
                navigate('/')
              }}
            >
              <Typography sx={{ color: 'white' }}>Cancel</Typography>
            </Button>
          </Box>
        </CardActions>
      </Card>
      {/* <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? <Spinner /> : ''}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are You Sure You want to delete this book?
          </h3>

          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
        </div>
      </div> */}
    </Container>
  )
}

export default MuiDeleteBook
