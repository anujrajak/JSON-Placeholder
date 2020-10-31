/**
 *
 * JSON Placeholder...
 *
 */
const lib = require('./module');
const express = require('express');

const app = express();

let port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    const res = lib.getResponse(request.url);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(res, null, 4));
});

app.listen(port, () => {
    console.log('\nlorem ipsum\n ');
});