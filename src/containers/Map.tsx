import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import marker from '../assets/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import { getCountryWiseCases } from '../lib/api';
import { useQuery } from 'react-query';
import { Error, Spinner } from '../components';

const icon = new Icon({
  iconUrl: marker,
});

interface ICountryData {
  name: string;
  flag: string;
  coords: [number, number];
  active: number;
  deaths: number;
  recovered: number;
}

type Props = {};

const Map = (props: Props) => {
  const position: [number, number] = [51.505, -0.09];
  const { isLoading, data } = useQuery('country-data', getCountryWiseCases);

  const countriesData: ICountryData[] = [];

  if (isLoading && !data) {
    return (
      <div className='relative h-1/2 bg-white rounded-lg shadow-md p-3'>
        <Spinner />
      </div>
    );
  }

  if (!isLoading && !data) {
    return (
      <Error>
        <h1>No data found</h1>
      </Error>
    );
  }

  data.data.forEach((res) => {
    countriesData.push({
      name: res.country,
      coords: [res.countryInfo.lat, res.countryInfo.long],
      flag: res.countryInfo.flag,
      active: res.active,
      recovered: res.recovered,
      deaths: res.deaths,
    });
  });

  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={false}
      className='h-full rounded-lg overflow-hidden shadow-lg'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
      />

      {countriesData.map(
        ({ coords, flag, name, active, deaths, recovered }) => (
          <Marker position={coords} icon={icon}>
            <Popup>
              <div className='capitalize'>
                <img src={flag} alt={`${name} flag`} className='mb-2' />
                <h1 className='text-lg font-bold mb-0.5'>{name}</h1>
                <div>
                  <span className='font-bold'>active:</span> {active}
                </div>
                <div>
                  <span className='font-bold'>recovered:</span> {recovered}
                </div>
                <div>
                  <span className='font-bold'>deaths:</span> {deaths}
                </div>
              </div>
            </Popup>
          </Marker>
        )
      )}
    </MapContainer>
  );
};

export default Map;
