// Cria um novo objeto Date
var dataAtual = new Date();

// Obtém as informações de hora, minuto e segundo
var hora = dataAtual.getHours();
var minuto = dataAtual.getMinutes();
var segundo = dataAtual.getSeconds();

// Formata a hora como string (exemplo: HH:MM:SS)
var horaFormatada = hora + ':' + (minuto < 10 ? '0' : '') + minuto + ':' + (segundo < 10 ? '0' : '') + segundo;

// Exibe uma mensagem de boas-vindas com a hora atual
alert("Bem-vindo ao CuboNinja! Você entrou às " + horaFormatada);

function atualizarRelogio() {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    horas = (horas < 10 ? '0' : '') + horas;
    minutos = (minutos < 10 ? '0' : '') + minutos;
    segundos = (segundos < 10 ? '0' : '') + segundos;

    var horaFormatada = horas + ':' + minutos + ':' + segundos;

    document.getElementById('relogio').innerHTML = horaFormatada;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Inicializa o relógio quando a página carrega
atualizarRelogio();