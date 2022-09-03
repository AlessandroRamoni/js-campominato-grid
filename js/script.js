console.log("Sabato");

const pulsante = document.getElementById("pulsante");

pulsante.addEventListener("click", function () {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 1; i < 101; i++) {
    const cella = document.createElement("div");
    cella.className = "cell";
    cella.innerHTML = i;
    ////////////////////////////////// spostato grid.append(cella) qui
    grid.append(cella);
    cella.addEventListener("click", function () {
      console.log("stai cliccando sulla cella numero", i);
      let isEven = isNumberEven(i);

      if (isEven) {
        cella.classList.add("even");
      } else {
        cella.classList.add("odd");
      }
    });

    cella.addEventListener("dblclick", function () {
      cella.style.backgroundColor = "initial";
    });
  }
});

function isNumberEven(number) {
  return number % 2 === 0;
}

const urna = [];
while (urna.length < 100) {
  urna.push(getRandomNumber(1, 100));
  console.log(urna);
}

function getRandomNumber(min, max) {
  let range = max - min + 1;
  let random = Math.floor(Math.random() * range) + min;
  return random;
}
