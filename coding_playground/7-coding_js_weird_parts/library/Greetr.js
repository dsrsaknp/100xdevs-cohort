(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  Greetr.prototype = {};

  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };

  Greetr.init.protoytpe = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);
