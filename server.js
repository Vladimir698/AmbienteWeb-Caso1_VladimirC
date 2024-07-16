const express = require('express');
const app = express();
const path = require('path');

const PORT = 85;
const PUBLIC = path.join(__dirname,'publicfiles'); 
app.use(express.static(PUBLIC));
app.use(express.json());


app.listen(PORT, () => {
    console.info(`Server is running at port ${PORT}`);
});
