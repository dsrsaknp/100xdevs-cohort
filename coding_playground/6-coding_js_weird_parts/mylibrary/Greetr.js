(function Greetr(global, $) {
  // created Greetr wrapper fuction that returns instantiated Greetr.init object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  // An array containing the supported languages
  var supportedLangs = ["en", "es"];

  // Informal greetings object containing messages for every language
  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  // Formal greetings object containing messages for each language
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  // object containing logged messages in each language
  var logMessages = {
    en: "Logged in",
    es: "Inició sesión",
  };

  // Created a protoytpe object that is pointed by the Greetr.init constructor function.
  // containing methods

  Greetr.prototype = {
    fullname: function () {
      return this.firstname + " " + this.lastname;
    },

    // Validates whether the language contains supported languages
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    // informal greeting with the firstname
    greeting: function () {
      return greetings[this.language] + " " + this.firstname + "!";
    },

    // formal greeting with the fullname
    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullname();
    },

    // Greet based on parameter passed
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

    // logger messages
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullname());
      }
      return this;
    },

    // set or change the language
    setLang: function (lang) {
      // set the language
      this.language = lang;
      // validate the language
      this.validate();
      // making this method chainable by returning this
      return this;
    },

    // function that takes html element as selector where the greeting would be displayed.
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }
      if (!selector) {
        throw "Missing jQuery selector";
      }
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    },
  };

  // constructor function
  Greetr.init = function (firstname, lastname, language) {
    self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
    self.validate();
  };

  // assigning the prototype object
  Greetr.init.prototype = Greetr.prototype;

  // 'global' here is a global object where we attach Greetr as a property, which will then become accessible globally.
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
