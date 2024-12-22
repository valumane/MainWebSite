
function supprimerDoublons(tableau) {
    liste = [...new Set(tableau)]
    return liste;
}
function trierListe(liste) {
    liste =  liste.sort(function(a, b) {
        return a - b;
    });
    return liste
}

function chercherElement(liste, element) {
    return liste.includes(element);
}

function trier(l){
    alllist =  trierListe(supprimerDoublons(l))
    return alllist;
}

let ListGhost=[]
function GhostNumber(l){
    let llenght = l.length-1;
    let max= l[llenght];
    console.log("triage et recherche en cours")
    for (let i=0 ;i < max ; i++){
       if(chercherElement(l,i)===true){
       } else {
           ListGhost.push(i)
       }

    }
    console.log(ListGhost)
    return ListGhost;
}


function progression(a,b){
    if((a*100/b)===5){ console.log("5%")}
    if((a*100/b)===10){ console.log("10%")}
    if((a*100/b)===15){ console.log("15%")}
    if((a*100/b)===20){ console.log("20%")}
    if((a*100/b)===25){ console.log("25%")}
    if((a*100/b)===30){ console.log("30%")}
    if((a*100/b)===35){ console.log("35%")}
    if((a*100/b)===40){ console.log("40%")}
    if((a*100/b)===45){ console.log("45%")}
    if((a*100/b)===50){ console.log("50%")}
    if((a*100/b)===55){ console.log("55%")}
    if((a*100/b)===60){ console.log("60%")}
    if((a*100/b)===65){ console.log("65%")}
    if((a*100/b)===70){ console.log("70%")}
    if((a*100/b)===75){ console.log("75%")}
    if((a*100/b)===80){ console.log("80%")}
    if((a*100/b)===85){ console.log("85%")}
    if((a*100/b)===90){ console.log("90%")}
    if((a*100/b)===95){ console.log("95%")}
    if((a*100/b)===100){ console.log("100%")}
}