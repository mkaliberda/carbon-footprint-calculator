import { FactorRepository } from '../../repositories';
import { FACTORS_CATEGORIES } from '../../config';
import HomeCalculator from '../../services/calculators/HomeCalculator';

export const resolvers = {
  Query: {
    getFactorsParams: async (_: any, args: any) => {
      const { category, emission } = args;
      return new FactorRepository().getFactorsParameters(category, emission);
    },
  },
  Mutation: {
    calculateEmissions: async (_: any, args: any) => {
      const { peoples, category, emission, factorsValues } = args;

      let calculatorClass;

      switch (category) {
        case FACTORS_CATEGORIES.HOME: {
          calculatorClass = new HomeCalculator();
          break;
        }
        default: {
          break;
        }
      }
      return calculatorClass.calculateEmission(emission, peoples, factorsValues);
    },
  },
};

export default resolvers;
