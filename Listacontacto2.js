let listaContactos = [
    {nombreyapellido:"David Almeida"},
    {nombreyapellido:"Jenifer Almeida"},
    {nombreyapellido:"Alexa Almeida"},
    {nombreyapellido:"Monica Ortiz"},
    
]

function añadirContacto(nombre,apellido) {
    let contacto = {
        nombreyapellido:nombre +" "+ apellido
    };
listaContactos.push(contacto);
}                       

añadirContacto("juan","rodriguez");



function eliminarContacto(nombreyapellido) {
    const contaborra = listaContactos.findIndex(contacto => contacto.nombreyapellido === nombreyapellido);

    if (contaborra !== -1) {
        listaContactos.splice(contaborra,1)
    }
}

eliminarContacto("Alexa Almeida")



function mostrarcontactos(lista) {
    for (let i = 0; i < lista.length; i++){
        console.log(lista[i].nombreyapellido);
    }
}

mostrarcontactos(listaContactos);