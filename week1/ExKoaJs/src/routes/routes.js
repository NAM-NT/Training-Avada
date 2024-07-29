import Router from "koa-router";
import { GetProduct, GetProducts, AddProduct, UpdateProduct, DeleteProduct } from "../handlers/products/productHandlers.js";
import { ProductInputMiddleware } from "../middleware/productInputMiddleware.js";
const routes = new Router({
    prefix: '/api'
});

routes.get('/products', GetProducts)
routes.post('/products',ProductInputMiddleware, AddProduct)
routes.put('/product/:id',ProductInputMiddleware,UpdateProduct)
routes.delete('/product/:id',DeleteProduct)
routes.get('/product/:id',GetProduct)

export {routes}