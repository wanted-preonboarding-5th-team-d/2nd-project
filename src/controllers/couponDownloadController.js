const downloadCouponService = require("../services/couponDownloadService");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const util = require("../lib/util");
/**
 *  @사용자_쿠폰다운로드
 *  @route POST /coupon/download
 *  @access public
 *  @err
 */

const download = async(req,res) => {

    const {coupon_id} = req.body;
    
    await downloadCouponService.download(coupon_id);

    res.status(statusCode.CREATED).send(
        util.success(statusCode.CREATED, responseMessage.COUPON_DOWNLOAD_SUCCESS)
    );
}

module.exports = {
    download
}