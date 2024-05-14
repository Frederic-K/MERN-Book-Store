import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import MuiShowBook from './pages/MuiShowBook'
import CreateBooks from './pages/CreateBooks'
import MuiCreateBook from './pages/MuiCreateBook'
import EditBook from './pages/EditBook'
import MuiEditBook from './pages/MuiEditBook'
import DeleteBook from './pages/DeleteBook'
import MuiDeleteBook from './pages/MuiDeleteBook'
import PageError from './pages/PageError'
import RootLayout from './components/RootLayout'
// MUI
// import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from './features/ModeTheme/modeThemeSlice'
import originalTheme from './themes/Themes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books/create',
        //  element: <CreateBooks />,
        element: <MuiCreateBook />,
      },
      {
        path: '/books/details/:id',
        // element: <ShowBook />,
        element: <MuiShowBook />,
      },
      {
        path: '/books/edit/:id',
        // element: <EditBook />,
        element: <MuiEditBook />,
      },
      {
        path: '/books/delete/:id',
        // element: <DeleteBook />,
        element: <MuiDeleteBook />,
      },
    ],
  },
])

const App = () => {
  const { modeTheme } = useSelector(modeThemeSelector)
  const { theme } = originalTheme(modeTheme)
  console.log('mode', modeTheme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/books/create" element={<CreateBooks />} />
    //   <Route path="/books/details/:id" element={<ShowBook />} />
    //   <Route path="/books/edit/:id" element={<EditBook />} />
    //   <Route path="/books/delete/:id" element={<DeleteBook />} />
    //   {/* <Route path="*" element={} /> */}
    // </Routes>
  )
}

export default App
