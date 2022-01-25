//CONCEVOIR DEUX TYPE DE STRUCTURE EVENT(EVENNEMENT) ET MVC(VU)   
//RENDRE CE FICHIER EN STRUCTURE EVENT 

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';  
import { etudiants , listeEtu } from'./etudiants.js';


const barre = document.querySelector(".barre");
const entre = barre.querySelector("input");
const suggestion = barre.querySelector(".suggestionliste");
let mot = "bienvu";

entre.onkeyup = (e) => {

    let userdata = e.target.value; // target == element qui à déclenché l'event donc -> e ( e == element définit ex: lettre,ligne,bouton ect..)
    let table = [];

    if(userdata){ // si l'entrée n'est plus vide 

        table = listeEtu.filter( (e) => { 

            return e.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
            //retourne vrai pour chaque element du tab listeEtu qui commence par ce qui est entrer en paramètre
            //Tout ce fais en minuscule.
            //table = reçoit le tab listEtu | porté de toLocaleLowerCas() que dans la boucle, apres la boucle tab = ListEtu + majuscule
            //toLocaleLowerCase() -> agit virtuellement : c'est une fonction() qui aura effet que dans la porté du bloc 
            // on force la modification du tab ListEtu pour tout obtenir en minuscule
            // D'ou --> return e.toLocaleLowerCase(); == renvoie en minuscule .. 

        });

        // ICI : tab aura les vlr pour lesquels on a eu un vrai mais ecrit dans l'hortographe de base avec majuscule .
        // Car : toLocaleLowerCase() agissait virtuellement avec return 

        // console.log("affichage1:",table); // du a la condition précédente si rien a été retourner table sera logiquement vide !!!
        
        table = table.map( (e)=> { // met tout les résultat trouvés en ligne de tab 

            return e = '<li>'+ e +'</li>';
        });

        // console.log("affichage2:",table); // affichage avec le rajout des ligne ( <li> )

        barre.classList.add("active");
        show(table);

        let listesuggestion = suggestion.querySelectorAll("li"); // ici on ajoute les lignes <li> dans les suggestions
        
        for(let i = 0; i < listesuggestion.length ; i++){ // Lorsque l'on clique sur un element de la liste des suggestion la valeur est entré dans la barre + la barre se range
            
            listesuggestion[i].addEventListener("click", () => {

                entre.value = listesuggestion[i].textContent;
                barre.classList.remove("active");
                

            })
        }

    }else{

        //Si l'entrée est null la barre est rangé
        barre.classList.remove("active");
    }
   
};


//AFFICHER CE QUI EST ENTRER EN PARAMÈTRE(BARRE DE RECHERCHE/DANS LE HTML) PEUT IMPORTE LA VLR 

let show = (e) => {
    let liste;
    let uservalue;

    if(!e.length){ 
        
        
        uservalue = entre.value;
        liste = '<li>'+ uservalue +'</li>';

    }else{
    
        liste = e.join(" "); // créer chaine en concaténant tout les ele du tab par des espaces ( " " ) ex: <li>Coyce</li> <li>Carla</li>
        
    }
    
    suggestion.innerHTML = liste; // texte de suggestion sera changer par la/les vlr/s correspondant dans liste (pour l'instant sans l'ajoute des <li>)
    console.log(suggestion)
    //<li> = utiliser pour représenter une liste(voir mdn) les saut de lignes <Li> sont donc automatique(logique)
    
}



// python3 -m http.server 8000

//CETTE PARTIE SERA REFAITE A L INTEGRATION DE NODE JS ?
let loupe = barre.querySelector(".loupe");
let erreur = document.createElement("p");



loupe.addEventListener("click", () => {

    for(let i = 0 ; i < listeEtu.length ; i++){

        if(listeEtu[i] == entre.value){localStorage.setItem("mot",entre.value);loupe.href = "./index1.html";}
        else{erreur.classList.add("msg"); erreur.textContent = "Etudiant inconnu , réesayer ..";}
    }
    document.body.appendChild(erreur);
});

//partie avec canvas & balise <P> en dessous 

// partie avec balise <p> 


let classe = document.getElementById("classe");
let moveleft = classe.style.left;
let x = 0;
classe.style.top = "20px";
classe.textContent = "Les étudiants de la classe sont: "+ listeEtu.join(" ");



// Pour les autres penser à faire une fonction timer qui produit setinveral -> afin de mieux controler la méthode ->
// True = activation du timer | False = désactivation du timer ou dvp les conditions (if true = setinterval() .. )
let decrementation = false;
// let tour = false;

setInterval(mouvement, 215); 

function mouvement() {
    
    classe.style.left = (moveleft + x)+"%";
    
    if(decrementation == false){x++;}
    if(decrementation == true){x = 0;}
    
    if(x == 101){decrementation = true;}
    if(x == 0 /*&& tour == false*/){decrementation = false;}
    
    console.log(x);
}


console.log("ohhho")

/*

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let a = 1000;
ctx.fillText("Les étudiants de la classe sont: "+ listeEtu.join(" "), a, 100);
ctx.font = '25px Dongle';

setInterval(mouvement, 215); 

function mouvement() {
    a++;
    if(a == 1005){a = 1000;}
    console.log(a);
}

*/

// export { mot };






/*
GIT HUB SANS CETTE PARTIE 

FAIRE LEÇON POSITION DES ELEMENTS CSS ( QUE AVEC LE POSITIONNEMENT ABSOLUE)
FINIR LEÇON LOCALSTORAGE ECT ...

Lien : https://www.youtube.com/watch?v=QxMBHi_ZiT8&t=203s 

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

