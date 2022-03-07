//1.1

window.onload = function(){

    petitionApi()

}


function  petitionApi(){

const url = 'https://api.agify.io?name=michael'
const petition = fetch(`${url}`);


petition.then(resp => {
      resp.json().then(console.log)
}).catch(console.log)


}



//2.1

