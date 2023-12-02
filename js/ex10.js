var persona = {
 nombre : 'Jan',
 apellidos : 'Campo-Cossio Reche',
 edad : 23,
 direccion : 'C/ del pal n14',
 ciudad : 'La Pineda',
 pais : 'España'
}

function nombreApellidos(usuario){
    let nomApel = usuario.nombre+' '+usuario.apellidos;
    console.log('El nombre y apellidos de esta persona es: ',nomApel);
}

nombreApellidos(persona);