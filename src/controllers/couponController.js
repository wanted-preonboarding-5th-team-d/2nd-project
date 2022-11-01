const couponService = require("../services/couponService");
const util = require("../lib/util");
const statusCode = require("../constants/statusCode");
const responseMessage = require("../constants/responseMessage");

/**
 *  @쿠폰_할인타입생성
 *  @route POST coupon/type
 *  @access public
 *  @err
 */
const createCouponType = async (req, res) => {
    const { type } = req.body
    if( type === undefined ) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.EMPTY_TYPE,
            )
        );
    }
    try{
        await couponService.createCouponType(type)
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, responseMessage.CREATE_TYPE_SUCCESS, {
                type: type,
            })
        );
    } catch(error) {
        console.log(error.message)
        if(error.message === "ALREADY_EXIST_TYPE") {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.ALREADY_EXIST_TYPE,
            )
        );
        }
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
            )
        );
    }
}

/**
 *  @쿠폰_할인타입삭제
 *  @route DELETE coupon/type
 *  @access public
 *  @err
 */
const deleteCouponType = async (req, res) => {
    const { type } = req.body
        if( type === undefined ) {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.EMPTY_TYPE,
            )
        );
    }

    try{
        await couponService.deleteCouponType(type)
        return res.status(statusCode.NO_CONTENT).send(
            util.success(statusCode.NO_CONTENT, responseMessage.DELETE_TYPE_SUCCESS, {
                type: type,
        }))
    } catch(error) {
        if(error.message === "NOT_EXIST_TYPE") {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NOT_EXIST_TYPE,
            )
        );
        }
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
            )
        );
    }
}

/**
 *  @쿠폰_할인타입수정
 *  @route PATCH coupon/type
 *  @access public
 *  @err
 */
const editCouponType = async (req, res) => {
    const { type, editType } = req.body
    if( type === undefined || editType === undefined) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.EMPTY_TYPE,
        )
    );
    }
    try{
        await couponService.editCouponType(type, editType)
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, responseMessage.EDIT_TYPE_SUCCESS, {
                before: type,
                after: editType
            })
        );
    } catch(error) {
        if(error.message === "NOT_EXIST_TYPE") {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NOT_EXIST_TYPE,
                )
            );
        }
        if(error.message === "DISCOUNT_ALREADY_EXIST") {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NOT_EXIST_TYPE,
                responseMessage.DISCOUNT_ALREADY_EXIST,
            )
        );
        }
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
                )
            );
        }
    }

/**
 *  @쿠폰_할인타입목록
 *  @route GET coupon/type
 *  @access public
 *  @err
 */
const getCouponType = async (req, res) => {
    try{
        const list = await couponService.getCouponType()
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, responseMessage.SUCCESS, {
                list: list
            })
        );
    } catch(error) {
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
            )
        );
    }
}

/**
 *  @쿠폰_할인종류수정
 *  @route PATCH coupon/discount
 *  @access public
 *  @err
 */
const editCouponDiscount = async (req, res) => {
    const { type, beforeDiscount, afterDiscount } = req.body;
    if( type === undefined || beforeDiscount === undefined || afterDiscount === undefined) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.EMPTY,
        )
    );
    }
    try{
        await couponService.editCouponDiscount(type, beforeDiscount, afterDiscount)
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, responseMessage.EDIT_DISCOUNT_SUCCESS, {
                type: type,
                before: beforeDiscount,
                after: afterDiscount
            })
        );
    } catch(error) {
        console.log(error.message)
        if(error.message === "NOT_EXIST_DISCOUNT") {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NOT_EXIST_DISCOUNT,
            )
        );
        }
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
            )
        );
    }
}

/**
 *  @쿠폰_할인종류조회
 *  @route GET coupon/discount
 *  @access public
 *  @err
 */
const getCouponDiscount = async (req, res) => {
    try{
        const list = await couponService.getCouponDiscount()
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, responseMessage.SUCCESS, {
                list: list
            })
        );
    } catch(error) {
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
            )
        );
    }
}


/**
 *  @쿠폰_할인종류삭제
 *  @route DELETE coupon/discount
 *  @access public
 *  @err
 */
const deleteCouponDiscount = async (req, res) => {
    const { type, discount } = req.body;
    try{
        const list = await couponService.deleteCouponDiscount(type, discount)
        return res.status(statusCode.NO_CONTENT).send(
            util.success(statusCode.NO_CONTENT, responseMessage.SUCCESS, {
                list: list
            })
        );
    } catch(error) {
        console.log(error.message)
        if(error.message === "NOT_EXIST_DISCOUNT") {
            return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.NOT_EXIST_DISCOUNT,
            )
        );
        }
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                responseMessage.INTERNAL_SERVER_ERROR
            )
        );
    }
}

/**
 *  @쿠폰_할인종류생성
 *  @route POST coupon/discount
 *  @access public
 *  @err
 */
const createCouponDiscount = async (req, res) => {
    const { type, discount } = req.body
    if( type === undefined || discount === undefined ) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.EMPTY_TYPE,
        )
    );
    }
    if( (type == "price_won" && discount >= 10000) || (type == "price_daller" && discount >= 10)) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.OVER_PRICE,
        )
    );
    }
    try{
        await couponService.createCouponDiscount(type, discount)
        return res.status(statusCode.OK).send(
            util.success(statusCode.OK, responseMessage.CREATE_TYPE_SUCCESS, {
                type: type,
            })
        );
    } catch(error) {
    if(error.message === "DISCOUNT_ALREADY_EXIST") {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.ALREADY_EXIST_DISCOUNT,
        )
    );
    }
    return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
            util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
        )
    );
}
}

/**
 *  @사용자_쿠폰다운로드
 *  @route POST /coupon/download
 *  @access public
 *  @err
 */

 const download = async(req,res) => {

    const {coupon_id} = req.body;
    
    const code = await downloadCouponService.download(coupon_id);

    res.status(statusCode.CREATED).send(
        util.success(statusCode.CREATED, responseMessage.COUPON_DOWNLOAD_SUCCESS,code)
    );
}

module.exports = {
    createCouponType,
    deleteCouponType,
    editCouponType,
    getCouponType,
    createCouponDiscount,
    editCouponDiscount,
    getCouponDiscount,
    deleteCouponDiscount,
    download
}