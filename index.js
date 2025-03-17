const express = require('express');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
