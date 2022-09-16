const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "admin must have a name"],
    trim: true,
    minlength: [1, "A name cannot be empty"],
    maxlength: [20, "name must be less or equal to 20 characters"],
  },
  password: {
    type: String,
    required: [true, "admin must have a password"],
    minlength: [1, "A password cannot be empty"],
    maxlength: [20, "password must be less or equal to 20 characters"],
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
