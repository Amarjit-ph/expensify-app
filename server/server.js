const path = require('path');
const express = require('express');

const app = express();
const PublicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;

app.use(express.static(PublicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(PublicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('\n==================');
    console.log("REACT APPLICATION");
    console.log('PORT NO: ', PORT);
    console.log('SERVER RUNNING...');
    console.log('==================');
});