function generatePassword() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var color = document.getElementById("color").value;
  var password = name + surname + color + "23";
  document.getElementById("password").innerHTML = "La tua password è " + password;
}