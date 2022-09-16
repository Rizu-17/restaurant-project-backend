const express = require("express");
const cors = require("cors");

const adminRouter = require("./routes/adminRoutes");
const reservationRouter = require("./routes/reservationRoutes");
const reviewRouter = require("./routes/reviewRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json({ limit: "10kb" }));

app.use("/api/admin", adminRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/review", reviewRouter);

module.exports = app;
