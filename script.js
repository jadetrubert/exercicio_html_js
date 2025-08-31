const campoa = document.getElementById("campoa");
const campob = document.getElementById("campob");
const form = document.getElementById("form-number");

function validaCampo(campoa, campob) {
  if (campoa.length > campob.length) {
    return alert("Campo invalido");
  } else {
    return alert("Campo valido");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validaCampo(campoa.value, campob.value);
});
