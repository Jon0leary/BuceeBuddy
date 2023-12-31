// trip model
const mongoose = require('mongoose');
const Joi = require('joi');

const tripSchema = new mongoose.Schema({
    email: {type: String, required: true},
    date: {type: String, required: true},
    location: {type: String, required: true},
    total: {type: Number, required:true},
    didGas: {type: Boolean, default:false, required:true},
    didBrisket: {type: Boolean, default:false, required:true},
    didDessert: {type: Boolean, default:false, required:true},
    didHomeGood: {type: Boolean, default:false, required:true},
    didOutdoor: {type: Boolean, default:false, required:true},
    didJerky: {type: Boolean, default:false, required:true},
    didColdGrab: {type: Boolean, default:false, required:true},
    didHotGrab: {type: Boolean, default:false, required:true},
    did3rdParty: {type: Boolean, default:false, required:true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
});

const Trip = mongoose.model("trip", tripSchema);

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        location: Joi.string().required().label("Location"),
        date: Joi.string().required().label("Date String"),
    });
    return schema.validate(data)
}

module.exports = {Trip, validate};
