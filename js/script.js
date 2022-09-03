console.log("Venerdì");

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
      const isEven = isNumberEven(i);

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
