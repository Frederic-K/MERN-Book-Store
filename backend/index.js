import express, { request, response } from 'express'
import mongoose from 'mongoose'
import { PORT, mongoDBURL } from './config.js'
import { Book } from './models/bookModel.js'
import booksRoutes from './routes/booksRoute.js'
import cors from 'cors'

const app = express()
// Middleware for parsing request body
app.use(express.json())
// Middleware to handle CORS Policy
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// )
app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send('Welcome to MERN STACK tutorial')
})

app.use('/books', booksRoutes)

// // app.listen(PORT, () => {
// //   console.log(`App is listening to port : ${PORT}`)
// // })

// // Route for Save a new Book
// app.post('/books', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: title, author, publishYear',
//       })
//     }
//     const newBook = {
//       title: request.body.title,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//     }

//     const book = await Book.create(newBook)

//     return response.status(201).send(book)
//   } catch (error) {
//     console.log(error.message)
//     response.status(500).send({ message: error.message })
//   }
// })

// // Route for Get all Books from DB
// app.get('/books', async (request, response) => {
//   try {
//     const books = await Book.find({})

//     return response.status(200).json({
//       count: books.length,
//       data: books,
//     })
//   } catch (error) {
//     console.log(error.message)
//     response.status(500).send({ message: error.message })
//   }
// })

// // Route for Get One Book from DB by id
// app.get('/books/:id', async (request, response) => {
//   try {
//     const { id } = request.params
//     const book = await Book.findById(id)

//     return response.status(200).json(book)
//   } catch (error) {
//     console.log(error.message)
//     response.status(500).send({ message: error.message })
//   }
// })

// // Route for Update a Book
// app.put('/books/:id', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: title, author, publishYear',
//       })
//     }

//     const { id } = request.params
//     const result = await Book.findByIdAndUpdate(id, request.body)

//     if (!result) {
//       return response.status(404).json({ message: 'Book not found' })
//     }

//     return response
//       .status(200)
//       .send({ message: 'Book update successfully !!!' })
//   } catch (error) {
//     console.log(error.message)
//     response.status(500).send({ message: error.message })
//   }
// })

// // Route for Delete a Book
// app.delete('/books/:id', async (request, response) => {
//   try {
//     const { id } = request.params
//     const result = await Book.findByIdAndDelete(id)

//     if (!result) {
//       return response.status(404).json({ message: 'Book not found' })
//     }

//     return response
//       .status(200)
//       .send({ message: 'Book deleted successfully !!!' })
//   } catch (error) {
//     console.log(error.message)
//     response.status(500).send({ message: error.message })
//   }
// })

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
