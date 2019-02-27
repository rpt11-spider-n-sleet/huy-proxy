const express = require('express');
const port = 8000;
const app = express();

app.use(express.static('public'));
app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;