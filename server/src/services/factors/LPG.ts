import { EMISSIONS } from '../../config';
import BaseFactor from './BaseFactor';
import FactorRepository from '../../repositories/Factor';
import { Decimal } from 'decimal.js';

class LPG extends BaseFactor {
  private unitTargetGrid: any = {
    gallon: {
      gallon: 1,
    },
  };

  public calculateCO2(peoples: number, valueObject: any, factorCategory: string): object {
    const { value } = valueObject;
    const unitFactor = this.getUnitFactor('gallon', Object(valueObject).unit);
    const periodFactor = this.getPeriodFactor('y', Object(valueObject).period);
    const inputValue = new Decimal(value).mul(new Decimal(unitFactor)).mul(new Decimal(periodFactor));
    const factorObj = new FactorRepository().getFactor(Object(valueObject).name, factorCategory, EMISSIONS.CO2);
    return {
      name: Object(factorObj).slug,
      label: Object(factorObj).label,
      emission: new Decimal(Object(factorObj).value).mul(inputValue).div(new Decimal(peoples)),
      unit: Object(factorObj).unit,
      period: Object(factorObj).period,
    };
  }

  private getUnitFactor(target: string, value: string): number {
    return this.unitTargetGrid[target][value];
  }
}

export default LPG;
