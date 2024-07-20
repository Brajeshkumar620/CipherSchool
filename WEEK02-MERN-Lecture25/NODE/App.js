//console.log(global);

setTimeout(()=>{
    console.log('Timed it for 2 seconds')
}, 2000)

let time= 0;
let timer=setInterval(()=>{
    time+=2;
    console.log(time, 'Seconds has passed');
    if (time >10){
        clearInterval(timer);
    }
}, 2000)
// setInterval(()=>{
//     console.log('Time interval for 2 seconds')
// }, 2000)

//UTILITY functions
console.log(__dirname);
console.log(__filename);
