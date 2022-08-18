let dataAtual = new Date();
console.log("Hoje é dia: " + dataAtual);

console.log ("--------")

let dataEvento = new Date(2022,9,10);
if (dataEvento > dataAtual) {
    console.log("Evento agendado com sucesso para o dia " + dataEvento)
} else {console.log("Data inválida.")}

console.log ("--------")

let listaParticipantes = ["Adriano", " Willian", " Kali", " Arthur", " Marlon"];
console.log("Participantes cadastrados: " + listaParticipantes)

console.log ("--------")

let idadeParticipante = 15
if (idadeParticipante >= 18) {
    console.log("Entrada para o evento permitida.")
} else {
    console.log("Entrada não permitida para menores de idade.")
}
console.log("Idade do solicitante: " + idadeParticipante)

console.log ("--------")

let numeroParticipantes = 0
numeroParticipantes = listaParticipantes.length
if (listaParticipantes.length < 100) {
    console.log("Vagas disponíveis para esse evento.")
    console.log("Total de participantes cadastrados até o momento: " + listaParticipantes.length)
} else {
    console.log("Número de participantes excedido.")
}

console.log ("--------")
console.log("FIM DO PROGRAMA")