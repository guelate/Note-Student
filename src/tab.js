import { etudiants , matières , notesTab , taille , listeEtu,  intervalMAX,  Parcour } from'./etudiants.js';

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
    
    Taille(){

        console.log(taille);
    }
}

class Vue {

    constructor(vue){

        this.vue = vue;
        this.table = document.createElement("table");
        this.ligne = document.createElement("tr");
        this.tabLigne = [];
        this.i = 0;
        this.compteurNbnote = 0;
        this.compteurNote = 0;
    }

    Table(x){
        let i = 0;
       x.forEach( e => {
           this.ligne = document.createElement("tr");
           let titre = document.createElement("th");
           titre.textContent = e;
           this.ligne.appendChild(titre);
           this.table.appendChild(this.ligne);
           this.tabLigne.push(this.ligne);
       });

       this.vue.appendChild(this.table);
    }


    Cellule(){
        
        this.tabLigne.forEach(e => {

            for(this.compteurNbnote = 0; this.compteurNbnote < taille[this.i]; this.compteurNbnote++){
                let cellule = document.createElement("td");
                cellule.textContent = notesTab[this.compteurNote];
                e.appendChild(cellule);
                
                this.compteurNote++;
                console.log(this.compteurNbnote);
            }
            this.i++;
           
        });
    }
}


class Controller {

    constructor(){
    }

    Parcour(){

        // this.v.Table(this.m.Matières());
        // this.v.Cellule();
        //console.log("ouidd");
    
    }
}

let classe1 = new Model();
let classe2 = new Vue(document.body);
let classe3 = new Controller();
let classeM = new Mvc(classe1,classe2,classe3);

// https://codepen.io/dcode-software/pen/dLVwOY

//classeM(); //ou claseM;

//python3 -m http.server 8000