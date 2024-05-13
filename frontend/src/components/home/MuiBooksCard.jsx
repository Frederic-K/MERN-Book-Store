import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import BookSingleCard from './BookSingleCard'
import MuiBookSingleCard from './MuiBookSingleCard'
import { Box, Grid } from '@mui/material'

const BooksCard = ({ books }) => {
  return (
    <Box>
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={2}
      >
        {/* // <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
        {books.map((book, index) => (
          // <BookSingleCard key={book._id} book={book} />
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <MuiBookSingleCard key={book._id} book={book} />
          </Grid>
        ))}
        {/* </div> */}
      </Grid>
    </Box>
  )
}

export default BooksCard
