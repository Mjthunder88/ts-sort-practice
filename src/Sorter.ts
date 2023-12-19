// * The names of the arguments inside the interface don't have to be named the same as the ones from the class Numbercollection
// * It just helps to provide context for us and other developers
// ! This interface alos makes it so you don't have to memorize the for loop logic you just have to make sure we iplement/furfill the interface
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
// * As long as an argument satisfies the interface (Sortable) you then have access to the Sorter class and can sort your data

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
