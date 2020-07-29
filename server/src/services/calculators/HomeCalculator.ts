import { EMISSIONS, FACTORS_SLUGS, FACTORS_CATEGORIES } from '../../config';
import { ElectricityFactor, NaturalGasFactor, LPG, FuelOil} from '../factors';

class HomeCalculator {
  private handles: object = {
    [FACTORS_SLUGS.ELECTRICITY]: ElectricityFactor,
    [FACTORS_SLUGS.NATURAL_GAS]: NaturalGasFactor,
    [FACTORS_SLUGS.LPG]: LPG,
    [FACTORS_SLUGS.FUEL_OIL]: FuelOil,
  };

  public calculateEmission(emission: string, peoples: number, factorsValues: [object]): [object] {
    switch (emission) {
      case Object(EMISSIONS).CO2: {
        return this.__calculate_CO2(peoples, factorsValues);
      }
      default: {
        return this.__calculate_CO2(peoples, factorsValues);
      }
    }
  }

  private __getHandler(factor: string): any {
    return Object(this.handles)[factor];
  }

  private __calculate_CO2(peoples: number, factorsValues: [object]): any {
    return factorsValues.map((el: any) => {
      const factorClass = this.__getHandler(el.name);
      return new factorClass().calculateCO2(peoples, el, FACTORS_CATEGORIES.HOME);
    });
  }
}

export default HomeCalculator;
