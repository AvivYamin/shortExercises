function checkEqualSquare(num1, num2, num3){
    if(squareValue(num1) + squareValue(num2) === squareValue(num3)){
        return true;
    }else{
        return false;
    }
};

function squareValue(num){
    return multiplication(num, num);
};

function multiplication(num1, num2){
    return num1 * num2;
};

checkEqualSquare(3, 4, 5);