// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//       const request = new XMLHttpRequest();
//       request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//           const data = JSON.parse(request.responseText);
//           resolve(data);
//         } else if (request.readyState === 4) {
//           reject("error getting resource");
//         }
//       });
  
//       request.open('GET', resource); // Use the 'resource' parameter passed to the function
//       request.send();
//     });
//   };
  
//   getTodos('todos/luigi.json')
//     .then(data => {
//       console.log('promise resolved:', data);
//     })
//     .catch(err => {
//       console.log("promise rejected:", err);
//     });




//     //  Chaining Promises
// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolved:', data);
//     return getTodos('todos/mario.json');
//   }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('todos/shaun.json');
//   }).then(data => {
//     console.log('promise 3 resolved:', data);
//   }).catch((err) => {
//     console.log('promise rejected:', err);
//   });




// ------------fetch api---------------------------------
fetch('todos/luigi.json').then((response) => {
  console.log('resolved', response);
  return response.json(); //to get response data
}).then(data => {
  console.log(data);
}).catch((err) => {
  console.log('rejected', err);
});


