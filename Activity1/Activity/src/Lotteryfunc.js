function gentic(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr){
    return arr.reduce((a,b) => a+b, 0);
}
export {gentic,sum};