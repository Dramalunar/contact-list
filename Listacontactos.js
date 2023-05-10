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


 function eliminarContacto(id) {
    const index = listaContactos.findIndex(contacto => contacto.id === id);

    if (index !== -1){
        listaContactos.splice(index,1)
    }
}




 agregarContacto("12345" ,"David" ,"Almeida" ,"3185106787" ,"San Gil" ,"Villa Olimpica");


eliminarContacto("12345");

console.log(listaContactos)
 




