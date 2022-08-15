let arrayValue = [1, 2, 3, 4, 5];

function reversingArray(arr) {
    const tmpArr = [...arr];
    for(let i = 0; i < tmpArr.length; i++) {
        arr[i] = tmpArr[tmpArr.length - 1 - i];
    }
    return arr;
}

reversingArray(arrayValue)
console.log(arrayValue) // [5, 4, 3, 2, 1]