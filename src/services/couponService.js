const couponDao = require("../models/couponDao");
const couponValidation = require("../utils/couponValidation");
const couponCode = require("../utils/couponCode");
const couponExist = require("../utils/couponExist");
const Error = require("../middlewares/errorConstructor")


const createCouponType = async (type) => {
    await couponValidation.typeExistFalse(type);
    await couponDao.createType(type);
    return true
}

const deleteCouponType = async (type) => {
    const typeCheck = await couponValidation.typeExistTrue(type);
    if(typeCheck.length === 0) {
        throw new Error("NOT_EXIST_TYPE", 400);
    }
    await couponDao.deleteType(type);
    return true
}

const editCouponType = async (type, editType) => {
    const typeCheck = await couponDao.typeExist(type)
    if(typeCheck.length === 0) {
        throw new Error("NOT_EXIST_TYPE", 400);
    }
    await couponDao.editType(type, editType);
    return true;
}

const getCouponType = async () => {
    const list = await couponDao.getList();
    return list
}

const createCouponDiscount = async (type, discount) => {
    const typeId = await couponValidation.typeExistTrue(type);
    const discountOverLap = await couponValidation.discountExist(typeId, discount);
    if(discountOverLap.length !== 0) {
        throw new Error("DISCOUNT_ALREADY_EXIST", 400);
    }
    await couponDao.createDiscount(typeId, discount);
    return true
}

const editCouponDiscount = async (type, beforeDiscount, afterDiscount) => {
    const typeId = await couponValidation.typeExistTrue(type);
    const discountId = await couponValidation.discountExist(typeId, beforeDiscount);
    if(discountId.length == 0) {
        throw new Error("NOT_EXIST_DISCOUNT", 400);
    }
    await couponDao.editDiscount(discountId, afterDiscount);
    return true
}

const getCouponDiscount = async () => {
    const list = await couponDao.getDiscount();
    return list
}

const deleteCouponDiscount = async (type, discount) => {
    const typeId = await couponValidation.typeExistTrue(type);
    const discountId = await couponValidation.discountExist(typeId, discount);
    if(discountId.length == 0) {
        throw new Error("NOT_EXIST_DISCOUNT", 400)
    }
    await couponDao.deleteDiscount(discountId);
}

const getCouponInfo = async(coupon_id)=> {

    const couponInfo = await downloadCouponDao.getCouponInfo(coupon_id);

    return couponInfo;
}

const download = async(coupon_id) => {

    await couponExist.checkCoupon(coupon_id);

    const code = await couponCode.makeCode(coupon_id);

    return code;

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
    getCouponInfo,
    download
}