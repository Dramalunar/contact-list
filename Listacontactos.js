let listaContactos = [];

function agregarContacto(id ,nombre ,apellido ,telefono ,ciudad ,direccion) {
 let contacto = {
    id: id,
    nombre:nombre,
    apellido:apellido, 
    telefono:telefono,
    ubicaciones: {
        ciudad: ciudad,
        direccion: direccion 
    }
 };   
  listaContactos.push(contacto);
 }


 agregarContacto("1005480","David","Almeida","3185106787","San Gil","Cra 20#12-30")
 agregarContacto("1005480","David","Almeida","3185106787","San Gil","Cra 20#12-30")
 console.log(listaContactos)


 function eliminarContacto(id) {
  const index = listaContactos.findIndex(contacto => contacto.id === id);

  if (index !== -1){
      listaContactos.splice(index,1)
  }
}

let ventanaRellenar = document.querySelector("#ventanaRellenar");
const btnOk = document.getElementById("btnOk");
 document.getElementById(`botonAñadir`).addEventListener(`click`,(event) => {
    event.preventDefault();
    const id = document.getElementById(`inputId`).value;
    const nombre = document.getElementById(`inputNombre`).value;
    const apellido = document.getElementById(`inputApellido`).value;
    const telefono = document.getElementById(`inputTelefono`).value;
    const ciudad = document.getElementById(`inputCiudad`).value;
    const direccion = document.getElementById(`inputDireccion`).value;

    if(id=== ""||nombre=== ""||apellido=== ""||telefono=== ""||ciudad=== ""||direccion=== "") {
      ventanaRellenar.classList.add("mostrarRellenar");
      
      btnOk.addEventListener(`click`, () =>{
        ventanaRellenar.classList.remove("mostrarRellenar");
    });
    
      return;
    }
    
    
    agregarContacto(id,nombre,apellido,telefono,ciudad,direccion)



    document.getElementById(`inputId`).value = ``;
    document.getElementById(`inputNombre`).value = ``;
    document.getElementById(`inputApellido`).value = ``;
    document.getElementById(`inputTelefono`).value = ``;
    document.getElementById(`inputCiudad`).value = ``;
    document.getElementById(`inputDireccion`).value = ``;



  const tablaDatos = document.querySelector('.tablaDatos tbody');
  const newRow = tablaDatos.insertRow();
  newRow.setAttribute("data-id", id)
  newRow.innerHTML = `
    <td class="idTabla">${id}</td>
    <td class="nombreTabla">${nombre}</td>
    <td class="apellidoTabla">${apellido}</td>
    <td class="telefonoTabla">${telefono}</td>
    <td class="ciudadTabla">${ciudad}</td>
    <td class="direccionTabla">${direccion}</td>
    <td><button class= "btnEliminar" data-id="${id}"><i class="fa-solid fa-trash-can"></i></button></td>
    <td><button class="btnEditar" data-id="${id}"><i class="fa-solid fa-pen-to-square"></i></button></td>
  `;

const btnEliminar = newRow.querySelector(".btnEliminar");
btnEliminar.addEventListener("click",() =>{
  mostrarConfirmacion(id)
})


function mostrarConfirmacion(id){
  const ventanaEmergente = document.getElementById("ventanaEmergente");
  const btnConfirmar = document.getElementById("btnconfirmar");
  const btnCancelar = document.getElementById("btncancelar");

  ventanaEmergente.classList.add("mostrar");

  btnConfirmar.addEventListener("click", () =>{
  eliminarContacto(id);
  eliminarFila(id);
  ventanaEmergente.classList.remove("mostrar");
});

btnCancelar.addEventListener("click", () => {
  ventanaEmergente.classList.remove("mostrar");
});
}

function eliminarFila(id){
  const fila = document.querySelector(`tr[data-id="${id}"]`);
  if(fila){ 
  fila.remove();
  }
}


//Boton de editar


let ventanaEditar = document.getElementById("editarContacto");


const btnEditar = newRow.querySelector(".btnEditar");
btnEditar.addEventListener("click", () => {
  mostrarEdicion(btnEditar);
});


function mostrarEdicion(elementoBoton) {
  const btnEditarCance = document.getElementById("btnEditarCance");
  const dataId = elementoBoton.getAttribute("data-id");
  ventanaEditar.classList.add("mostrarEditar");


  btnEditarCance.addEventListener("click", () => {
    ventanaEditar.classList.remove("mostrarEditar");
  });

  btnGuardar.addEventListener("click", () => {
   actualizarContacto(dataId)
  });
}


function actualizarContacto(id){

  const idNueva = document.getElementById("inputIdNueva").value;
  const nombreNueva = document.getElementById("inputNombreNueva").value;
  const apellidoNueva = document.getElementById("inputApellidoNueva").value;
  const telefonoNueva = document.getElementById("inputTelefonoNueva").value;
  const ciudadNueva = document.getElementById("inputCiudadNueva").value;
  const direccionNueva = document.getElementById("inputDireccionNueva").value;
  
  const fila = tablaDatos.querySelector(`tr[data-id="${id}"]`);
  
  const idTabla = fila.querySelector(".idTabla");
  const nombreTabla = fila.querySelector(".nombreTabla");
  const apellidoTabla = fila.querySelector(".apellidoTabla");
  const telefonoTabla = fila.querySelector(".telefonoTabla");
  const ciudadTabla = fila.querySelector(".ciudadTabla");
  const direccionTabla = fila.querySelector(".direccionTabla");
  
  const contactoEditar = listaContactos.find((contacto) => contacto.id === id);
  
  if (contactoEditar) {
    contactoEditar.id = idNueva;
    contactoEditar.nombre = nombreNueva;
    contactoEditar.apellido = apellidoNueva;
    contactoEditar.telefono = telefonoNueva;
    contactoEditar.ubicaciones.ciudad = ciudadNueva;
    contactoEditar.ubicaciones.direccion = direccionNueva;
  
    idTabla.innerText = idNueva;
    nombreTabla.innerText = nombreNueva;
    apellidoTabla.innerText = apellidoNueva;
    telefonoTabla.innerText = telefonoNueva;
    ciudadTabla.innerText = ciudadNueva;
    direccionTabla.innerText = direccionNueva;
  }
  
  ventanaEditar.classList.remove("mostrarEditar");
}



  });




 

 