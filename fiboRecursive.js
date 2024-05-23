
function fibsRec(n){
    if(n<=2) {
        return [0,1];
    }
    if (n<=3) {
        return [0,1,1];
    }

    const a= fibsRec(n-1);
    a.push(a[n-2] + a[n-3]);
    return a;
}

console.log(fibsRec(3));
console.log(fibsRec(8));

/* function fibsRec(n){
    if (n == 0) return [0];
    if (n==1) return [0,1];
    const arr = fibsRec(n-1);
    console.log(arr);
    return [...arr, arr[n-1]+ arr[n-2]]
} */

