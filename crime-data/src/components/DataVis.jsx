import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DataVis = ({ crime, address }) => {
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
    <div
      style={{
        width: '50%',
        display: 'inline-block',
        'vertical-align': 'top'
      }}
    >
      <h1 style={{ padding: '80px' }}>{address}</h1>
      <Doughnut data={data} />
    </div>
  );
};

export default DataVis;
