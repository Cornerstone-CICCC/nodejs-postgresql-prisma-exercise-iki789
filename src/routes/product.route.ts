import { Router } from "express";
import productController from "../controllers/product.controller";

const router = Router();

router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProduct);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export default router;
