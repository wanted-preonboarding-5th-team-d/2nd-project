const orderService = require("../services/orderService");
const util = require("../lib/util");
const statusCode = require("../constants/statusCode");
const responseMessage = require("../constants/responseMessage");

/**
 *  @관리자_제품_주문내역_조회하기
 *  @route GET ~/order/admin?name=&status=&start=&end=
 *  @access public
 *  @err
 */
const getOrderList = async (req, res) => {
  const { name, status, start, end } = req.query;
  try {
    const orderList = await orderService.getOrderList(name, status, start, end);
    return res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.READ_ORDER_SUCCESS,
          orderList
        )
      );
  } catch (error) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @관리자__제품_배송상태_수정하기
 *  @route PATCH ~/order/admin/:orderId
 *  @access public
 *  @err
 */
const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  try {
    const result = await orderService.updateOrderStatus(orderId, status);
    return res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.UPDATE_DELIVERY_STATUS_SUCCESS,
          result
        )
      );
  } catch (error) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

module.exports = {
  getOrderList,
  updateOrderStatus,
};
