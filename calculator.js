const screen = document.querySelector('.display')
const btns = document.querySelectorAll('button')

//creation d'un tableau pour stockwer les elements
    let hist = [];

    //function pour afficher historique de calcule
   function history()
    {
        screen.innerHTML= hist.join("; <br>");
    }

btns.forEach(elt =>{

    if(elt.innerText != '=' && elt.innerText != 'fact' && elt.innerText != 'Round' && elt.innerText != 'hist' && elt.innerText != "AC")
   elt.addEventListener('click',e=>{
        screen.innerHTML += elt.innerText
        
    })
}) 

document.querySelector('.reset').addEventListener('click',e=>{
    screen.innerHTML="";
})

//fonction factoriel
function factoriel(){
    let num = screen.innerHTML;
    let fact = 1;
    if(num < 0 ){
        screen.innerHTML = "MATH ERROR";
        return;
    }
    for(let i=1; i<=num; i++){
        fact *= i; 
    }
  screen.innerHTML = fact;
  //implementation de la function dans different operation
  hist.push(screen.innerHTML);
    }  

document.querySelector('#equal').addEventListener('click',e=>{
    screen.innerHTML=eval(screen.innerHTML);


    //implementation de la function dans different operation
    hist.push(screen.innerHTML);
})

document.querySelector('#round').addEventListener('click',e=>{
    screen.innerHTML = Math.round(screen.innerHTML);
    //implementation de la function dans different operation
    hist.push(screen.innerHTML);
})
