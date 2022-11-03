const couponDao = require("../models/couponDao");

const typeExistFalse = async (type) => {
    const typeCheck = await couponDao.typeExist(type)
    if(typeCheck.length !== 0) {
        throw new Error("ALREADY_EXIST_TYPE", 400);
    }
}

const typeExistTrue = async (type) => {
    const typeCheck = await couponDao.typeExist(type)
    if(typeCheck.length === 0) {
        throw new Error("NOT_EXIST_TYPE", 400);
    }
    const selectId = await couponDao.selectTypeId(type);
    const typeId = Number(Object.values(selectId[0])[0]);
    return typeId;
}

const selectTypeId = async (type) => {
    const typeId = await couponDao.selectTypeId(type);
    return typeId;
}

const discountExist = async (typeId, beforeDiscount) => {
    const discountCheck = await couponDao.discountExist(typeId, beforeDiscount);
    if(discountCheck.length == 0) {
        return discountCheck;
    } else return Number(Object.values(discountCheck[0])[0]);
}

module.exports = {
    typeExistTrue,
    typeExistFalse,
    selectTypeId,
    discountExist
}