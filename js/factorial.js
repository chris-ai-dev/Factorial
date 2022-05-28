exports.factorial = function(num) {
    if(num === 0) {
        return 1;
    } else {
        return exports.factorial(num-1) * num;
    }
};

// function factorial(num) {
//     if(num ===0 ) {
//         return 1
//     }
//     //loop down from number and multiply
//     let sum = 1;
//     for(num; num  > 0; num-- ){
//         //console.log(num);
//         sum *= num;
//     }
//     return sum;
// };

// console.log(factorial(45))


