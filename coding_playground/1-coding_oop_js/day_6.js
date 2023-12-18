// #Exercise 1- prototypal inheritance

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

const e = new HtmlElement();

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items = this.items.filter((ele) => ele !== item);
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();

// #Exercise 2- Polymorphism
// HtmlElement
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("focused");
};
const e1 = new HtmlElement();

// HtmlSelectElement
function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
  this.render = function () {
    // let selectTag = "";
    // for (let item of this.items) {
    //   selectTag += `<option>${item}</option>`;
    // }
    // selectTag = `<select> ${selectTag} </select>`;
    // return selectTag;
    return `<select>${this.items.map((item) =>
      `<option>${item}</option>`
    ).join("")}</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s1 = new HtmlSelectElement();

// HtmlImageElement
function HtmlImageElement(src = "", alt = "") {
  this.src = src;
  this.alt = alt;
  this.render = function () {
    return `<img src=${this.src} alt=${this.alt} />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const i = new HtmlImageElement();
