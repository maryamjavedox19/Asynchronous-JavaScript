const request=new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState);
    if(request.readyState===4){    //state 4 means when it is done 
        console.log(request.responseText);
    }
});
//  args:   type of request,           end point                                   
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');   //  set up a request     
request.send();