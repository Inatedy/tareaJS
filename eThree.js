//crear un objeto con datos personales 
//nombre
//apellidos
//mail
//[arreglo de calificaciones]
//sacar promedio y agregarlo al objeto
 
let indra = {
  nombre: "Indra",
  aP: "Fuentes",
  aM: "Hernández",
  mail: "ina_tedy@hotmail.com"
}
console.log(indra)

prom =[9.6,9.4,9.2,9.0,9.2]

var suma = 0;
 
for(var x = 0; x < prom.length; x++){
  suma += prom[x];
}
var promedio = suma / prom.length;
console.log(promedio)
indra.Promedio = promedio
console.log(indra)