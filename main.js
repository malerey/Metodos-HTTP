
// HTTP --> protocolo
// --> GET buscar informacion
// --> POST crear informacion
// --> PUT actualiza informacion
// --> DELETE borra informacion

// los metodos reciben PARAMETROS entre parentesis, si es mas de uno, separados por coma

// fetch recibe UN parametro obligatorio: la direccion web
// parametro opcional: UN OBJETO que contenga:
    // headers: especifican informacion sobre el fetch
    // body: la informacion que vamos a enviar, generalmente el JSON.stringify de un objeto de javascript



    // Ultima parte de la clase: un fetch adentro de otro 


    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
    .then(res => res.json())
    .then(datosClimaActual => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
      .then(res => res.json())
      .then(datosPorHora => {
      
    // solamente aqui dentro tengo acceso a datosClimaActual y datosPorHora a la vez. 
    // Si quisiera maquetar una tarjeta usando ambos datos, deberia hacerlo aqui

    })

















