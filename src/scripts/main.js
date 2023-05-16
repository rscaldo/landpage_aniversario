AOS.init();

//CRIAMOS UMA VARIAVEL TIPO DATA APONTANDO PARA UMA DATA NO FUTURO
const dataDoEvento = new Date("Oct 03, 2023 19:00:00");

//AGORA VAMOS RECUPERAR O TIMESTAMP DESSA DATA NO FUTUTO
const timeStampDoEvento = dataDoEvento.getTime();

//FUNÇÃO QUE É EXECUTADA A CADA SEGUNDO
const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);

  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horasEmMs
  );

  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horasEmMs) / minutosEmMs
  );

  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutosEmMs) / 1000
  );

  console.log(diasAteOEvento);
  console.log(horasAteOEvento);
  console.log(minutosAteOEvento);
  console.log(segundosAteOEvento);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  //CONDIÇÃO QUANDO O EVENTO JÁ PASSOU
  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = `Evento expirado`;
  }
}, 1000);
