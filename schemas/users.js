var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  code: Number,
  data: {
    securityCode: String,
    name: String,
    now: Number,
    close: Number,
    open: Number,
    high: Number,
    low: Number,
    volume: Number,
    bid1: Number,
    bid2: Number,
    bid3: Number,
    bid4: Number,
    bid5: Number,
    bid1Volume: Number,
    bid2Volume: Number,
    bid3Volume: Number,
    bid4Volume: Number,
    bid5Volume: Number,
    ask1: Number,
    ask2: Number,
    ask3: Number,
    ask4: Number,
    ask5: Number,
    ask1Volume: Number,
    ask2Volume: Number,
    ask3Volume: Number,
    ask4Volume: Number,
    ask5Volume: Number,
    transactions: [
      {
        time: String,
        price: Number,
        volume: Number,
        action: String,
        amount: Number
      },
      {
        time: String,
        price: Number,
        volume: Number,
        action: String,
        amount: Number
      },
      {
        time: String,
        price: Number,
        volume: Number,
        action: String,
        amount: Number
      },
      {
        time: String,
        price: Number,
        volume: Number,
        action: String,
        amount: Number
      },
      {
        time: String,
        price: Number,
        volume: Number,
        action: String,
        amount: Number
      },
      {
        time: String,
        price: Number,
        volume: Number,
        action: String,
        amount: Number
      }
    ],
    datetime: String
  },
  msg: String
});
