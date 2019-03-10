const express = require('express');
const routes = require('./routes/index');
const productRoute = require('./routes/product');
const cors = require('cors');

let app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use('/', routes);

app.use('/product', productRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});