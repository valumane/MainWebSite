
function t(n){

    if( Number.isInteger(n*2) ){
      if (Number.isInteger( (n-1)/3 ) ){
          return n*2 + " , " + (n-1)/3
      } else return n*2
    } else if (Number.isInteger((n-1)/3)){
        return (n-1)/3
    }


}