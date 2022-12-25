const express = require('express');
const { APP_PORT } = require('./config');



const app = express();



app.listen(APP_PORT, () => { console.log(`Your server is running on ${APP_PORT}.`) });