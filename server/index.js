const express = require('express');
// const port = 4003 || process.env.PORT;
const app = express();

app.use(express.static('./public/index.html'));
app.use('/:id', express.static('./public/index.html'));

// app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;