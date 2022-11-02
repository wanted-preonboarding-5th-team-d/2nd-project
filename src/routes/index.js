const express = require("express");
const router = express.Router();
const testRouter = require("./testRouter")
const downloadCouponRouter = require("./couponDownloadRouter");

router.use("/test", testRouter.router)

router.use("/coupon",downloadCouponRouter.router);

module.exports = router;