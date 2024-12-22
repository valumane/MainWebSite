let ListInput = document.getElementsByClassName('inpt');
function RdmInt(max) {
    return Math.floor(Math.random() * max);
}
let colA = 3
let lineA = 3

let colB = 3
let lineB = 3


function coo(x,y,m){
    let input;
    switch (m){
        case 'a' : switch (x){
            case 0 : switch (y){
                case 0 : input = ListInput[15];break;
                case 1 : input = ListInput[12];break;
                case 2 : input = ListInput[9];break;
            }
            return input
            case 1 : switch (y){
                case 0 : input = ListInput[16];break;
                case 1 : input = ListInput[13];break;
                case 2 : input = ListInput[10];break;
            }
            return input
            case 2 : switch (y){
                case 0 : input = ListInput[17];break;
                case 1 : input = ListInput[14];break;
                case 2 : input = ListInput[11];break;
            }
            return input
        }
        return input

        case 'b' : switch (x){
            case 0 : switch (y){
                case 0 : input = ListInput[6];break;
                case 1 : input = ListInput[3];break;
                case 2 : input = ListInput[0];break;
            }
                return input
            case 1 : switch (y){
                case 0 : input = ListInput[7];break;
                case 1 : input = ListInput[4];break;
                case 2 : input = ListInput[1];break;
            }
                return input
            case 2 : switch (y){
                case 0 : input = ListInput[8];break;
                case 1 : input = ListInput[5];break;
                case 2 : input = ListInput[2];break;
            }
                return input
        }
            return input

        case 'r' : switch (x){
            case 0 : switch (y){
                case 0 : input = ListInput[24];break;
                case 1 : input = ListInput[21];break;
                case 2 : input = ListInput[18];break;
            }
                return input
            case 1 : switch (y){
                case 0 : input = ListInput[25];break;
                case 1 : input = ListInput[22];break;
                case 2 : input = ListInput[19];break;
            }
                return input
            case 2 : switch (y){
                case 0 : input = ListInput[26];break;
                case 1 : input = ListInput[23];break;
                case 2 : input = ListInput[20];break;
            }
                return input
        }
    }
}


function inveser(m){
    det(m);
    let dett = document.getElementById('resDet').value;
if(dett===0){
    document.getElementById('resDet').value = 'non inversible, car det = 0'
}
    let a = eval(coo(0, 2, m).value);
    let b = eval(coo(1, 2, m).value);
    let c = eval(coo(2, 2, m).value);
    let d = eval(coo(0, 1, m).value);
    let e = eval(coo(1, 1, m).value);
    let f = eval(coo(2, 1, m).value);
    let g = eval(coo(0, 0, m).value);
    let h = eval(coo(1, 0, m).value);
    let i = eval(coo(2, 0, m).value);

    coo(2,2,'r').value = simplify(b*f-c*e,dett)
    coo(1,2,'r').value = simplify(-1*(b*i-c*h),dett)
    coo(0,2,'r').value = simplify(e*i-f*h,dett)

    coo(0,1,'r').value = simplify(-1*(d*i-f*g),dett)
    coo(1,1,'r').value = simplify(a*i-c*g,dett)
    coo(2,1,'r').value = simplify(-1*(a*f-c*d),dett)

    coo(0,0,'r').value = simplify(d*h-e*g,dett)
    coo(1,0,'r').value = simplify(-1*(a*h-b*g),dett)
    coo(2,0,'r').value = simplify(a*e-b*d,dett)
}

function changeValue(){
    document.getElementById('colA').value = colA;
    document.getElementById('linA').value = lineA;

    document.getElementById('colB').value = colB;
    document.getElementById('linB').value = lineB;
}

function erase(m){

    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){
            coo(i,y,m).value=""
        }
    }
    document.getElementById('resDet').value=""
}

function aleatory(m){
    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){
            coo(i,y,m).value=RdmInt(10)
        }
    }
}

function AddOrMinus(c){
    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){

            coo(i,y,'r').value = eval(coo(i,y,'a').value + c +coo(i,y,'b').value)


        }
    }
}

