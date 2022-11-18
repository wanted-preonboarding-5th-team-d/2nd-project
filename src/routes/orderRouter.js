const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.get("/", orderController.getOrderList);
router.patch("/:orderId", orderController.updateOrderStatus);

module.exports = {
  router,
};
