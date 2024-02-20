const nameEl = document.getElementById("nome");
const emailEl = document.getElementById("email");
const cepEl = document.getElementById("cep");
const latitudeEl = document.getElementById("latitude");
const longitudeEl = document.getElementById("longitude");
const btn = document.getElementById("btn");
const allInput = document.querySelectorAll("input");

function checkForError(e) {
  allInput.forEach((element) => {
    if (!element.value) {
      element.placeholder = "Esse campo e obrigatorio";
      element.classList.add("error");
    }
  });
}

async function cepApi() {
  try {
    const response = await fetch("https://viacep.com.br/ws/03212010/json");
    return await response.json();
  } catch (erro) {
    console.log(erro);
  }
}

async function tempApi() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&timezone=America%2FSao_Paulo"
    );
    return (data = await response.json());
  } catch (error) {
    console.log(error);
  }
}

async function handleClick() {
  const cep = await cepApi();
  const weather = await tempApi();

  console.log(cep);
  console.log(weather);
}

btn.addEventListener("click", () => {
  event.preventDefault();
  handleClick();
});
