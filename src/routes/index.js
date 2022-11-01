const express = require("express");
const router = express.Router();
const couponRouter = require("./couponRouter");

router.use("/coupon", couponRouter.router)

module.exports = router;