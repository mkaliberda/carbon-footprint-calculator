import dotenv from 'dotenv';

dotenv.config();

export const FACTORS_CATEGORIES = {
  HOME: 'home',
};

export const EMISSIONS = {
  CO2: 'co2',
};

export const PERIODS = {
  ANNUAL: 'y',
  MONTHLY: 'm',
  WEEKLY: 'w',
  DAILY: 'd',
};

export const FACTORS_SLUGS = {
  ELECTRICITY: 'electricity',
  NATURAL_GAS: 'natural-gas',
  LPG: 'lpg',
  FUEL_OIL: 'fuel-oil',
};

export default {
  port: process.env.PORT || 4000,
  allowedOrigins: ['http://localhost:3000', 'http://localhost:4000'],
};
