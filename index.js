const express = require('express');
const mysql = require('mysql2')
const bookRoute = require('./routes/book');
const authorRoute = require('./routes/author');
const dbConfig = require('./config/database')
const pool = mysql.createPool(dbConfig)

pool.on('error', (err) => {
  console.log(err)
})

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({
  extends: true
}))

// membuat parameter harus diawali : diawal
app.get('/contohparameter/:username/:jurusan/:kelas',(req, res) => {
     res.json(req.params)
     res.end()
})

app.get('/contohparam', (req, res) => {
     res.json(req.query)
}) 

app.get('/', (req, res) => {
  res.write('Hello World!');
  res.send()

  koneksi.query('SELECT * FROM books', (err, result) => {
    if(err){
      console.log('error')
    }else{
      
    }
  })
});

app.use('/book', bookRoute);
app.use('/author', authorRoute);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

