
function fibs(n){
    const arr = [];
    let num ; a =0; b=1;
    arr.push(a); arr.push(b)
    for (let i=1; i<n-1; i++) {
        num = a + b;
        arr.push(num);
        a=b; b=num;
    }
    return arr;
}

console.log(fibs(3));
console.log(fibs(8));