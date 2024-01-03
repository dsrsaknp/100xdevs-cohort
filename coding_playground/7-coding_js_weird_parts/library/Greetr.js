// (function (global, $) {
//   var Greetr = function (firstname, lastname, language) {
//     return new Greetr.init(firstname, lastname, language);
//   };

//   var supported_lang = ["en", "es"];

//   var greetings = {
//     en: "Hello",
//     es: "Hola",
//   };

//   var formalGreetings = {
//     en: "Greetings",
//     es: "Saludos",
//   };

//   Greetr.prototype = {};

//   Greetr.init = function (firstname, lastname, language) {
//     var self = this;
//     self.firstname = firstname || "";
//     self.lastname = lastname || "";
//     self.language = language || "en";
//   };

//   Greetr.init.protoytpe = Greetr.prototype;

//   global.Greetr = global.G$ = Greetr;
// })(window, jQuery);

(function Greetr(global, $) {
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Inició sesión",
  };

  Greetr.prototype = {
    // 1
    fullname: function () {
      return this.firstname + " " + this.lastname ;
    },

    // 2
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    //3
    greeting: function () {
      return greetings[this.language] + " " + this.firstname + "!";
    },

    //4
    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullname();
    },

    //5
    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    //6
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + " " + this.fullname());
      }
      return this;
    },

    //7
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
  };

  Greetr.init = function (firstname, lastname, language) {
    self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
