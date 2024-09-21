// A simple Express web server to host anything in the "public" folder.
// Hosting happens on localhost port 3000.

const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000);