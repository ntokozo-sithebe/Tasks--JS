 
 //TASK1 DONE
 
//  let thePromise = new Promise(numb)

//  function numb(resolve, reject){
//     let numb1 = +prompt (`Enter number`)
//    let numb2 = +prompt(`Enter number 2`)
//     if(typeof numb1, numb2 == 'number')
//     resolve(`${numb1 + numb2}`)
//   reject(`numbers were not a number`)
    
//  }thePromise.then(   
//      correct=>console.log(correct),
//      reject=>console.log(reject)

//  )
 

// TASK2

// fetch API

// let card = document.querySelector('[data-display]')


fetch(`https://randomuser.me/api?results=20`)
.then(data=>data.json())
.then(result=>{
    let {results} = result;
    results.forEach( people=>{
        console.log(result);
        card.innerHTML +=
`
        <div class="card" style="width: 18rem;">
  <img src="${people.picture.large}" 
  class="card-img-top" alt="${people.name.first}">
  <div class="card-body">
    <h5 class="card-title">${people.name.last}</h5>
    <p class="card-text">${people.registered.age}</p>
    
  </div>
  </img>
  </div> `
})


}) 

//sort = buuton tuggle buuton 
// let firstName = results
// let thePromise = new Promise (looking)
// function looking(resolve, reject){


 

// 3. array 
// local storage 




// add function inside your fetch 


// let friends = []
// btnSearch = document.querySelector('[data-search]')

// function addFriends(){
//     let name = document.querySelector('[data-input]').value

//     friends.push(name)
//     localStorage.setItem(friendsName, JSON.stringify(friends));

//     displayFriendsName()
// }                                                              

// document.querySelector('[data-search]').addEventListener('click', addFriends )

 // everytime you click on the button the button must add the names to the array and save

// function displayFriendsName(){
//     let theNames = JSON.parse(localStorage.getItem('friendsName'))
    
    // if(theNames) {
    //     listWrapper.innerHTML = ""
    //     theNames.forEach( people=> {
    //         listWrapper.innerHTML +=
    //         `<li>${people}</li>`
    //     })
    // }else {
    //     listWrapper.innerHTML = 'No data'
    // }
// }
// displayFriendsName()








   




