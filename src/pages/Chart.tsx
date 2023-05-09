import { LineChart, Map } from '../containers/';

const Chart = () => {
  return (
    <div className='relative h-full space-y-5 overflow-y-scroll'>
      {/* @ts-ignore */}
      <LineChart />
      <Map />
    </div>
  );
};

export default Chart;
