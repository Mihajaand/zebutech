export default [
  {
    method: 'GET',
    path: '/currency-rate/update',
    handler: 'api::currency-rate.currency-rate.updateRates',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/currency-rate/fresh',
    handler: 'api::currency-rate.currency-rate.findFresh',
    config: {
      auth: false,
    },
  },
];
