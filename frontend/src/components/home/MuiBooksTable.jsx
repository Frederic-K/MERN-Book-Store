// Router
import { useNavigate } from 'react-router-dom'
// MUI
import { Box, Stack, IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
// Icons
import InfoIcon from '@mui/icons-material/Info'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteIcon from '@mui/icons-material/Delete'
import { green } from '@mui/material/colors'

export default function MuiBooksTable({ books }) {
  //   console.log(books)
  const navigate = useNavigate()
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },

    // { field: '_id', headerName: 'ID', width: 70 },
    // { field: 'firstName', headerName: 'First name', width: 130 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      headerClassName: 'grid-header-linear-gradient',
      // headerClassName: 'super-app-theme--header',
    },
    // { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'author',
      headerName: 'Author',
      width: 200,
      headerClassName: 'grid-header-linear-gradient',
      // headerClassName: 'super-app-theme--header',
    },
    {
      field: 'publishYear',
      headerName: 'Year',
      width: 100,
      headerClassName: 'grid-header-linear-gradient',
      // headerClassName: 'super-app-theme--header',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      disableColumnMenu: true,
      sortable: false,
      width: 200,
      headerAlign: 'center',
      headerClassName: 'grid-header-linear-gradient',
      // headerClassName: 'MuiDataGrid-columnHeaderTitle',
      // headerClassName: 'super-app-theme--header',
      cellClassName: 'grid-theme--cell',
      disableClickEventBubbling: true,
      renderCell: (params) => {
        // const onClick = (e) => {
        //   const currentRow = params.row
        //   return alert(JSON.stringify(currentRow, null, 4))
        // }

        return (
          <Stack direction="row" spacing={1}>
            <IconButton
              variant="outlined"
              size="small"
              sx={{
                color: green[500],
              }}
              onClick={() => {
                navigate(`/books/details/${params.row._id}`)
              }}
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              variant="outlined"
              color="warning"
              size="small"
              onClick={() => {
                navigate(`/books/edit/${params.row._id}`)
              }}
            >
              <EditNoteIcon />
            </IconButton>
            <IconButton
              variant="outlined"
              color="error"
              size="small"
              onClick={() => {
                navigate(`/books/delete/${params.row._id}`)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        )
      },
    },
  ]

  const rows = books
  // console.log('rows', rows)

  return (
    <Box style={{ height: 371, width: '100%' }}>
      <DataGrid
        disableColumnResize={true}
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        autoPageSize
        // initialState={{
        //   pagination: {
        //     paginationModel: { pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{
          bgcolor: 'background.paper',
          //   '.MuiDataGrid-columnHeaderTitle': {
          //     fontWeight: '200 !important',
          //     fontSize: 'large',
          //   },
          '& .grid-theme--cell': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
    </Box>
  )
}
