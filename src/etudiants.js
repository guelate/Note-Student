
let intervalMAX = (min,max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let etudiants = {

    Coyce : {
        note : {
            Anglais : {
                2 : [intervalMAX(5,10),intervalMAX(8,11),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Web : {
                5 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Logique : {
                3 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Algo : {
                4 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
        },
    },

    Carla : {

        note : {
            anglais : {
                2 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            web : {
                5 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Logique : {
                3 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Algo : {
                4 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
        },
    },

    Brice : {

        note : {
            Anglais : {
                2 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Web : {
                5 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Logique : {
                3 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Algo : {
                4 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
        },
    },

    Paul : {
        note : {
            Anglais : {
                2 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Web : {
                5 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Logique : {
                3 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
            Algo : {
                4 : [intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20),intervalMAX(0,20)],
            },
        },
    },
};

let mati??res = []; // tab matiere construite .
let notesTab = []; // tab de notes construite .
let taille = []; // tab de nb de note par mati??res pour l'ensemble des ??tudiants.
let listeEtu = []; // tab d'??tudiant.


// Parcour l'object 

let Parcour = () => Object.keys(etudiants).forEach(e => {
    listeEtu.push(e);
    let id = etudiants[e];
    let cours = etudiants[e].note;
    let notes = Object.keys(cours); // tab avec toute les mati??res 
    
    notes.forEach(x => {
        mati??res.push(x);
        let idTab = cours[x]; //tab de note : 4 : [8,8,10,12],
        let coef = Object.keys(idTab);
        //console.log(idTab);// tab de coef 

        coef.forEach(y => {
            let resultats = idTab[y];// tab de note uniquement [8,8,10,12]
            taille.push(resultats.length);
            Object.values(resultats).forEach(e => notesTab.push(e));   
         });
    });
});

Parcour();
console.log(listeEtu);

export { etudiants , mati??res , notesTab , taille , listeEtu, intervalMAX, Parcour };