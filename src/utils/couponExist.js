const Error = require("../middlewares/errorConstructor");
const couponDao = require("../models/couponDao");

const checkCoupon = async(coupon_id) => {

    const couponExist = await couponDao.getCouponInfo(coupon_id);

    if( couponExist.length > 0 ) {

        return true;

    }else {
        
       throw new Error("해당 쿠폰은 존재하지 않는 쿠폰입니다.",400);
    }
}

module.exports = {

    checkCoupon
}