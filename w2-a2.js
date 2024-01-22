function calculate(args) {
    let number = Object.values(args);
    let output = ''
    let numberZero=parseInt(number[0])
    let numberOne=parseInt(number[1])

    if(number[2]==='+'){
        
        output= numberZero+numberOne
    }
    else if( number[2]==='-'){

        output= numberZero-numberOne
    }
    else{

        output='Not supported'
    }

    return output;

    }

    console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
    console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
    console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'