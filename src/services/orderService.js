const Error = require("../middlewares/errorConstructor");
const order = require("../entities/order");
const { AppDataSource } = require("../models/datasource");
const { Between } = require("typeorm");

const getOrderList = async (name, status, start, end) => {
  // 조회할 시작, 종료날짜 계산
  if (!start || !end) {
    (start = new Date("2021-01-01")), (end = new Date());
  }
  const selectDate = Between(new Date(start), new Date(end));
  const orderList = await AppDataSource.getRepository(order).find({
    where: {
      buyer_name: name,
      delivery_status: status,
      order_date: selectDate,
    },
  });

  return orderList;
};

const updateOrderStatus = async (orderId, status) => {
  await AppDataSource.getRepository(order).update(
    { id: orderId },
    { delivery_status: status }
  );
  const result = await AppDataSource.getRepository(order).findOne({
    where: { id: orderId },
  });
  return result;
};

module.exports = {
  getOrderList,
  updateOrderStatus,
};
