// Square class

// Implementation Detail
const _side = new WeakMap();

// Public Interface
export class Square {
  constructor(side) {
    _side.set(this, side);
  }
  draw() {
    return _radius.get(this);
  }
}