function mult() {
    let a = eval(coo(0, 2, 'a').value);
    let b = eval(coo(1, 2, 'a').value);
    let c = eval(coo(2, 2, 'a').value);
    let d = eval(coo(0, 1, 'a').value);
    let e = eval(coo(1, 1, 'a').value);
    let f = eval(coo(2, 1, 'a').value);
    let g = eval(coo(0, 0, 'a').value);
    let h = eval(coo(1, 0, 'a').value);
    let i = eval(coo(2, 0, 'a').value);

    let j = eval(coo(0, 2, 'b').value);
    let k = eval(coo(1, 2, 'b').value);
    let l = eval(coo(2, 2, 'b').value);
    let m = eval(coo(0, 1, 'b').value);
    let n = eval(coo(1, 1, 'b').value);
    let o = eval(coo(2, 1, 'b').value);
    let p = eval(coo(0, 0, 'b').value);
    let q = eval(coo(1, 0, 'b').value);
    let r = eval(coo(2, 0, 'b').value);


    coo(0, 2, 'r').value = a * j + b * m + c * p;
    coo(1, 2, 'r').value = a * k + b * n + c * q;
    coo(2, 2, 'r').value = a * l + b * o + c * r;
    coo(0, 1, 'r').value = d * j + e * m + f * p;
    coo(1, 1, 'r').value = d * k + e * n + f * q;
    coo(2, 1, 'r').value = d * l + e * o + f * r;
    coo(0, 0, 'r').value = g * j + h * m + i * p;
    coo(1, 0, 'r').value = g * k + h * n + i * q;
    coo(2, 0, 'r').value = g * l + h * o + i * r;
}

function identite(m){


    coo(0,2,m).value = "1";
    coo(1,1,m).value = "1";
    coo(2,0,m).value = "1";

    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++)
            if(coo(i,y,m).value!=='1'){
                coo(i,y,m).value = "0"
        }
    }

}

function multBy(n){
    let num;
if (n==='a'){
    num = document.getElementById('mA').value
} else num = document.getElementById('mB').value

    for (let i=0;i<3;i++){
        for (let y = 0;y<3;y++){
            coo(i,y,'r').value = eval(coo(i,y,n).value * num)
        }
    }

}
function det(m) {
    let a = eval(coo(0, 2, m).value);
    let b = eval(coo(1, 2, m).value);
    let c = eval(coo(2, 2, m).value);
    let d = eval(coo(0, 1, m).value);
    let e = eval(coo(1, 1, m).value);
    let f = eval(coo(2, 1, m).value);
    let g = eval(coo(0, 0, m).value);
    let h = eval(coo(1, 0, m).value);
    let i = eval(coo(2, 0, m).value);

    let res = a * e * i + b * f * g + c * d * h - g * e * c - h * f * a - i * d * b;
    if (res === 0) {
        document.getElementsByTagName('p')[1].style.display = 'initial'
        document.getElementById('resDet').value = res;
    } else {
        document.getElementsByTagName('p')[1].style.display = 'none'
        document.getElementById('resDet').value = res
    }
}

function transposate(m){
    let a = eval(coo(0, 2, m).value);
    let b = eval(coo(1, 2, m).value);
    let c = eval(coo(2, 2, m).value);
    let d = eval(coo(0, 1, m).value);
    let e = eval(coo(1, 1, m).value);
    let f = eval(coo(2, 1, m).value);
    let g = eval(coo(0, 0, m).value);
    let h = eval(coo(1, 0, m).value);
    let i = eval(coo(2, 0, m).value);

    coo(0, 2, 'r').value = a;
    coo(1, 2, 'r').value = d;
    coo(2, 2, 'r').value = g;
    coo(0, 1, 'r').value = b;
    coo(1, 1, 'r').value = e;
    coo(2, 1, 'r').value = h;
    coo(0, 0, 'r').value = c;
    coo(1, 0, 'r').value = f;
    coo(2, 0, 'r').value = i;

}