const Reservation = require("../models/reservationModel");

exports.createReservation = async (req, res, next) => {
  const doc = await Reservation.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

exports.getAllReservation = async (req, res, next) => {
  const doc = await Reservation.find();

  // send response
  res.status(200).json({
    status: "success",
    results: doc.length,
    data: {
      data: doc,
    },
  });
};
