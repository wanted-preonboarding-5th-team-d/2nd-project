const { AppDataSource } = require("./datasource");

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


module.exports={

    getCouponInfo,
    download
}