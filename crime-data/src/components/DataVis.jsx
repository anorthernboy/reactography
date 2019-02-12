import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DataVis = ({ crime }) => {
  console.log(crime);
  const data = {
    labels: [...Object.keys(crime)],

    datasets: [
      {
        data: [...Object.values(crime)],
        backgroundColor: [
          'IndianRed',
          'LightCoral',
          'Salmon',
          'DarkSalmon',
          'LightSalmon',
          'Crimson',
          'LightPink',
          'DeepPink',
          'DarkOrange',
          'Gold',
          'DarkKhaki',
          'BlueViolet',
          'Indigo',
          'SlateBlue'
        ]
      }
    ]
  };
  console.log(data);
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DataVis;
