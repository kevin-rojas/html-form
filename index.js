
var data=[];


function agregar(){
 var object ={
    nombre:document.getElementById("nombre").value,
    apellido:document.getElementById("apellidos").value,
    dni:document.getElementById("dni").value,
    edad:document.getElementById("edad").value,
    fecha:document.getElementById("fecha").value,
  }

  console.log(object);
  data.push(object);
  console.log(data);

}