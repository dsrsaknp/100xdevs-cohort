// Circle class ============================================================================
// Implementation Detail
const _radius = new WeakMap();

// Public interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(_radius.get(this));
  }
}

module.exports = Circle;