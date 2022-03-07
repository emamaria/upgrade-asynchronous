//1.1

window.onload = function(){

    petitionApi()
    // secondPetition()
    thirdPetition()

}


function  petitionApi(){

const url = 'https://api.agify.io?name=michale'
const petition = fetch(`${url}`);


petition.then(resp => {
      resp.json().then(console.log)
}).catch(console.log)


}



//2.1

// function secondPetition(){

   
//    let button = document.querySelector("button")


//    button.addEventListener("click", function(){

//     let inputValue = document.querySelector("input").value

//     fetch(`https://api.nationalize.io?name=${inputValue}`).then( resp => {
//         resp.json().then(console.log)
//     }).catch(console.log)




//    })

// }

//2.3

function thirdPetition(){

   
    let button = document.querySelector("button")
 
 
    button.addEventListener("click", function(){
 
     let inputValue = document.querySelector("input").value
 
     fetch(`https://api.nationalize.io?name=${inputValue}`).then( resp => {
         resp.json().then(({name, country}) => {

           let textArr = country.map( (elem, index) => {

              if(index == 0){
                return `El nombre ${name} tiene un ${elem.probability*100}  porciento de ser ${elem.country_id}`
              }else{
                return `, un ${elem.probability*100} porciento de ser ${elem.country_id}` 
              }
                

           } )

           let p = document.createElement("p")
               
           for( let i = 0; i < textArr.length; i++){

            p.innerHTML += textArr[i]
           
           }

           p.innerHTML += "."

           document.body.appendChild(p)
          

       
         })
     }).catch(err => err)
 
 
 
 
    })
 
 }





