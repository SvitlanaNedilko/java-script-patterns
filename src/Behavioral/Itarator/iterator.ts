interface Iterator<T> {
  current(): T;
  next(): IteratorResult<T>;
  hasNext(): boolean;
}

interface Aggregator<T> {
  createIterator(): Iterator<T>;
}

class NumberCollection implements Aggregator<number> {
  private numbers: number[] = [];

  addNumber(number: number): void {
    this.numbers.push(number);
  }

  createIterator(): Iterator<number> {
    return new NumberIterator(this.numbers);
  }
}

class NumberIterator implements Iterator<number> {
  private position: number = 0;

  constructor(private numbers: number[]) {}

  current(): number {
    return this.numbers[this.position];
  }

  next(): IteratorResult<number> {
    if (this.hasNext()) {
      return { done: false, value: this.numbers[this.position++] };
    } else {
      return { done: true, value: null as any };
    }
  }

  hasNext(): boolean {
    return this.position < this.numbers.length;
  }
}

class StringCollection implements Aggregator<string> {
  private strings: string[] = [];

  addString(str: string): void {
    this.strings.push(str);
  }

  createIterator(): Iterator<string> {
    return new StringIterator(this.strings);
  }
}

class StringIterator implements Iterator<string> {
  private position: number = 0;

  constructor(private strings: string[]) {}

  current(): string {
    return this.strings[this.position];
  }

  next(): IteratorResult<string> {
    if (this.hasNext()) {
      return { done: false, value: this.strings[this.position++] };
    } else {
      return { done: true, value: null as any };
    }
  }

  hasNext(): boolean {
    return this.position < this.strings.length;
  }
}

const numberCollection = new NumberCollection();
numberCollection.addNumber(1);
numberCollection.addNumber(2);
numberCollection.addNumber(3);

const stringCollection = new StringCollection();
stringCollection.addString('a');
stringCollection.addString('b');
stringCollection.addString('c');

const numberIterator = numberCollection.createIterator();
const stringIterator = stringCollection.createIterator();

while (numberIterator.hasNext()) {
  const result = numberIterator.next();
  if (!result.done) {
    console.log(result.value);
  }
}
// Outputs:
// 1
// 2
// 3

while (stringIterator.hasNext()) {
  const result = stringIterator.next();
  if (!result.done) {
    console.log(result.value);
  }
}
// Outputs:
// a
// b
// c
