import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { etudiants , listeEtu } from'./etudiants.js';


const barre = document.querySelector(".barre");
const entre = barre.querySelector("input");
const suggestion = barre.querySelector(".suggestionliste");

entre.onkeyup = (e) => {

    let userdata = e.target.value; // target = element qui à déclenché l'event donc la : valeur de e.target 
    let table = [];

    if(userdata){ // si l'entrée n'est plus vide 

        table = listeEtu.filter( (e) => { 
            // ?? return fonctionne pas / mais console.log(e.tolocal) .. si -> affiche en minuscule. (posé en question pk)
            return e.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
            // retourne toute chaine de char commençant par userdata 

        });

        table = table.map( (e)=> { // met tout les résultat trouvés en ligne de tab 
            return e = '<li>'+ e +'</li>';
        });

        console.log(table);
        barre.classList.add("active");
        show(table);

        let listesuggestion = suggestion.querySelectorAll("li");
        
        for(let i = 0; i < listesuggestion.length ; i++){
            listesuggestion[i].addEventListener("click", () => {
                entre.value = listesuggestion[i].textContent;
                barre.classList.remove("active");
            })
        }

    }else{
        //userdate devient null donc les suggestion disparairent
        barre.classList.remove("active");
    }
   
};



//Attribuer les elements de 'table' trouvés aux suggestions à affichée

let show = (e) => {
    let liste;
    let uservalue;

    if(!e.length){

        uservalue = entre.value;
        liste = '<li>'+ uservalue +'<li>';

    }else{
        liste = e.join(" ");
        
    }
    suggestion.innerHTML = liste; // ici 2 , = return e = '<li>' + e + '</li>' de toute chaine commençant par userdata
}



// python3 -m http.server 8000

let loupe = barre.querySelector(".loupe");
let erreur = document.createElement("p");
loupe.addEventListener("click", () => {
    for(let i = 0 ; i < listeEtu.length ; i++){
        if(listeEtu[i] == entre.value) loupe.href = "./index1.html"; // créer ici la variable stocker 
        else erreur.classList.add("msg") ; erreur.textContent = "etudiant inconnu , réesayer";
    }
    document.body.appendChild(erreur);
});


console.log(listeEtu);



/*

autre manière de faire : youtube Auto Complete Search Bar Using (JavaScript) Your Advance Way to Search
tab style : Styling HTML tables with CSS - Web Design/UX Tutorial


explication des grande fonction du code sur papier apres dans un (readme ?)

tache : 

quand j'appuie sur entrer ou la loup sa me renvoie vers une nouvelle page 

commencer par regarder les x2 video : node js 3/6 et Node.js + Express - Tutorial - GET and POST Requests

*/

//-------------

//renommer certains variables

// ------ afficher chaque nom de matiere ..

// let notes = etudiants[20324454];
// let cours = Object.keys(notes);
// cours.forEach(e => console.log(e));

