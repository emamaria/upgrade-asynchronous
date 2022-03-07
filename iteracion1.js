//1.1

window.onload = function(){

    petitionApi()

}


function  petitionApi(){
const petition = fetch('https://api.agify.io?name=michael');


petition.then(resp => {
      resp.json().then(console.log)
}).catch(console.log)


}



//2.1

