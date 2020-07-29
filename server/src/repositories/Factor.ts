import loadFactors from '../database/loadFactors.json';

class FactorRepository {
  private loadFactors: any;

  constructor() {
    this.loadFactors = loadFactors;
  }

  public getFactorsParameters(category: string, emission: string): [object] {
    const factors = this.loadFactors.filter(el => (el.category === category && emission === emission));
    return factors.map((el: any) => ({ name: el.slug, label: el.label, units: el.units, periods: el.periods }));
  }

  public getFactor(slug: string, category: string, emission: string): [object] {
    const factors = this.loadFactors.filter(el => (el.slug === slug &&
                                                            el.category === category &&
                                                            emission === emission));
    return factors[0];
  }
}

export default FactorRepository;
