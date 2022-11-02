const couponDao = require("../models/couponDao");

const typeExist = async (type) => {
    const typeCheck = await couponDao.typeExist(type)
    if(typeCheck.length !== 0) {
        throw new Error("ALREADY_EXIST_TYPE", 400);
    }
    return true;
}

module.exports = {
    typeExist
}