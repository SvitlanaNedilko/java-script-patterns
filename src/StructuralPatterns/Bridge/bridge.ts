interface Color {
  get(): string;
}

class BlackColor implements Color {
  get(): string {
    return 'black';
  }
}

class RedColor implements Color {
  get(): string {
    return 'red';
  }
}
abstract class Model {
  constructor(protected color: Color) {}

  abstract paint(): string;
}

class Audi extends Model {
  paint(): string {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}
class Bmw extends Model {
  paint(): string {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const blackColor = new BlackColor();
const redColor = new RedColor();

const audiBlack = new Audi(blackColor);
const bmwRed = new Bmw(redColor);

export const bridge = () => {
  console.log(audiBlack.paint());
  console.log(bmwRed.paint());
};
