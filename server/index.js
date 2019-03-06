const express = require('express');
const port = 4003;
const app = express();

app.use(express.static('./public'));

app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;