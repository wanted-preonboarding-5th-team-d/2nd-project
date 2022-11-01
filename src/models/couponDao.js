const { AppDataSource } = require("./datasource");
const Error = require("../middlewares/errorConstructor");
const couponType = require("../entities/coupon_type");

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
            .from("coupon_Type")
            .execute()
    } catch(err) {
        throw new Error("SERVER ERROR", 500);
    }
}

module.exports = {
    createType,
    typeExist,
    deleteType,
    editType,
    getList
}