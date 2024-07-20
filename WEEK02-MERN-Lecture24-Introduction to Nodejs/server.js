//intro to node Js

const addNumbers=(...args)=>{
    let sum = 0;
    args.forEach((arg)=>sum+=arg);
    return sum;
  };
  
  console.log(addNumbers(4,5,1,-2,10,5));

//creating node server
  const http = require("http");

const server = http.createServer((req, res)=>{
  res.write("This is some response from your first Node.js server");
  res.end();
});

server.listen(8080,() => {
 console.log("Server is running");
});
