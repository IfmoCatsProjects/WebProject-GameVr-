const express = require('express');
const app = express();
const port = 3333;

app.use(express.static('build'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
