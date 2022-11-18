const { AppDataSource } = require("./datasource");
const Error = require("../middlewares/errorConstructor");
const couponType = require("../entities/coupon_type");
const coupon = require("../entities/coupon");

const createType = async (type) => {
    try{
        return await AppDataSource
        .createQueryBuilder()
        .insert()
        .into("coupon_type")
        .values({ type })
        .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const createDiscount = async (typeId, discount) => {
    try{
        return await AppDataSource
        .createQueryBuilder()
        .insert()
        .into("coupon")
        .values({ coupon_type_id: typeId, discount: discount })
        .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const typeExist = async (type) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .select(["*"])
            .from(couponType, "coupon_Type")
            .where("type=:type", {type: type})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const deleteType = async (type) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(couponType, "coupon_Type")
            .where("type=:type", {type: type})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}
const selectTypeId = async (type) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .select(["id AS id"])
            .from(couponType, "coupon_type")
            .where("type=:type", {type: type})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const discountExist = async (typeId, beforeDiscount) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .select(["id AS id"])
            .from(coupon, "coupon")
            .where("coupon_type_id=:type", {type: typeId})
            .andWhere("discount=:discount", {discount: beforeDiscount})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const editDiscount = async (discountId, afterDiscount) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .update("coupon")
            .set({discount: afterDiscount})
            .where("id=:id", {id: discountId})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const getDiscount = async () => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .select(["coupon.id AS id",
                    "coupon.discount AS discount",
                    "DATE_FORMAT(coupon.created_at, '%Y.%m.%d %H:%i:%s') AS created_at",
                    "DATE_FORMAT(coupon.updated_at, '%Y.%m.%d %H:%i:%s') AS updated_at",
                    "coupon-Type.type AS type"])
            .from(coupon, "coupon")
            .innerJoin(couponType, "coupon-Type", "coupon-Type.id = coupon.coupon_type_id")
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const deleteDiscount = async (discountId) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(coupon, "coupon")
            .where("id=:id", {id: discountId})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const editType = async (type, editType) => {
    try{
        return await AppDataSource
            .createQueryBuilder()
            .update(couponType, "coupon_Type")
            .set({type: editType})
            .where("type=:type", {type: type})
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const getList = async () => {
    try {
        return await AppDataSource
            .createQueryBuilder()
            .select(["id AS id", "type AS type"])
            .from(couponType, "coupon-type")
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const getCouponInfo = async(coupon_id) => {

    return await AppDataSource.query(
        `SELECT * FROM coupon WHERE id = ${coupon_id}`
    );
}

const download = async (coupon_id, couponCode) => {

    try {
        return await AppDataSource
        .createQueryBuilder()
        .insert()
        .into("coupon_downloads")
        .values({coupon_id : coupon_id, code : couponCode})
        .execute()
        
    } catch (error) {

        throw new Error("INVALID DATA INPUT ",500);
    }
}


module.exports = {
    createType,
    typeExist,
    deleteType,
    editType,
    getList,
    createDiscount,
    typeExist,
    selectTypeId,
    discountExist,
    editDiscount,
    getDiscount,
    deleteDiscount,
    getCouponInfo,
    download
}