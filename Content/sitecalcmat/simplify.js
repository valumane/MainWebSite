function simplify(numerator,denominator){
    var pgdc = function pgdc(a,b){
        return b ? pgdc(b, a%b) : a;
    };
    pgdc = pgdc(numerator,denominator);
    if(denominator/pgdc===1){
        return numerator/pgdc
    }
    if((denominator/pgdc)<0){
        return -1*(numerator/pgdc) + '/' + -1*(denominator/pgdc)
    }
    return numerator/pgdc +'/'+ denominator/pgdc;
}