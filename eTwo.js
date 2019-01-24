//Excersice 2
//TRES variables DIA MES AÑO DAR EL DIA LETRA QUE NACIO
//CON dia 

let dia = "18"
let mes = "marzo"
let anio = "2001"
//let fecha = new Date[3]
//fecha.setMonth(mes)
//console.log(fecha)
let dateVar = dia + mes + anio
let d=new Date(dateVar);
console.log(d)


console.log(d.getDay())

let letraD=""
switch (d.getDay()){
    case 0: letraD="Domingo"
    break
    case 1: letraD="Lunes"
    break
    case 2: letraD="Martes"
    break
    case 3: letraD="Miercoles"
    break
    case 4: letraD="Jueves"
    break
    case 5: letraD="Viernes"
    break
    case 6: letraD="Sabado"
    break
}
console.log(letraD)