const app = require('./index');
const port = 8080 || process.env.PORT;


app.listen(port, "0.0.0.0", () => console.log(`Listening on port: ${port}`));