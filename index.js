/**
 *
 * JSON Placeholder...
 *
 */
const lib = require('./module');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    const res = lib.getResponse(request.url);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(res, null, 4));
});

app.listen('1212', () => {
    console.log('\nlorem ipsum\n');
});