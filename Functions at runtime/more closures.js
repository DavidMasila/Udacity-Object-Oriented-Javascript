function myCounter(){
    let count = 0;
    
    return function(){
        count +=1;
        return count;
    };
}

let counter = myCounter();
console.log(counter());