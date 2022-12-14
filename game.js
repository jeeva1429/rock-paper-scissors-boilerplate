const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

var gameLogoHands = document.getElementById("game-logo-div")
var childLogoHands = gameLogoHands.children;

var HideLogoHands = (image) =>{
    for (var ele of image){
        ele.style.display ="none"
    }
}


const rockHand = document.getElementById('rock-hand')
const paperHand = document.getElementById('paper-hand')
const scissorsHand = document.getElementById('scissors-hand')



const rockHandMachine = document.getElementById('rock-hand-machine')
const paperHandMachine = document.getElementById('paper-hand-machine')
const scissorsHandMachine = document.getElementById('scissors-hand-machine')


const machineHandimages = document.getElementById('game-hand-div-machine')
var childImages = machineHandimages.children;

var hideMachineHandImages = function(image){
    for (var ele of image){
        ele.style.display = "none"
    }
}

document.getElementById('play-again').onclick = () => {
    document.location.reload()
}

computerResults = [paperHandMachine, scissorsHandMachine,rockHandMachine]
var Humanscore = 0
var machinescore = 0
rock.onclick = () => {
    var randomNum = Math.floor(Math.random()*childImages.length)
    rockHand.style.display = "inherit"
    scissorsHand.style.display = "none"
    paperHand.style.display = "none"

    hideMachineHandImages(childImages)
    childImages[randomNum].style.display = "block"

    
   if (rockHand.alt == "rock" && computerResults[randomNum].alt == "scissors"){
    Humanscore++
    
   }

   else if (rockHand.alt == "rock" && computerResults[randomNum].alt == "paper"){
    machinescore++
   
   }
   if (Humanscore == 5){
    HideLogoHands(childLogoHands)
    document.getElementById('human-message').style.display = "inherit"
    document.getElementById('play-again').style.display = "inherit"
    
    }
    else if(machinescore == 5){
        HideLogoHands(childLogoHands)
        document.getElementById('computer-message').style.display = "inherit"
        document.getElementById('play-again').style.display = "inherit"
    }
  document.getElementById('your-score').innerHTML = Humanscore
  document.getElementById('computer-score').innerHTML = machinescore

}



scissors.onclick = () => {
    var randomNum = Math.floor(Math.random()*3)
    rockHand.style.display = "none"
    scissorsHand.style.display = "inherit"
    paperHand.style.display = "none"

    
    hideMachineHandImages(childImages)
    childImages[randomNum].style.display = "block"

    
   if (scissorsHand.alt == "scissors" && computerResults[randomNum].alt == "paper"){
    Humanscore++
    
   }
   else if (scissorsHand.alt == "scissors" && computerResults[randomNum].alt == "rock"){
    machinescore++
   
   }
    if (Humanscore == 5){
        HideLogoHands(childLogoHands)
        document.getElementById('human-message').style.display = "inherit"
        document.getElementById('play-again').style.display = "inherit"
    
        }
    else if(machinescore == 5){
        HideLogoHands(childLogoHands)
        document.getElementById('computer-message').style.display = "inherit"
        document.getElementById('play-again').style.display = "inherit"
    }
   document.getElementById('your-score').innerHTML = Humanscore
   document.getElementById('computer-score').innerHTML = machinescore

}



paper.onclick = () => {
    var randomNum = Math.floor(Math.random()*3)
    rockHand.style.display = "none"
    scissorsHand.style.display = "none"
    paperHand.style.display = "inherit"
    
   
    hideMachineHandImages(childImages)
    childImages[randomNum].style.display = "block"


   if (paperHand.alt == "paper" && computerResults[randomNum].alt == "scissors"){
    machinescore++
   }
   else if (paperHand.alt == "paper" && computerResults[randomNum].alt == "rock"){
    Humanscore++
   }
   if (Humanscore == 5){
    HideLogoHands(childLogoHands)
    document.getElementById('human-message').style.display = "inherit"
    document.getElementById('play-again').style.display = "inherit"
   }
   else if(machinescore == 5){
    HideLogoHands(childLogoHands)
    document.getElementById('computer-message').style.display = "inherit"
    document.getElementById('play-again').style.display = "inherit"
   }
   document.getElementById('your-score').innerHTML = Humanscore
   document.getElementById('computer-score').innerHTML = machinescore

}
