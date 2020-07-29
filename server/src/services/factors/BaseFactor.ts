import { PERIODS } from '../../config';

class BaseFactor {
    private periodTargetGrid: any = {
      [PERIODS.ANNUAL]: {
        [PERIODS.ANNUAL]: 1,
        [PERIODS.MONTHLY]: 12,
        [PERIODS.WEEKLY]: 52,
        [PERIODS.DAILY]: 365,
      },
    };

    public getPeriodFactor(target: string, value: string): number {
      return this.periodTargetGrid[target][value];
    }
}

export default BaseFactor;
