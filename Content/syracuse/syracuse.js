//usual variable
let tmp = 0;
let flightsList = [];
let maxnfly;


let tempoplist = [];
let tempflight = []


let maxflyList =[]
let alllist=[];


function first(n){
    alllist=[]
    let tempiter=0;
    while (tempiter<=n){
        go(tempiter);
        tempiter+=1;
        progression(tempiter,n);
    }

    return alllist
}


function go(arg) {


tempflight = []
    //defined used variable
    tmp = arg;
    let n, iter = 0; //
    n = arg;
    nn = n;
    aff = n.toString() + "-";
    let oplist = [];



    let nmx = 1;
    while (n > 1) {
        if (n % 2 === 0) { //si n est pair -> n/2, si n est impair -> (n*3)+1
            n = n / 2
        } else {
            n = ( n * 3 ) + 1
        }
        iter += 1;
        aff = aff + n.toString() + "-";

        oplist.push(n);
        alllist.push(n);

        tempflight.push(iter.toString())
    }
    tempoplist=oplist


    nmx = Math.max(...oplist); //plus haut chiffre parcourue



    //find the highest flight time
    flightsList.push(iter); //add current flight time in list of all flight time
    if (iter === Math.max(...flightsList)) { //if the current flight time is the longest
        maxnfly = tmp;              //save the current studying number for display it
    }


    //delete the most useless part of the list, to not exceed the limitation of google chrome navigator (5m itteration)
    if (flightsList[0] !== Math.max(...flightsList)) { //if the first fly tim on the list is not the longest, his delete
        flightsList.shift();
    }


    if (flightsList[flightsList.length - 1] !== Math.max(...flightsList)) { //if the last fly time on the list is not the longest, his delete
        flightsList.pop();
    }


    maxflyList.push( Math.max(...flightsList) )


    //affiche les resultats
    document.getElementById('opelist').innerText = " liste d'operation : " + aff;
    document.getElementById('nmx').innerText = "nmax : " + nmx;
    document.getElementById('flyList').innerText = 'List des vols : [' + flightsList + ']';
    document.getElementById('nbr').innerText = "nombre etudié : " + nn;
    document.getElementById('flight').innerText = " temps de vol :" + iter;
    document.getElementById('longerFlight').innerText = 'plus long vol :' + Math.max(...flightsList) + ' avec ' + maxnfly;


   //mise a jour du graphique
myChart.options.plugins.title.text = ("nombre parcouru pour : " + tmp);
myChart.data.labels = tempflight;
myChart.data.datasets[0].data = tempoplist
myChart.update();

}





//fonction pour etudié un nombre en particulier
function study(){
    go(eval(document.getElementById("mano").value))
}
function studyto(){
    GhostNumber(trier(first(eval(document.getElementById("gna").value))))
}


//accroit le nombre etudier
function increase() {
    tmp += 1;
    go(tmp);
}
//deccroit le nombre etudier
function decrease() {
    tmp -= 1;
    go(tmp);
}

//--------accroissement automatique------------

//on,off l'accroissement automatique
let temp = 0;

//accroit automatiquement
function start() {
    temp += 1;
    repeat = setInterval(increase, 0);
    if (temp === 1) {
        document.getElementById('start').style.display = "none";
        document.getElementById('stop').style.display = "initial";
    }
}
//arrete l'accroissement
function stop() {
    temp -= 1;
    document.getElementById('start').style.display = "initial";
    document.getElementById('stop').style.display = "none";
    clearInterval(repeat);
}

//affiche le menu des parametre ou non
let tempmenu = 0;
function onoffmenu(){
    if(tempmenu===0){
        document.getElementById("menu").style.display="initial"
        tempmenu = 1
    } else {
        document.getElementById("menu").style.display="none"
        tempmenu = 0
    }
}

//----------Option graphique --------------


//active l'animation du graphique
let temponoffanim = 1;
function onoffanim(){
    if(temponoffanim===0){
        document.getElementById("onanim").style.display="initial"
        document.getElementById("offanim").style.display="none"
        myChart.options.animation.duration = 550
        temponoffanim = 1
    } else {
        document.getElementById("offanim").style.display="initial"
        document.getElementById("onanim").style.display="none"
        myChart.options.animation.duration = 0
        temponoffanim = 0
    }
}

//affiche ou non la liste d'operation
let temponoffopelist = 0;
function onoffopelist(){
    if(temponoffopelist===0){
        document.getElementById("onopelist").style.display="initial"
        document.getElementById("offopelist").style.display="none"

        document.getElementById("opelist").style.display="none"

        temponoffopelist = 1
    } else {
        document.getElementById("offopelist").style.display="initial"
        document.getElementById("onopelist").style.display="none"

        document.getElementById("opelist").style.display="initial"


        temponoffopelist = 0
    }
}

//affiche ou non ghost number menu
function onoffgnmenu(){
    if(document.getElementById("gn").style.display==="none"){
       document.getElementById("gn").style.display="initial"
    } else {
       document.getElementById("gn").style.display="none"
    }
}

