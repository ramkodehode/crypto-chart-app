import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Charts = () => {
  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'My chart',
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7],
      },
    ],
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </>
  );
};

export default Charts;
