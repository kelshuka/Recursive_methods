
function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    } 
    if (arr.length == 2){
        return (arr[0]<=arr[1])? [arr[0],arr[1]]: [arr[1],arr[0]];
        
    }
    else {
        let n = Math.floor(arr.length / 2);
        let arr1 = arr.slice(0,n);
        let arr2 = arr.slice(n);

        return merge(mergeSort(arr1), mergeSort(arr2));      
    }
}

function merge(arr1, arr2) {
    const Sorted = [];
    while(arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            Sorted.push(arr1.shift());
        } else {
            Sorted.push(arr2.shift());
        }
    }
    const finalSorted = [...Sorted, ...arr1, ...arr2]
    return finalSorted;
}


console.log(mergeSort([3,2,1,13,8,5,0,1]));