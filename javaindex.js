function capturar() {
  ca = document.getElementById("ex").value;
  regEx = /^[A-Z]{1}[0-9]{3}[a-z A-Z]{3}\W{3}$/;
  console.log(regEx.test(ca));
  if (regEx.test(ca) == true) {
    $('#dataCorrect').modal('show');
  } else {
    $('#incorrectData').modal('show');
  }
}
