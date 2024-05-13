// React
import { useState } from 'react'
// Router
import { Link } from 'react-router-dom'
// Card
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Divider,
  IconButton,
} from '@mui/material'
// Icons
import InfoIcon from '@mui/icons-material/Info'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteIcon from '@mui/icons-material/Delete'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { blue, green, grey, red, yellow } from '@mui/material/colors'
// Components
import MuiBookModal from './MuiBookModal'

const MuiBookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card
        elevation={4}
        className="basic-bg-radial"
        sx={{
          ':hover': {
            boxShadow: '0px 0px 10px 5px #FFCB91',
            border: '1px solid black',
          },
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
            <LibraryBooksIcon sx={{ color: red[300] }} />{' '}
            <Typography variant="h7">{book.title}</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ color: red[300] }} />{' '}
            <Typography variant="h7">{book.author}</Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <IconButton onClick={() => setShowModal(true)} aria-label="preview">
            <VisibilityIcon sx={{ color: blue[900] }} />
          </IconButton>
          <IconButton aria-label="info" href={`/books/details/${book._id}`}>
            <InfoIcon sx={{ color: green[900] }} />
          </IconButton>
          <IconButton aria-label="edit" href={`/books/edit/${book._id}`}>
            <EditNoteIcon sx={{ color: yellow[900] }} />
          </IconButton>
          <IconButton aria-label="delete" href={`/books/delete/${book._id}`}>
            <DeleteIcon sx={{ color: red[900] }} />
          </IconButton>
        </CardActions>
      </Card>
      <Box>
        {showModal && (
          <MuiBookModal
            book={book}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </Box>
    </>
  )
}

export default MuiBookSingleCard
