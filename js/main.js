// 2) Consegna.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Andiamo a creare la variabile per il nostro "punteggio".

let punti = [];

// Andiamo a creare una costante e colleghiamo il nostro "container-square".

const myContainerSquare = document.getElementById("container-square");

console.log(myContainerSquare);

// Andiamo a creare una variabile per collegare il nostro "bottone".

let myButton = document.getElementById("mybutton");

// Andiamo a creare una variabile per collegare il nostro "main".

let myMain = document.getElementById("mymain");

//Vado ad aggiungere la classe "hidden" a "myMain". 

myMain.classList.add("hidden");

// Andiamo a creare una variabile per il nostro punteggio.

let myPunteggio = document.getElementById("mypunteggio");

//Vado ad aggiungere la classe "hidden" a "myMain". 

myPunteggio.classList.add("hidden");

// Andiamo a creare una variabile per il nostro punteggio.

let myPoints = document.getElementById("mypoints");

//Vado ad aggiungere la classe "hidden" a "myMain". 

myPoints.classList.add("hidden");

// Andiamo a creare una variabile per il nostro punteggio.

let gameOver = document.getElementById("gameover");

//Vado ad aggiungere la classe "hidden" a "myMain". 

gameOver.classList.add("hidden");

// Andiamo a settare il nostro bottone.

myButton.addEventListener("click",

    function(){

        punti = [];

        console.clear();
        myPoints.innerHTML = '';

        // Andiamo a rimuovere la classe "hidden" al nostro "main", "punteggio", "punti".

        myMain.classList.remove("hidden");

        myPunteggio.classList.remove("hidden");

        myPoints.classList.remove("hidden");


        // Andiamo ad inserire "innerHtml" con una stringa "vuota" e la "console.clear" per resettare la "Console" e il "Container" per non generare altre square al click di "play".
        
        myContainerSquare.innerHTML = '';
        console.clear();

        // 13)Andiamo a creare un array di 100 numeri includendo le 16 Bombe.

        const myArrayNumBomba = genArrayNumUniciRandomMinMax(16, 1, 100);
        console.log(myArrayNumBomba);

        gameOver.classList.add("hidden");

        // 1) Andiamo a creare un ciclo "for" da 1 a 100.

        for(let i = 1; i <= 100; i++){

            // 7) Andiamo a creare una variante per collegare la "Funzione".

            let newElement = createSquare("div", "square");
            // console.log(newElement);

            // 8) Andiamo a creare il "clicked" per le nostre "square".

            newElement.addEventListener("click",

                function(){

                    newElement.classList.toggle("clicked");


                    console.log("Hai selezionato la square n. ", i);

                    // 14 Andiamo a creare una condizione per le "square" e le "bombe".

                    if(myArrayNumBomba.includes(i)){
                        // Aggiungo la classe "bomba".
                        this.classList.add("bomba");
                        gameOver.classList.remove("hidden");
                        gameOver.innerHTML = `Hai perso! il tuo punteggio è di: ${punti}`;
                        myPunteggio.classList.add("hidden");
                        myPoints.innerHTML = '';
                        myMain.classList.add("hidden");
                        console.clear();
                    }else{
                        // Aggiungo la classe "punti".
                        this.classList.add("punti");
                        punti ++;
                        // Andiamo a creare una variabile per il nostro "Nuovo Punteggio".
                        let nuoviPunti = punti;
                        myPoints.innerHTML = nuoviPunti;
                    }
                    // newElement.classList.toggle("clicked");

                    // console.log("Hai selezionato la square n. ", i);

                    // era il n.7) Aggiungiamo al nostro "newElement" la scritta "i" che andrà ad inserire i relativi numeri (1,2,3,4,5, etc...).

                    newElement.innerHTML = (i);

                }, {once : true}
            )

            myContainerSquare.appendChild(newElement);


            // 7) Aggiungiamo al nostro "newElement" la scritta "i" che andrà ad inserire i relativi numeri (1,2,3,4,5, etc...).

            // newElement.append(i);

            // console.log(newElement, i)
        }
    }
)

// 2) Andiamo a creare la nostra "Funzione" per creare i div.

function createSquare() {

    // 3) Andiamo a creare i nostri "div".

    const myElement = document.createElement("div");

    // 4) Andiamo ad aggiungere la nostra classe ".square" ai "div".

    myElement.classList.add("square");

    // 5) Ritorno.

    return myElement
}

// 9) Andiamo a creare la nostra "Funzione" per generare i numeri random da "1" a "100", includendo i "16" che saranno le nnostre bombe.

function randomNumber(min, max){
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

// 10) Generiamo un numero Random "min - max".

function genArrayNumUniciRandomMinMax(howMany, minNum, maxNum){

    const newArr = [];

    // 11) Generiamo un array di howMany elementi.
    while (newArr.length < howMany){
        let newNumber = randomNumber(minNum, maxNum);

        // 12) Andiamo a creare la condizione se i numeri "non sono presenti" di inserirli.

        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }

    return newArr;
}



