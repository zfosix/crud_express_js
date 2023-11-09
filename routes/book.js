const express = require('express')
const router = express.Router()
const {
     getBooks,
     getBook,
     addBook,
     updateBook,
     deleteBook
} = require('../controllers/BookController')

// router untuk menampilkan data
router.get('/', getBooks)

// router untuk mengirim data
router.post('/', addBook)

// route untuk menampilkan data berdasarkan id buku
router.get('/:id', getBook)

// route untuk memperbaharui/update data berdasarkan id buku
router.put('/:id', updateBook)

// router untuk menghapus data berdasarkan id buku
router.delete('/:id', deleteBook)

// // route untuk menampilkan data
// router.get('/', (req, res) => {
//      res.write('GET book code')
//      res.end() 
// })

// // route untuk mengirim data
// router.post('/', (req, res) => {
//      res.write('POST book code')
//      res.end()
// })

// // route untuk memperbaharui/update data
// router.put('/', (req, res) => {
//      res.write('PUT book code')
//      res.end()
// })

// router.get('/:id', (req, res) => {
//      res.write('PUT book code')
//      res.end()
// })

// router.delete('/', (req, res) => {
//      res.write('DELETE book code')
//      res.end()
// })

module.exports = router