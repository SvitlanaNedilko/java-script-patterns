class OldCalculator {
  operations(term1: number, term2: number, operation: string): number {
    switch (operation) {
      case 'add':
        return term1 + term2;
      case 'sub':
        return term1 - term2;
      default:
        return NaN;
    }
  }
}

class NewCalculator {
  add(term1: number, term2: number): number {
    return term1 + term2;
  }

  sub(term1: number, term2: number): number {
    return term1 - term2;
  }
}
class CalculatorAdapter {
  private newCalculator: NewCalculator;

  constructor() {
    this.newCalculator = new NewCalculator();
  }

  operations(term1: number, term2: number, operation: string): number {
    switch (operation) {
      case 'add':
        return this.newCalculator.add(term1, term2);
      case 'sub':
        return this.newCalculator.sub(term1, term2);
      default:
        return NaN;
    }
  }
}

const adapter = new CalculatorAdapter();
export const adapterPatter = () => {
  console.log('-----Adapter----');
  console.log(adapter.operations(5, 3, 'add'));
  console.log(adapter.operations(5, 3, 'sub'));
};
