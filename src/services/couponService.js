const couponDao = require("../models/couponDao");
const couponValidation = require("../utils/couponValidation");
const Error = require("../middlewares/errorConstructor")


const createCouponType = async (type) => {
    await couponValidation.typeExist(type);
    await couponDao.createType(type);
    return true
}

const deleteCouponType = async (type) => {
    const typeCheck = await couponValidation.typeExist(type);
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

module.exports = {
    createCouponType,
    deleteCouponType,
    editCouponType,
    getCouponType
}