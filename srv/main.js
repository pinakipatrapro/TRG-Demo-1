
const express = require('express')
const app = express()
const port = 4004

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
    res.send(
        [{
            "id": 1,
            "first_name": "Branden",
            "last_name": "Drews",
            "email": "bdrews0@theatlantic.com",
            "gender": "Male",
            "ip_address": "200.92.26.247"
          }, {
            "id": 2,
            "first_name": "Peterus",
            "last_name": "Coupman",
            "email": "pcoupman1@addthis.com",
            "gender": "Male",
            "ip_address": "49.22.188.21"
          }, {
            "id": 3,
            "first_name": "Bevvy",
            "last_name": "Dunphie",
            "email": "bdunphie2@ifeng.com",
            "gender": "Female",
            "ip_address": "190.82.103.123"
          }]
    )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})