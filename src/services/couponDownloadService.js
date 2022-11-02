const downloadCouponDao = require("../models/couponDownloadDao");
const couponCode = require("../utils/couponCode");
const couponExist = require("../utils/couponExist");

const getCouponInfo = async(coupon_id)=> {

    const couponInfo = await downloadCouponDao.getCouponInfo(coupon_id);

    return couponInfo;
}

const download = async(coupon_id) => {

    await couponExist.checkCoupon(coupon_id);

    await couponCode.makeCode(coupon_id);

    return true;

}

module.exports = {

    getCouponInfo,
    download
}