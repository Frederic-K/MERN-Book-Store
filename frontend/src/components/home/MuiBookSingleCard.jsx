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
} from '@mui/material'
// Icons
import InfoIcon from '@mui/icons-material/Info'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteIcon from '@mui/icons-material/Delete'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { grey, red } from '@mui/material/colors'

const MuiBookSingleCard = ({ book }) => {
  // const [showModal, setShowModal] = useState(false)
  // console.log('bokkID', book._id)
  return (
    <Card
      elevation={4}
      sx={{
        background:
          // 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          'radial-gradient(circle, rgba(255, 239, 0, 0.5728991425671831) 0%, rgba(255, 145, 0, 0.5897058652562588) 95%)',
        ':hover': { boxShadow: 10 },
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
      <CardActions></CardActions>
    </Card>
  )
}

export default MuiBookSingleCard
