var http=require('http');
//Hypertext transfer protocol

let server=http.createServer((req, res)=>{
    // console.log(req);
    //console.log(res);

    res.write(200, {'Content-Type':'text/html'});
    res.end("<h1>Hello from the otherside!!!</h1>");
})

.listen(5500, '127.0.0.1', ()=>{
    console.log("Started the server.... Listening at port 5500")
})
