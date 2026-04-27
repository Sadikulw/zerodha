const {model}= require('mongoose');

const {positionsSchema} = require('../schemas/PositionsSchema')

const Positions = model("position",positionsSchema)
module.exports = {Positions}