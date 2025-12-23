function display(zone, data) {
    let div = document.getElementById(zone);
    //je veut envoyer une ligne de texte et ecrire dans une div cet meme ligne mais stylisé 
    //.green {
    //color: #008000;
    //font-weight: bold;
    //}

    //car pour l'instant une requete dans mon html ressemble a sa
    /*<div class="background">
                <pre style="margin: 0; line-height: 125%;">
<span></span><span class="green">SELECT COUNT</span><span> </span>(<span style="color: #666">*</span>)<span> </span><span class="green">AS</span> <span>NbTitres</span> <span class="green">FROM</span> <span>Titres</span> 
<span class="green">UNION</span> <span>SELECT</span>
<span class="green">COUNT</span> <span> </span>(<span style="color: #666">*</span>)<span> </span><span class="green">AS</span> <span>NbGenres</span> <span class="green">FROM</span> <span>GenreMusical</span><span> </span>;</pre>
            </div>*/
    /* 
    donc je veut avoir cet html
    <div id="r1">
        <div onload="display('r1_1', 'SELECT COUNT(*) AS NbTitres FROM Titres' \n 'UNION' \n 'SELECT COUNT(*) AS NbGenres FROM GenreMusical;')"></div>
    </div>
    pour pas que sa fasse plusieurs requetes dans la meme div mais que sa fasse une requete par div
    */
    let keywords = ['SELECT', 'COUNT', 'AS', 'FROM', 'UNION', 'INNER JOIN', 'WHERE', 'ON', 'GROUP BY', 'DISTINCT', 'BETWEEN', 'AND', 'NOT IN', 'OR', 'EXISTS', 'MAX', 'AVG', 'DATEADD'];
    let formattedData = data;

    keywords.forEach(keyword => {
        let regex = new RegExp(`\\b${keyword}\\b`, 'g');
        formattedData = formattedData.replace(regex, `<span class="green">${keyword}</span>`);
    });

    // Remplacer les astérisques par des spans avec une couleur grise
    formattedData = formattedData.replace(/\*/g, `<span style="color: #666">*</span>`);

    // Remplacer les sauts de ligne par des balises <br> pour le HTML
    formattedData = formattedData.replace(/\n/g, '<br>');

    div.innerHTML = `<pre style="margin: 0; line-height: 125%;">${formattedData}</pre>`;
}

