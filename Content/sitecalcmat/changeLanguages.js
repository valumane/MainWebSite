function language(arg){
    if(arg === 'en'){
        document.getElementsByTagName('button')[7].innerHTML = 'erase A'
        document.getElementsByTagName('button')[8].innerHTML = 'identity matrix'
        document.getElementsByTagName('button')[9].innerHTML = 'aleatory matrix'
        document.getElementsByTagName('button')[10].innerHTML = 'multiply A by'
        document.getElementsByTagName('button')[11].innerHTML = 'find the determinant'
        document.getElementsByTagName('button')[12].innerHTML = 'transposate of A'
        document.getElementsByTagName('button')[13].innerHTML = 'inverse of A'

        document.getElementsByTagName('button')[15].innerHTML = 'A + B aleatory'
        document.getElementsByTagName('button')[17].innerHTML = 'A - B aleatory'
        document.getElementsByTagName('button')[19].innerHTML = 'A * B aleatory'
        document.getElementsByTagName('button')[20].innerHTML = 'erase all'

        document.getElementsByTagName('button')[0].innerHTML = 'erase B'
        document.getElementsByTagName('button')[1].innerHTML = 'identity matrix'
        document.getElementsByTagName('button')[2].innerHTML = 'aleatory matrix'
        document.getElementsByTagName('button')[3].innerHTML = 'multiply B by'
        document.getElementsByTagName('button')[4].innerHTML = 'find the determinant'
        document.getElementsByTagName('button')[5].innerHTML = 'transposate of B'
        document.getElementsByTagName('button')[6].innerHTML = 'inverse of B'

        document.getElementsByTagName('p')[0].innerHTML = 'result'

        document.getElementsByTagName('p')[1].innerHTML = 'determinant of A = 0, the matrix is un-inversible'
    } else if(arg === 'fr'){
        document.getElementsByTagName('button')[7].innerHTML = 'effacer A'
        document.getElementsByTagName('button')[8].innerHTML = 'matrice identité'
        document.getElementsByTagName('button')[9].innerHTML = 'matrice aleatoire'
        document.getElementsByTagName('button')[10].innerHTML = 'multiplé A par'
        document.getElementsByTagName('button')[11].innerHTML = 'determinant de A'
        document.getElementsByTagName('button')[12].innerHTML = 'transposé de A'
        document.getElementsByTagName('button')[13].innerHTML = 'inverse de A'

        document.getElementsByTagName('button')[15].innerHTML = 'A + B aleatoire'
        document.getElementsByTagName('button')[17].innerHTML = 'A - B aleatoire'
        document.getElementsByTagName('button')[19].innerHTML = 'A * B aleatoire'
        document.getElementsByTagName('button')[20].innerHTML = 'tout effacé'

        document.getElementsByTagName('button')[0].innerHTML = 'effacer B'
        document.getElementsByTagName('button')[1].innerHTML = 'matrice identité'
        document.getElementsByTagName('button')[2].innerHTML = 'matrice aleatoire'
        document.getElementsByTagName('button')[3].innerHTML = 'multiplé B par'
        document.getElementsByTagName('button')[4].innerHTML = 'determinant de B'
        document.getElementsByTagName('button')[5].innerHTML = 'transposé de B'
        document.getElementsByTagName('button')[6].innerHTML = 'inverse de B'

        document.getElementsByTagName('p')[0].innerHTML = 'resultat'

        document.getElementsByTagName('p')[1].innerHTML = "determinant de A = 0, la matrice n'est pas inversible"
    }
}