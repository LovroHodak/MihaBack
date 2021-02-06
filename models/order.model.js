const mongoose = require("mongoose");

let OrderSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String
    },
    userName: {
      type: String
    },
    userLastName: {
      type: String
    },
    userStreet: {
      type: String
    },
    userCity: {
      type: String
    },
    orderDetails: {
      type: []
    },
    total: {
      type: Number
    },
  },
  {
    timestamps: true,
  }
);

let OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
