// import { etudiants , matières , notesTab , taille , listeEtu,  intervalMAX,  Parcour } from'./etudiants.js';
import { matières , notesTab , taille , listeEtu } from'./etudiants.js';
import './style1.css';

class Mvc {

    constructor(model,view,controller){
        this.m = model;
        this.v = view;
        this.c = controller;

        this.m.v = view;
        this.m.c = controller;

        this.v.m = model;
        this.v.c = controller;

        this.c.m = model;
        this.c.v = view;

        // renvoyer en premier la barre de recherche ??? 
        this.c.Parcour();
        //this.m.Taille();
        
    }
}


class Model {

    constructor(){
    }

    Matières (){

        let matièresTab = [];

        for(let i = 0; i < 4 ;i++){

            matièresTab.push(matières[i]);
        }

        return matièresTab;
    }
    
    Entête () {

        let tabb = ["Matière","Notes",null,null,null,null];
        return tabb;

    }
}

class Vue {

    constructor(vue){

        this.vue = vue;
        this.table = document.createElement("table");
        this.thead = document.createElement("thead");
        this.tbody = document.createElement("tbody");
        this.moyenne = [];
        this.tabLigne = [];
        this.i = 0;
        this.compteurNbnote = 0;
        this.compteurNote = 0;
    }

    Tableau(x,y){ //Construction du Tableau 
        
        let i = 0;
        this.table.classList.add("table");
        this.thead.classList.add("thead");

        let ligneThead = document.createElement("tr");
        this.thead.appendChild(ligneThead);
        this.table.appendChild(this.thead);

        y.forEach( e => {

            let titre = document.createElement("th");
            titre.classList.add(e);
            titre.innerHTML = e;
            ligneThead.appendChild(titre);
            i++;
            
        });

        x.forEach( e => {
            
            let ligne = document.createElement("tr");
            let titre = document.createElement("th");
            titre.innerHTML = e; // ici penser au coef aussi ?

            ligne.appendChild(titre);
            this.tbody.appendChild(ligne);
            this.table.appendChild(this.tbody);
            this.tabLigne.push(ligne);
        });
        
        this.vue.appendChild(this.table);
    }


    Cellule(){ //remplissage des lignes 
        
        
        console.log(this.tabLigne,taille);
        this.tabLigne.forEach(e => {

            for(this.compteurNbnote = 0; this.compteurNbnote < taille[this.i]; this.compteurNbnote++){

                let cellule = document.createElement("td");
                cellule.innerHTML = notesTab[this.compteurNote]; // notes 
                e.appendChild(cellule); //ajout de la cellule dans la ligne 
                this.moyenne.push(notesTab[this.compteurNote]);
                this.compteurNote++;
                
            }
            this.i++;
           
        });
        let moyenne = this.moyenne.reduce( (acc,val) => (acc + val) , 0);
        moyenne /= this.moyenne.length;
        let affichageMoyenne = document.querySelector(".moyenne");
        affichageMoyenne.innerHTML = "Votre moyenne est : " + moyenne;
    }
}


class Controller {

    constructor(){}

    Parcour(){

        this.v.Tableau(this.m.Matières(),this.m.Entête());
        this.v.Cellule();
    
    }
}



let classe1 = new Model();
let classe2 = new Vue(document.body);
let classe3 = new Controller();
let classeM = new Mvc(classe1,classe2,classe3);

classeM;


let sauvegardePrenom = localStorage.getItem("mot");

let prenom = document.querySelector(".prénom");
prenom.innerHTML = "Bienvenue sur votre relevée de notes " + sauvegardePrenom;

console.log("o")



// https://codepen.io/dcode-software/pen/dLVwOY

//classM pas classe(); (c'est une class pas une fonction)

//python3 -m http.server 8000