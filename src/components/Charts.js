import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Charts = () => {
  const options = {
    chart: {
      type: 'spline',
    },
    exporting: {
      button: [
        {
          text: 'testing',
        },
      ],
    },

    title: {
      text: 'Crypto Chart',
    },
    series: [
      {
        data: [0, 2, 9, 6],
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
          onclick: () => {
            console.log('Hello there');
          },
          type: 'year',
          count: 1,
          text: '1 Year',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'year',
          count: 1,
          text: '5 years',
          dataGrouping: {
            forced: true,
            units: [['week', [1]]],
          },
        },
        {
          type: 'max',
          text: 'Max',
          dataGrouping: {
            forced: true,
            units: [['month', [1]]],
          },
        },
      ],
      buttonTheme: {
        width: 60,
      },
      selected: 2,
    },
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'stockChart'}
      ></HighchartsReact>
    </>
  );
};

export default Charts;
