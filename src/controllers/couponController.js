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

module.exports = {
    createCouponType,
    deleteCouponType,
    editCouponType,
    getCouponType
}