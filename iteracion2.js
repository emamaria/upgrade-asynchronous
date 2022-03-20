//2.1

// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };


// const resultTimeOut = async() => {

//     try{
//          let result = await runTimeOut();
//      }catch(error){

//         console.log(error);
//     }

// };

// runTimeOut();


//2.2

const getCharacters = async() => {

    try{
 
     let result = await fetch('https://rickandmortyapi.com/api/character')
 
     let characters =  await result.json()
 
     console.log(characters);
 
    }catch(error){
        console.log(error);
    }
 
 }
 
 getCharacters()