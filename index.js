const express = require('express')
const app  = express()

app.use(express.json({limit: '30mb', extended: true}));
app.use(require('cors')())

const jsonData = require('./modified_words.json')

const Word = require('./modules/Word'); 



app.get('/', (req, res) => res.send({succces: true, message: 'Server working', v: '1.0.0'}))
app.use('/api/words', )


const port = process.env.PORT || 8080

require('./db')()
app.listen(port, () => console.warn(`\x1b[34m 
    http://localhost:${port}/api
\x1b[0m`))

module.exports = app