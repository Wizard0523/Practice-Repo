const app = require('./server')

app.listen(3001, (req, res) => {
    console.log('hello on http://localhost:3001')
})
