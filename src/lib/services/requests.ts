const requests = {
  getWorldwideCasesURL() {
    return `/all`;
  },
  getCountryCasesURL() {
    return `/countries`;
  },
  getCovidDataURL() {
    return '/historical/all?lastdays=all';
  },
};

export default requests;
