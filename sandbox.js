const request=new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState);
    if(request.readyState===4 && request.status===200){    //state 4 means when it is done 
        console.log(request.responseText);
    }

    else if(request.readyState===4){
        console.log("could not fetch the data");
    }
});
//  args:   type of request,           end point                                   
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');   //  set up a request     
request.send();