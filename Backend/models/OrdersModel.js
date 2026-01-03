const {model} = require('mongoose')
const OrderSchema = require('../schemas/OrdersSchema')

const OrdersModel = new model("Orders", OrderSchema);

module.exports = OrdersModel