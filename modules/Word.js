const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    wordId: {
        type: Number,
        required: true,
        unique: true
    },
    word: String,
    type: String,
    level: {
        type: String,
        required: true,
        enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] // Adjust as needed
    },
    translations: {
        type: String,
        required: true
    },
    stage: {
        type: Number,
        default: null
    },
    reviewDate: {
        type: Date,
        default: null
    },
    lastSeen: {
        type: Date,
        default: null
    }
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;