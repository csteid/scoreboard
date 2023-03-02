let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

const homeAddOne = document.getElementById("home-addOneBtn");
const homeAddTwo = document.getElementById("home-addTwoBtn");
const homeAddThree = document.getElementById("home-addThreeBtn");

const guestAddOne = document.getElementById("guest-addOneBtn");
const guestAddTwo = document.getElementById("guest-addTwoBtn");
const guestAddThree = document.getElementById("guest-addThreeBtn");

const newGameBtn = document.getElementById("new-gameBtn");

let homeCount = 0
homeAddOne.addEventListener("click", function(){  
   homeCount += 1;
    homeScore.textContent= homeCount;
    })
homeAddTwo.addEventListener("click", function(){  
   homeCount += 2;
    homeScore.textContent= homeCount;
    })
homeAddThree.addEventListener("click", function(){  
   homeCount += 3;
    homeScore.textContent= homeCount;
    })
    
let guestCount = 0
guestScore.textContent= guestCount;

guestAddOne.addEventListener("click", function(){  
   guestCount += 1;
    guestScore.textContent= guestCount;
    })
guestAddTwo.addEventListener("click", function(){  
   guestCount += 2;
   guestScore.textContent= guestCount;
    })
guestAddThree.addEventListener("click", function(){  
   guestCount += 3;
    guestScore.textContent= guestCount;
    })
    
newGameBtn.addEventListener("click", function(){  
    homeCount=0;
    homeScore.textContent= homeCount;
    guestCount=0;
    guestScore.textContent= guestCount;   
    })