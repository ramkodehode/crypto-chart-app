import React from 'react';
import Charts from '../components/Charts';
import CoinsTable from '../components/CoinsTable';
import Select from 'react-select';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => {
  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  const options = [
    { value: 'NOK', label: 'NOK' },
    { value: 'USD', label: 'USD' },
  ];

  const customStyles = {
    option: () => ({
      padding: 10,
      width: 20,
    }),
  };

  return (
    <div>
      <Select
        options={options}
        defaultInputValue={setCurrency}
        onChange={setCurrency}
      />
      <Charts />
      <CoinsTable />
    </div>
  );
};

export default CoinPage;
