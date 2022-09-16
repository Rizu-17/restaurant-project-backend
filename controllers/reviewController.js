const Review = require("../models/reviewModel");

exports.createReview = async (req, res, next) => {
  const doc = await Review.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

exports.getAllReviews = async (req, res, next) => {
  const doc = await Review.find();

  // send response
  res.status(200).json({
    status: "success",
    results: doc.length,
    data: {
      data: doc,
    },
  });
};