function displayAll() {
    display('r1', 'SELECT COUNT(*) AS NbTitres FROM Titres \nUNION \nSELECT COUNT(*) AS NbGenres FROM GenreMusical;');

    display('r2', 'SELECT COUNT (*) AS NbrTitreEcoute \nFROM Ecoute\nINNER JOIN Utilisateurs ON Ecoute . idUtilisateur = Utilisateurs . idUtilisateur\nWHERE Utilisateurs.Nom="Dupond";');

    display('r3', 'SELECT GenreMusical . Nom \nFROM Utilisateurs\nINNER JOIN ( GenreMusical\nINNER JOIN ( Ecoute\nINNER JOIN Titres ON Ecoute . idTitre = Titres . idTitre)\nON GenreMusical . idGenre = Titres . idGenre)\nON Utilisateurs . idUtilisateur = Ecoute . idUtilisateur\nWHERE Utilisateurs . Nom = " Dupond "');

    display('r4_1', 'SELECT T . Nom \nFROM Ecoute AS E\nINNER JOIN Titres AS T ON E . idTitre = T . idTitre;');
    display('r4_2', 'SELECT T . Nom , AVG ( E . DureeEcoute / T . Duree * 100 ) AS Ratio \nFROM Ecoute AS E\nINNER JOIN Titres AS T ON E . idTitre = T . idTitre\nGROUP BY T . Nom ;');

    display('r5_1', 'SELECT Ecoute . DateEcoute , Utilisateurs . idContrat , COUNT ( Utilisateurs .\n idUtilisateur ) AS NombrePersonnes \nFROM Utilisateurs \nINNER JOIN Ecoute ON Utilisateurs . idUtilisateur = Ecoute . idUtilisateur \nGROUP BY Ecoute . DateEcoute , Utilisateurs . idContrat ;');
    display('r5_2', 'SELECT MAX ( SousRequete . NombrePersonnes ) \nFROM ( \n-- Sous - requete 1\n) AS SousRequete ;');
    display('r5_3', 'SELECT MaxContrat . DateEcoute , MaxContrat . idContrat , MaxContrat . NombrePersonnes \nFROM ( \n-- sous - requete 1\n) AS MaxContrat \nWHERE MaxContrat . NombrePersonnes = ( \n-- sous - requete 2\nWHERE SousRequete . idContrat = MaxContrat . idContrat \n) \nORDER BY MaxContrat . idContrat ;');

    display('r6_1', 'SELECT 1 \nFROM Ecoute AS E2\nINNER JOIN Utilisateurs AS U2 ON E2 . idUtilisateur = U2 . idUtilisateur\nWHERE E2 . DateEcoute = #10/14/2024# \nAND U2 . idContrat = U1 . idContrat\nAND E2 . idUtilisateur <> E1 . idUtilisateur\nAND ((E1 . DateEcoute <= DATEADD( \"s\" , TIMEVALUE( E2 . DureeEcoute ), E2 . DateEcoute))\nAND (DATEADD( \"s\" , TIMEVALUE( E1 . DureeEcoute ), E1 . DateEcoute) >= E2 . DateEcoute))');
    display('r6_2', 'SELECT DISTINCT E1 . idUtilisateur , U1 . idContrat \nFROM Ecoute AS E1\nINNER JOIN Utilisateurs AS U1 ON E1 . idUtilisateur = U1 . idUtilisateur\nWHERE E1 . DateEcoute = #10/14/2024# ;');
    display('r6_3', 'SELECT idContrat , COUNT(*) AS NombrePersonnes \nFROM ( \n-- sous - requete 2\nAND EXISTS ( \n-- sous - requete 1\n)\n) AS SousRequete \nGROUP BY idContrat ;');

    display('r7', 'SELECT Titres . Nom \nFROM Titres\nWHERE Titres . idGenre = ( \n-- Sous - requete pour le genre le plus ecoute\n)\nAND Titres . idTitre NOT IN ( \n-- Titres ecoutes par M . Dupond\n);');
    display('r8', 'SELECT DISTINCT Titres . Nom \nFROM Utilisateurs\nINNER JOIN ( Titres INNER JOIN Ecoute ON Titres . idTitre = Ecoute . idTitre )\nON Utilisateurs . idUtilisateur = Ecoute . idUtilisateur\nWHERE Titres . idGenre = ( \n-- Requete pour le genre le plus ecoute\n)\nAND Utilisateurs . Nom <> \"Dupond\" ;');

    display('r9_1', 'SELECT Titres . Nom \nFROM Titres INNER JOIN ( Utilisateurs INNER JOIN Ecoute ON Utilisateurs . idUtilisateur = Ecoute . idUtilisateur ) ON Titres . idTitre = Ecoute . idTitre ;');
    display('r9_2', 'SELECT DISTINCT Titres . Nom \nFROM Titres INNER JOIN ( Utilisateurs INNER JOIN Ecoute ON Utilisateurs . idUtilisateur = Ecoute . idUtilisateur ) ON Titres . idTitre = Ecoute . idTitre \nWHERE Utilisateurs . DateNaissance BETWEEN \nDATEADD( \"yyyy\" , -5 , ( SELECT DateNaissance FROM Utilisateurs WHERE Nom = \"Dupond\" ) ) AND DATEADD( \"yyyy\" , 5 , ( SELECT DateNaissance FROM Utilisateurs WHERE Nom = \"Dupond\" ) ) ;');

    display('r10_1', 'SELECT DISTINCT Titres . idGenre \nFROM Utilisateurs INNER JOIN ( Titres INNER JOIN Ecoute ON Titres . idTitre = Ecoute . idTitre ) ON Utilisateurs . idUtilisateur = Ecoute . idUtilisateur \nWHERE ( Utilisateurs . Nom = \"Dupond\" AND Ecoute . DureeEcoute < Titres . Duree );');
    display('r10_2', 'SELECT Titres . Nom , COUNT( Ecoute . idTitre ) AS NombreEcoutes \nFROM Titres INNER JOIN Ecoute ON Titres . idTitre = Ecoute . idTitre \nWHERE Titres . idGenre NOT IN ( \n-- Genres ecoute partiellement par M . Dupond\n) \nGROUP BY Titres . Nom ;');

}