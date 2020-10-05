const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('<h2> Chico </h2>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/* 

Explore post, get, update request (update only read about)
Try to use moment npm module to ask for the current time.
Node fs module 

Name input route for express.
names.json
*/
