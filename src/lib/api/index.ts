import axios from '../services/axios';
import requests from '../services/requests';
import {
  ICountryWiseCases,
  ICovidData,
  IWordWideCases,
} from '../utils/types/response';

export const getWorldWideCases = () => {
  return axios.get<IWordWideCases>(requests.getWorldwideCasesURL());
};

export const getCountryWiseCases = () => {
  return axios.get<ICountryWiseCases[]>(requests.getCountryCasesURL());
};

export const getCovidData = () => {
  return axios.get<ICovidData>(requests.getCovidDataURL());
};
