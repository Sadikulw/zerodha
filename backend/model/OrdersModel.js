const {model}=require('mongoose');

const {ordersSchema} = require('../schemas/OrdersSchema')

const Orders = model("order",ordersSchema)
module.exports = {Orders}