const environment = process.env.NODE_ENV || 'development'
const express = require('express')
const app = express();
const port = 3000

app.use(express.json())

app.listen(3000, () => {
  console.log(`App is running 👻 on port ${port}`)
})