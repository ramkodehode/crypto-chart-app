import React from 'react';

const Coin = ({ name, price }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <th>{name}</th>
            <th>{price}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
