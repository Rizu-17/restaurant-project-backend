const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Reservation must have a name"],
    trim: true,
    minlength: [1, "A reservation title cannot be empty"],
    maxlength: [
      100,
      "Reservation title must be less or equal to 100 characters",
    ],
  },
  contact: {
    type: String,
    required: [true, "Reservation must have a body"],
    trim: true,
    minlength: [1, "A reservation title cannot be empty"],
  },
  details: {
    type: String,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
