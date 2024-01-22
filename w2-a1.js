function max(numbers) {

let numberArray = numbers[0]

// 用 numbers[0] 作為基底，如果有值大於它就覆蓋，並繼續比大小下去

for(let i=0 ; i<numbers.length ; i++){
    if(numberArray<numbers[i]){
        numberArray=numbers[i]
    }
}

    return numberArray
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

