const express = require("express")
const router = express.Router();

const couponController = require("../controllers/couponController");

router.post("/type", couponController.createCouponType);
router.delete("/type", couponController.deleteCouponType);
router.patch("/type", couponController.editCouponType);
router.get("/type", couponController.getCouponType);


module.exports = {
    router
}