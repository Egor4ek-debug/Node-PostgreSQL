
const Router = require('express');
const router = new Router();
const UserControler = require('../controller/products.controller');

router.post('/products', UserControler.createProducts);
router.get('/products/:id', UserControler.getOneProducts);
router.get('/products', UserControler.getAllProducts);
router.put('/products', UserControler.editPtoducts);
router.delete('/products/:id', UserControler.deleteProducts);


module.exports = router;
