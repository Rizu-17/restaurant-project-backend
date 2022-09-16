const Admin = require("../models/adminModel");

exports.createAdmin = async (req, res, next) => {
  const doc = await Admin.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

exports.signin = async (req, res, next) => {
  const { name, password } = req.body;
  const doc = await Admin.findOne({ name: name });

  if (!doc || password !== doc.password) {
    res.status(401).json({
      status: "failed",
    });
  } else {
    res.status(200).json({
      status: "success",
    });
  }
};
