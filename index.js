const express = require('express')
const app  = express()


app.use(express.json({limit: '30mb', extended: true}));
app.use(require('cors')())

const jsonData = require('./modified_words.json')

const Word = require('./modules/Word'); 



app.get('/api/v', (req, res) => res.send({succces: true, message: 'Server working', v: '1.0.0'}))
const Words =  require('../modules/Word')

api.get('/api', async(req, res) => {
    try {
        const words = await Words.find({        })
        res.send(words)
    } catch (e) {
        res.status(500).send({message: 'Unexpected server error'})
    }
})

app.get('/api/due', async(req, res) => {
  try {
    const words = await Words.find({
      lastSeen: { $lt: new Date() }
    }) // filter words which lastSeen < Date.now()
    res.send(words)
  } catch (e) {
      res.status(500).send({message: 'Unexpected server error'})
  }
})

const intervlalMs = [
  1000 * 90,
  1000 * 60 * 60 * 2,
  1000 * 60 * 60 * 12,
  1000 * 60 * 60 * 24
] 
app.post('/api/update-card', async (req, res) => {
    const { wordId, success } = req.body;
    
    try {
        // Find the word by wordId
        const word = await Words.findOne({ wordId });

        if (!word) {
            return res.status(404).send({ message: 'Word not found' });
        }

        // Increment stage if success is true
        if (success) {
            word.reviewDate = new Date(Date.now() + intervlalMs[words.stage])
            word.stage = word.stage  + 1; // Initialize to 0 if stage is null
          } else {
            word.stage = 1; // Initialize to 0 if stage is null
            word.reviewDate = new Date(Date.now() + intervlalMs[0])
        }

        // Save the updated word
        await word.save();

        res.status(200).send({ message: 'Word updated successfully', word });
    } catch (e) {
        res.status(500).send({ message: 'Unexpected server error' });
    }
});


const port = process.env.PORT || 8080

require('./db')()
app.listen(port, () => console.warn(`\x1b[34m 
    http://localhost:${port}/api
\x1b[0m`))

module.exports = app
