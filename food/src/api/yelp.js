import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer xZacQSkyxOUS3vtlYu72i1xPuYJfgxK5P1Qj9qF6o0t3nCpYmfCpwvO4uDaxf_WLTgX7LN0qCKX34nyuXYcqyENv5JXTJXsNuqMh04ljp9vEgW5MO2RCJrT7VA5kXXYx'
  }
});
