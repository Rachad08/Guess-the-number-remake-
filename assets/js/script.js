function stargame() {
    let n = Math.floor(Math.random() * 10);
    const input = document.querySelector(".input-field");
    const msg = document.getElementById("msg");
    const att = document.getElementById("attempts");
    let i = 3;
    const winSound = document.getElementById("winsong");
    const loseSound = document.getElementById("losesong");
    const restartButton =document.getElementById("restart");
    const guess = document.getElementById("button");

    guess.addEventListener("click", function (){  
        let num = parseInt(input.value);
                 
        if (isNaN(num) || num < 0 || num > 9) {
            msg.textContent = "Veuillez entrer un nombre entre 0 et 9.";
            input.value = "";
            return;
        }
        if (num === n) {
            msg.textContent = "Bravo ! Vous avez trouvé le nombre mystère : " + n + ".";
            document.querySelector(".attempts-left").style.display = "none";
            musique.pause();
            winSound.currentTime = 0; 
            winSound.play();
            winSound.volume = 0.7;
            winSound.onended = () => {
                winSound.pause();
                musique.play();
                winSound.currentTime = 0; // Réinitialiser le son pour la prochaine fois
            };
            document.querySelector("input").style.display = "none";
            document.querySelector("button").style.display = "none";
            restartButton.style.display = "block";
            restartButton.style.height = "45px";
        } else { i--;
            if (i === 0) {
                
                msg.textContent = "Désolé, vous avez épuisé vos tentatives. Le nombre mystère était " + n + ".";
                document.querySelector(".attempts-left").style.display = "none";
                musique.pause();
                loseSound.currentTime = 0; 
                loseSound.play();
                loseSound.volume = 1;
                loseSound.onended = () => {
                    loseSound.pause();
                    musique.play();
                    loseSound.currentTime = 0; // Réinitialiser le son pour la prochaine fois
                };
                document.querySelector("input").style.display = "none";
                document.querySelector("button").style.display = "none";
                restartButton.style.display = "block";
                restartButton.style.height = "45px";
        } else {
            msg.textContent = "Mauvais choix ! Le nombre mystère n'est pas " + num + ".";
            att.textContent = i;
        }
        }
        input.value = "";
        // }
    });

    input.addEventListener("keydown" , (event)=>{
    if (event.key == "Enter"){
        guess.click()
    }
    
})

    restartButton.addEventListener("click" , (event)=>{
        location.reload();
        
    })

}
const musique = new Audio("assets/ressources/calmly-30-sec-edit-301145.mp3");
musique.load();
musique.loop = true;
musique.volume = 0.2;

document.getElementById("start-game").addEventListener("click", () => {
    musique.play(); 
});



stargame();    
