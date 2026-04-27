const {model} = require('mongoose');

const {holdingsSchema} = require('../schemas/HoldingsSchema')

const Holdings = model("holding",holdingsSchema)
module.exports = {Holdings}