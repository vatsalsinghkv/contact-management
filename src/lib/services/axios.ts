import axios from 'axios';

export default axios.create({
  baseURL: 'https://disease.sh/v3/covid-19/',
});
