// MUI
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { red, grey } from '@mui/material/colors'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const MuiBookModal = ({ book, showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby={`book-preview-${book.title}`}
        aria-describedby="book-preview"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
            borderRadius: '25px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              sx={{
                color: 'white',
                bgcolor: red[300],
                py: '5px',
                px: '10px',
                borderRadius: '10px',
                alignSelf: 'center',
              }}
            >
              {book.publishYear}
            </Typography>
            <IconButton onClick={handleClose} aria-label="close">
              <HighlightOffIcon />
            </IconButton>
          </Box>

          <Box sx={{ my: '5px' }}>
            <Typography sx={{ color: grey[500] }}>{book._id}</Typography>
          </Box>

          <Box component="section" sx={{ my: '10px' }}>
            <Box
              sx={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                my: '5px',
              }}
            >
              <LibraryBooksIcon sx={{ color: red[300] }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {book.title}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                my: '5px',
              }}
            >
              <AccountCircleIcon sx={{ color: red[300] }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {book.author}
              </Typography>
            </Box>
          </Box>
          <Typography
            id={`book-preview-${book.title}`}
            // variant="h6"
            // component="h2"
            sx={{ fontSize: '20px' }}
          >
            Anything You want to show
          </Typography>
          <Typography id="modal-modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
            voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
            necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
            nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
            dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
            vitae voluptate sequi repellat!
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default MuiBookModal
