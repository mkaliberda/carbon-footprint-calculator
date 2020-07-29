export const ROUTERS = {
  CALCULATOR_CO2: {
    path: '',
    name: '/',
    child: {
      GENERAL: {
        path: '/general',
        name: 'calculator_co2_general',
      },
      HOME: {
        path: '/home',
        name: 'calculator_co2_home',
      },
      TRANSPORT: {
        path: '/transport',
        name: 'calculator_co2_transport',
      },
    },
  },
};

export const CALCULATOR_CONST_LABELS:any = {
  co2: 'CO2',
  y: 'Annual',
  m: 'Monthly',
  w: 'Weekly',
  d: 'Daily',
  kwh: 'kWh',
  therm: 'therms',
  litres: 'litres',
  gallon: 'gallons',
  kg: 'kg',
};
