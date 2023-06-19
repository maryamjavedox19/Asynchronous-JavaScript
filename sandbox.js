const getTodos=(callback)=>{
    const request=new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readyState);
        if(request.readyState===4 && request.status===200){    //state 4 means when it is done 
            callback(undefined, request.responseText);
        }
    
        else if(request.readyState===4){
            callback("could not fetch data", undefined);
        }
    });
    //  args:   type of request,           end point                                   
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');   //  set up a request     
    request.send();
}

getTodos((err, data)=>{
    console.log("callback fired");
    if(err){
        console.log(err);
    }

    else{
        console.log(data);
    }

});