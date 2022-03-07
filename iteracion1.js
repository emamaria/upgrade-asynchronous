//1.1

window.onload = function(){

    petitionApi()
    secondPetition()

}


function  petitionApi(){

const url = 'https://api.agify.io?name=michael'
const petition = fetch(`${url}`);


petition.then(resp => {
      resp.json().then(console.log)
}).catch(console.log)


}



//2.1

function secondPetition(){

   
   let button = document.querySelector("button")


   button.addEventListener("click", function(){

    let inputValue = document.querySelector("input").value

    fetch(`https://api.nationalize.io?name=${inputValue}`).then( resp => {
        resp.json().then(console.log)
    }).catch(console.log)




   })



}





