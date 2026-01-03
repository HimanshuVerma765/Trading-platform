const {model} = require('mongoose')
const PositionSchema = require('../schemas/PositionsSchema')

const PositionsModel = new model("Positions", PositionSchema);

module.exports = PositionsModel