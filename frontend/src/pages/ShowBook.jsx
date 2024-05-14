import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
//MUI
import { Container, Paper, Box, Typography } from '@mui/material'
// Assets
import cimentDarkBckground from '../assets/cimentDarkWallpaper.jpg'

const ShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

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
      {/* {loading ? (
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
          }}
        >
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
      )} */}
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default ShowBook
