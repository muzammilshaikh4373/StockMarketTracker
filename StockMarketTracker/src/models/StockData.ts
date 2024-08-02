import mongoose from 'mongoose';

const StockDataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

const StockData = mongoose.model('StockData', StockDataSchema);

export default StockData;
