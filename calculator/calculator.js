function equivalentCheck() {//This allows the last value to remain in view until other buttons are pressed;
    if (parseInt(document.getElementById('equivalent').value)) {
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function input(x){
    // console.log('нажата кнoпка: ' + x);
    // console.log('on the table: ' + document.getElementById('result').value);
    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);  //щоб поставити крапку
    if (document.getElementById('decimalVar').value == 0) {
        x += y * 10;//Multiply the text input by 10 and add the value of x.
        document.getElementById('result').value = x; //Return x to the text output.
    } else {//if this true
        let decimalCount = parseInt(document.getElementById('decimalVar').value);
        if(decimalCount == 1) {
            x *= 1/10; //This are using math to place the decimal point.
            y += x;
            document.getElementById('result').value = y;
        } else {
            document.getElementById('result').value += x;
        } 
        decimalCount++;
        document.getElementById('decimalVar').value = decimalCount;
        
    }
    // console.log('on the table: ' + document.getElementById('result').value);
    // if (document.getElementById('result').value == 0) { //This check the zero and gets rid of it we enter a number for the first time.
    //     document.getElementById('result').value = x;
    // } else {
    //     document.getElementById('result').value += x;
    // }
}

function  decimalPoint() {
    if (document.getElementById('decimalVar').value == 0 ) {//This prevents multiple decimal points.
        document.getElementById('decimalVar').value = 1;
    }

    if (parseInt(document.getElementById('operation').value)) {//If this is an empty string, it will retutn false.
        document.getElementById('result').value = 0;
    }
}


function operandCheck() {
    if(document.getElementById('operand').value == "") {
        document.getElementById('operand').value = document.getElementById('result').value
        //document.getElementById('result').value = 0;//This is temporary.
        document.getElementById('equivalent').value = 1;
    }
    else {
        operatorCheck();
    }
}

function operatorCheck() {
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)) {
        case 1: //addition
            a += b;
            break;
        case 2: //subtaction
            a -= b;
            break;
        case 3: //multiply
            a *= b;
            break;
        case 4://division
            a /= b;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}

function operators(x) {
    
    switch (x) {
        case 1:
            document.getElementById('operation').value = 1;//addition
            break;
        case 2:
            document.getElementById('operation').value = 2;//subtraction
            break;
        case 3:
            document.getElementById('operation').value = 3;//multiplication
            break;
        case 4:
            document.getElementById('operation').value = 4;//division
            break;
        default:
    }
    operandCheck();
}

function equals() {
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
}

function allclear() {
    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
    // document.getElementById('decimalVar').value = 0;
}

function plusminus() {
    let x = parseFloat(document.getElementById('result').value);
    x *= -1;
    document.getElementById('result').value = x;
    //alert(document.getElementById('result').value + document.getElementById('result').value);
}

function percent() {
    let x = parseFloat(document.getElementById('result').value);
    x *= 0.01;
    document.getElementById('result').value = x;
}

function square() {
    let x = parseFloat(document.getElementById('result').value);
    x *= x;
    document.getElementById('result').value = x;
    console.log(x);
}



