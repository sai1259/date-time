const express = require('express')
const {addDays} = require('date-fns')
const app = express()

app.get('/', (request, response) => {
  let date = new Date()
  const result =
    (new Date(date.getDate(), date.getMonth() + 1, date.getFullYear()), 100)
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})

app.listen(5000)

module.exports = app
