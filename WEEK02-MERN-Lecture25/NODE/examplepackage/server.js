let http=require('http');

let server=http.createServer((req, res)=>{
    // console.log(req);
    //console.log(res);
    console.log(req.url)
    if(req.url==='/home'){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('<h1>Welcome user</h1>');
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('Lorem epsom');
    }else if( req.url==='/data'){
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end({ 'name':'John'})

    }else{
        res.writeHead(404, {'Content-type': 'text/html'})
        res.end('<h1>Page not found</h1>');
    }
})

server.listen(5500, '127.0.0.1', ()=>{
    console.log("Started the server.... Listening at port 5500")
})
