const fs = require('fs');

// Read the words.json file
fs.readFile('./words.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);
        
        // Modify the data as needed
        const modifiedData = jsonData.result.map(item => ({
            wordId: item.word.id,
            word: item.word.word,
            type: item.word.type,
            level: item.word.level,
            translations: item.word.translations.join(', '),
            stage: 1,
            reviewDate: null,
            lastSeen: null
        }));

        // Write the modified data to modified_words.json
        fs.writeFile('modified_words.json', JSON.stringify(modifiedData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Modified data saved to modified_words.json');
            }
        });

    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});