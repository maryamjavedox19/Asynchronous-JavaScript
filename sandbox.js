// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("Could not fetch data", undefined);
//     }
//   });
//     //  args:   type of request,           end point                                   
//     request.open('GET', 'resource');   //  set up a request     
//     request.send();
// }

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//       console.log(data);
//       getTodos('todos/shaun.json', (err, data) => {
//         console.log(data);
//       });
//     });
//   });
  