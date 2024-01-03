// var g = G$("John", "Doe");
// console.log(g);
// g.greet().setLang("es").greet(true);

$("#login").click(function () {
  var loginGrtr = G$("John", "Doe");
  $("#login-div").hide();
  loginGrtr.setLang($("#lang").val()).HTMLGreeting($("#greeting"), true).log();
});
