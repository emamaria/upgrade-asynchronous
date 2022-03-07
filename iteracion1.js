
const peticion = fetch('https://api.agify.io?name=michael');


peticion.then(resp => {
      resp.json().then(console.log)
}).catch(console.log)