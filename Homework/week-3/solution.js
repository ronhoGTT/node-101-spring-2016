var myFunc = function calculate(equation){
    var colors = require('colors');
    var elements = equation.split(' ');
    var result;
    

    console.log(elements);
    
    elements.forEach(function(val, i){
        
        if(i === 0){
            result = Number(val);
        } else if (isNaN(val)){
            switch (val){
                case '+':
                    result += Number(elements[i + 1]);
                    break;
                case '-':
                    result -= Number(elements[i + 1]);
                    break;
                case '/':
                    result /= Number(elements[i + 1]);
                    break;
                case 'x':
                    result *= Number(elements[i + 1]);
                    break;
                case '^':
                    result = Math.pow(result, Number(elements[i + 1]));
                    break;
            }
        }
    });
    
    console.log('result: ' + result);
    if(result > 0) return colors.green(result);
    if(result === 0) return colors.yellow(result);
    if(result < 0) return colors.red(result);
    

    
}

module.exports = myFunc;