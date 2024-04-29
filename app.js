const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const play = ()=>{

    const config = {
        mysteryNumber: [1,100],
        maxAttempts: 10,
        attempt: []
    }

    //generer le numero mystere grace au mystery number qui se trouve dans config
    //selon le nombre d'essai maxAttempts, on va incrementer dans attempt
    //pour chaque attempt on compare avec le mystery number
    //si on gagne on affiche le numéro et le nombre d'essai et si on perd on affiche le numéro qu'il fallait trouver

    let minNumber = config.mysteryNumber[0];
    let maxNumber = config.mysteryNumber[1];

    const mysteryNumber = randomNumber(minNumber,maxNumber);
    console.log(`Nombre mistère : ${mysteryNumber}`);



    for (let i = 0; i < config.maxAttempts; i++) {
        const tempAttempt = randomNumber(minNumber, maxNumber);
        if(config.attempt.indexOf(tempAttempt) != -1) {
            i --;
        } else {
            config.attempt.push(tempAttempt);
            if(tempAttempt < mysteryNumber)  {
                minNumber = tempAttempt;
                console.log("+");
            } else if(tempAttempt > mysteryNumber) {
                maxNumber = tempAttempt;
                console.log("-");
            } else if(tempAttempt === mysteryNumber){
                console.log(`Bravo tu as gagné ! Le numéro mystère était le ${mysteryNumber}. Tu l'as trouvé au bout de ${indexAttempt + 1} essai${(i==0)?'':'s'}`);
            }
        }
    }

    console.log(`Tu as perdu... Le nombre mystère était le ${mysteryNumber}.`);
};






