AOS.init();

const dataDoEvento = new Date("May 03, 2025 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diaAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horaAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutoAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundoAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    console.log(diaAteEvento);
    console.log(horaAteEvento);
    console.log(minutoAteEvento);
    console.log(segundoAteEvento);

    document.getElementById('contador').innerHTML = `${diaAteEvento}d ${horaAteEvento}h ${minutoAteEvento}m ${segundoAteEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);