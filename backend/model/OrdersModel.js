const {Model}=require('mongoose');

const {ordersSchema} = require('../schemas/OrdersSchema')

const Orders = Model("order",ordersSchema)
module.exports = {Orders}