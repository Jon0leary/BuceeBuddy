const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
  storeNumber: {type: String, required: true},
  lat: {type: Number, required: true},
  lng: {type: Number, required: true}
})

const Coordinates = mongoose.model("coordinates", coordinatesSchema);

module.exports = { Coordinates };