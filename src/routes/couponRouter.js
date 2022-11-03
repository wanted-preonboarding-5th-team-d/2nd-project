const express = require("express")
const router = express.Router();

const couponController = require("../controllers/couponController");

router.post("/type", couponController.createCouponType);
router.delete("/type", couponController.deleteCouponType);
router.patch("/type", couponController.editCouponType);
router.get("/type", couponController.getCouponType);

router.post("/discount", couponController.createCouponDiscount);
router.patch("/discount", couponController.editCouponDiscount);
router.get("/discount", couponController.getCouponDiscount);
router.delete("/discount", couponController.deleteCouponDiscount);

router.post("/download",couponController.download);

module.exports = {
    router
}