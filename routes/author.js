const express = require('express')
const router = express.Router()
const {
     getAuthors,
     getAuthor,
     addAuthor,
     updateAuthor,
     deleteAuthor

} = require('../controllers/AuthorController')

// router untuk menampilkan data
router.get('/',getAuthors)

// router untuk mengirim data
router.post('/',addAuthor)

// route untuk menampilkan data berdasarkan id buku
router.get('/:id',getAuthor)

// route untuk memperbaharui/update data berdasarkan id buku
router.put('/:id', updateAuthor)

// route untuk menghapus data buku
router.delete('/:id', deleteAuthor)

module.exports = router