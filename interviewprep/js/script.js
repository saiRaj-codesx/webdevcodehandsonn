

console.log("hello");

function myTimePromise (){
    return new Promise((resolve,reject)=>{
        const time = true
        setTimeout(()=>{
            if(time){
                resolve("Time Resolved")
            }else{
                reject("Time Rejected")
            }
        },2000)
    })
}

myTimePromise().then((ab)=>{
    console.log(ab);
    

}).catch((hell)=>{
    console.log(hell );
    
})

console.log("Bye");
