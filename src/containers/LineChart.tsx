import MyChart from 'chart.js/auto';
import dayjs from 'dayjs';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { Error, Spinner } from '../components';
import { CategoryScale } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { getCovidData } from '../lib/api';

dayjs.locale('en'); // or your preferred locale

MyChart.register(CategoryScale);

const LineChart = () => {
  const { isLoading, data, error, isError } = useQuery(
    'covid-data',
    getCovidData
  );

  if (isLoading) {
    return (
      <div className='relative h-1/2 bg-white rounded-lg shadow-md p-3'>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <Error className='w-full'>
        <h1 className='text-3xl font-bold mb-3 capitalize'>
          Oops! we've got an error
        </h1>
        <h2>{(error as any)?.message ?? 'Something went wrong'}</h2>
      </Error>
    );
  }
  const chartData = {
    labels: Object.keys(data!.data.cases).map((date) => dayjs(date).toDate()),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data!.data.cases),
        fill: false,
        borderColor: '#2563eb',
        pointRadius: 2,
        tension: 0.1,
      },
    ],
  };

  const chartOptions: ChartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Covid Cases',
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-3'>
      <Line
        data={chartData}
        // @ts-ignore
        options={chartOptions}
        className='!w-full'
      />
    </div>
  );
};

export default LineChart;
