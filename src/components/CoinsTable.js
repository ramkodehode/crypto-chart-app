import { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import Coin from './Coin';
import { CryptoState } from '../CryptoContext';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
