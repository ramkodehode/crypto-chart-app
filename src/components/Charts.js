import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Select from 'react-select';

const Charts = () => {
  const options = {
    chart: {
      type: 'line',
    },

    title: {
      text: 'Crypto Chart',
    },
    series: [
      {
        data: [0, 2, 9, 10, 11],
      },
    ],

    rangeSelector: {
      enabled: true,
      inputEnabled: false,
      x: 0,
      verticalAlign: 'top',
      buttonPosition: {
        align: 'left',
      },
      allButtonsEnabled: true,
      buttons: [
        {
          type: 'days',
          count: 1,
          text: '1 Year',
          dataGrouping: {
            forced: true,
            units: [['year', [1]]],
          },
        },
        {
          type: 'days',
          count: 1,
          text: '5 years',
          events: {
            click: function () {
              alert('Clicked button');
            },
          },
          dataGrouping: {
            forced: true,
            units: [['year', [1]]],
          },
        },
        {
          type: 'max',
          text: 'Max',
          dataGrouping: {
            forced: true,
            units: [['year', [1]]],
          },
        },
      ],
      buttonTheme: {
        width: 100,
        padding: 20,
      },
    },
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={''}
      ></HighchartsReact>
    </>
  );
};

export default Charts;
