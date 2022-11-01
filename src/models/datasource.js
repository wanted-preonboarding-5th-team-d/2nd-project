const { DataSource } = require("typeorm");
const coupon_downloads = require("../entities/coupon_download");
const coupon_type_id = require("../entities/coupon_type");
const coupon = require("../entities/coupon");
const country_code = require("../entities/country_code");
const delivery_cost = require("../entities/delivery_cost");
const quantity_range = require("../entities/quantity_range");
const quantity = require("../entities/quantity");
const order = require("../entities/order");

const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  TIME_ZONE: process.env.TIME_ZONE,
  entities: [delivery_cost, quantity_range, quantity, order, country_code, coupon_downloads, coupon_type_id, coupon],
  synchronize: false,
  logging: true,
});

module.exports = { AppDataSource };