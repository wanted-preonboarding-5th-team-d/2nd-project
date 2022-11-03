const express = require("express");
const router = express.Router();
const couponRouter = require("./couponRouter");
const couponDownloadRouter = require("./couponDownloadRouter");
const orderRouter = require("./orderRouter");

router.use("/coupon", couponRouter.router);
router.use("/download", couponDownloadRouter.router);
router.use("/order/admin", orderRouter.router);

module.exports = router;
