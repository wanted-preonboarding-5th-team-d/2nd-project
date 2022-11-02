const express = require("express")
const router = express.Router();

const downloadCouponController = require("../controllers/couponDownloadController");

router.post("/coupon",downloadCouponController.download)

module.exports = {
    router
}