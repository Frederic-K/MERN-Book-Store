import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
// import { Link } from 'react-router-dom'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
// Router
import { useNavigate } from 'react-router-dom'
// Components
import BooksTable from '../components/home/BooksTable'
import MuiBooksCard from '../components/home/MuiBooksCard'
//MUI
import { Container, IconButton, Box, Stack, Typography } from '@mui/material'
import ViewComfyAltIcon from '@mui/icons-material/ViewComfyAlt'
import ViewListIcon from '@mui/icons-material/ViewList'
import AddCircleIcon from '@mui/icons-material/AddCircle'
// Assets
import cimentDarkBckground from '../assets/cimentDarkWallpaper.jpg'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { homeViewSelector } from '../features/HomeView/homeViewSlice'
import { setHomeView, clearHomeView } from '../features/HomeView/homeViewSlice'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { homeView } = useSelector(homeViewSelector)
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  // const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
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
      <Box
        component="section"
        aria-label="Action barr"
        sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'flex-start',
            gap: '20px',
          }}
        >
          <Typography
            variant="h4"
            className="text-radial-gradient-Text"
            sx={{ fontWeight: 700 }}
          >
            Book List
          </Typography>
          <Stack direction="row" alignItems="center">
            <IconButton
              aria-label="List of books"
              size="large"
              sx={{
                color: 'primary.main',
                '&:hover': { color: 'secondary.main' },
              }}
              onClick={() => {
                dispatch(clearHomeView())
                dispatch(setHomeView('table'))
              }}
            >
              <ViewListIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="Cards of books"
              size="large"
              sx={{
                color: 'primary.main',
                '&:hover': { color: 'secondary.main' },
              }}
              onClick={() => {
                dispatch(clearHomeView())
                dispatch(setHomeView('cards'))
              }}
            >
              <ViewComfyAltIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            variant="h6"
            className="text-radial-gradient-Text"
            sx={{ fontWeight: 700 }}
          >
            Add a book
          </Typography>
          <IconButton
            // href="/books/create"
            aria-label="Add a book"
            size="large"
            sx={{
              color: 'primary.main',
              '&:hover': { color: 'secondary.main' },
            }}
            onClick={() => {
              navigate('/books/create')
            }}
          >
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>

      <div className="p-4">
        {/* <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div> */}
        {/* <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div> */}
        {loading ? (
          <Spinner />
        ) : homeView === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <MuiBooksCard books={books} />
        )}
      </div>
    </Container>
  )
}

export default Home
