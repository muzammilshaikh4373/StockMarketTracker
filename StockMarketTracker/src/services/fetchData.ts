import axios from 'axios';
import StockData from '../models/StockData';
import { response } from 'express';
import { log } from 'console';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';
const symbols = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'cardano'];

export const fetchData = async () => {
  try {
   

    const response = await axios.get(API_URL, {
        
      params: {
        ids: symbols.join(','),
        vs_currencies: 'usd',
      },
    }
    
    
);

   console.log(response.data);
   
    const data = response.data;
    for (const symbol of symbols) {
      const price = data[symbol].usd;
      await StockData.create({ symbol, price });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
