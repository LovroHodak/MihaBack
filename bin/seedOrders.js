const mongoose = require("mongoose");
const OrderModel = require("../models/order.model");
require("../config/db.config");

OrderModel.insertMany([
  {
    userEmail: "janez.jansa@gmail.com",
    userName: "Janez",
    userLastName: "Jansa",
    userStreet: "Trg OF 121",
    userCity: "Grosuplje",
    orderDetails: [
      {
        name: "Kingtop",
        id: "0",
        nrOfItems: "5",
        price: "85",
        oneItemPrice: "17",
      },
    ],
    total: "85",
  },
  {
    userEmail: "borut.pahor@gmail.com",
    userName: "Borut",
    userLastName: "Pahor",
    userStreet: "Murgle 32",
    userCity: "Ljubljana",
    orderDetails: [
      {
        name: "Kingtop",
        id: "0",
        nrOfItems: "1",
        price: "17",
        oneItemPrice: "17",
      },
      {
        name: "iRainy",
        id: "1",
        nrOfItems: "5",
        price: "50",
        oneItemPrice: "10",
      },
    ],
    total: "67",
  },
])
  .then(() => {
    console.log("Orders MS seed/bin added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Smth went wrong: ", err);
  });
