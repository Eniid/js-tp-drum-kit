document.documentElement.classList.add("js-enabled");


// Avoir une fonction qui s'execute.
// cliquer, vérifier si la touche existe
// Ajouter une class à la div 
// Ajouter une class à body -> celle de la touche
(function(){

    const DrumKit = {
        playSound(event){
        const select = event.type === "click" ? event.currentTarget.dataset.key : event.key ; 
        console.log(select);
        
        console.log(event.type);
        const audio = document.querySelector(`audio[data-key="${select}"]`);
        console.log(audio);
        if (audio){
            audio.play();
        }  
        const div_elt = document.querySelector(`div[data-key="${select}"]`) ;
        div_elt.classList.add("playing");
        document.body.className = select;
        },
    
        removeClass(event){
            event.currentTarget.classList.remove("playing");
            document.body.className = "";
        },
    
        init(){
        for(let keydiv of document.querySelectorAll("div.key")){
            keydiv.addEventListener("transitionend", this.removeClass);
            keydiv.addEventListener("click", this.playSound);
        }
        document.documentElement.addEventListener("keydown", this.playSound);
        }
    
    };
    
    
    
    DrumKit.init();
})();
