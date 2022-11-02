const express = require("express");
const router = express.Router();

const couponRouter = require("./couponRouter")
const couponDownloadRouter = require("./couponDownloadRouter");
router.use("/coupon", couponRouter.router)
router.use("/download",couponDownloadRouter.router);

module.exports = router;