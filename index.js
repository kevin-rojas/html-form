
var data=[];
//aca rellenemos nuestro array con el historial del paciente en un objeto 
var historial=[
  {
    atencion:20200502,
    sintomas:'Dolor de cabeza, Fiebre, Dolor de Huesos',
    diagnostico:'Dengue',
    receta:'Hidratacion cada hora, Descanso'
  },
  {
    atencion:20190408,
    sintomas:'Dolor abdominal',
    diagnostico:'Colicos',
    receta:'Antalgina cada 5 horas'
  },
  {
    atencion:20210606,
    sintomas:'Dolor en la rodilla izquierda, Moreton en el lado lateral',
    diagnostico:'Contusion leve por contacto',
    receta:'Frotacion Doloflam cada noche ante de acostarse, No hacer mas ejercicios'
  },
  {
    atencion:20180806,
    sintomas:'Fiebre alta, Tos, Ojos hundidos',
    diagnostico:'Gripe estacional',
    receta:'Hidratacion Descanso'
  },
]
//esto es una funcion en desarroollo que añadia paceintes ala tabla 
/*function agregar(){
 var object ={
    dni:document.getElementById("dni").value,
    fecha:document.getElementById("fecha").value,
    nombre:document.getElementById("nombre").value,
    apellido:document.getElementById("apellidos").value,
    atencion:document.getElementById("atenciones").value,

  }

  console.log(object);
  data.push(object);
  console.log(data);

  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  
  cell1.innerHTML = object.dni;
  cell2.innerHTML = object.fecha;
  cell3.innerHTML = object.nombre;
  cell4.innerHTML = object.apellido;
  cell5.innerHTML =object.atencion;
  console.log(row)
  clearInputs();
}

function clearInputs(){
  document.getElementById('dni').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('atenciones').value = '';
}*/
//aca asemos la parte logica para acer la busquedaq del historial del paceinte 
function buscarPaciente(){
    var numerodeconsulta =document.getElementById("numerodeconsulta").value;
    var modal = document.getElementById("modalconsulta");
    var numerodeconsultaencontrado= historial.find(e=>e.atencion==numerodeconsulta);
    console.log(numerodeconsultaencontrado)
    if(numerodeconsultaencontrado){
      modal.style.display = "block";
      modal.innerHTML = `

      <div class="containerInfo">
        <p class="containerInfo-text"><span style="padding-right:5px;font-weight: bold;font-family:'Roboto'">N° de atencion:</span>${numerodeconsultaencontrado.atencion}</p>
        <p class="containerInfo-text"><span  style="padding-right:5px;font-weight: bold;font-family:'Roboto'">Sintomas:</span>${numerodeconsultaencontrado.sintomas}</p>
        <p class="containerInfo-text"><span  style="padding-right:5px;font-weight: bold;font-family:'Roboto'">Diagnostico:</span> ${numerodeconsultaencontrado.diagnostico}</p>
        <p class="containerInfo-text"><span  style="padding-right:5px;font-weight: bold;font-family:'Roboto'">Receta:</span> ${numerodeconsultaencontrado.receta}</p>
      </div>
      <button onClick="hidemodal()">Cerrar</button>
    `
    document.getElementById("numerodeconsulta").value=" ";
    }else alert("paciente no encontrado");
}

function hidemodal(){
  var modal = document.getElementById("modalconsulta");
  modal.style.display = "none";
}