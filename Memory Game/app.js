const cardArray=[
   {
    name:"fries",
    img:"images/fries.jpg"
   },

   {
    name:"cheeseburger",
    img:"images/cheeseburger.jpg"
   },
   {
    name:"hot-dogs",
    img:"images/hot-dogs.jpg"
   },

   {
    name:"ice-cream",
    img:"images/ice-cream.jpg"
   },
   {
    name:"milkshakes",
    img:"images/milkshakes.jpg"
   },

   {
    name:"pizza",
    img:"images/pizza.jpg"
   },


   {name:"fries",img:"images/fries.jpg"},
   {name:"cheeseburger",img:"images/cheeseburger.jpg"},
   {name:"hot-dogs",img:"images/hot-dogs.jpg"},
   {name:"ice-cream",img:"images/ice-cream.jpg"},
   {name:"milkshakes",img:"images/milkshakes.jpg"},
   {name:"pizza",img:"images/pizza.jpg"}
    

]

cardArray.sort(()=>0.5-Math.random())
//console.log(cardArray);

const gridDispaly = document.querySelector("#grid");
const resultDispaly = document.querySelector("#result");

let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]

function createBoard(){

    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute('src', "images/questionMark.jpg")
        card.setAttribute('data-id',i)
        card.addEventListener("click",flipCard)
        gridDispaly.appendChild(card);
       // console.log(card,i);
    }
}

createBoard()

function checkMatch(){

    const cards=document.querySelectorAll("#grid img")

    const optionOneId=cardsChosenIds[0];
    const optionTwoId=cardsChosenIds[1];

    console.log(cards)
    console.log("check for match")

    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute("src",'images/questionMark.jpg')
        cards[optionTwoId].setAttribute("src",'images/questionMark.jpg')
       // console.log("You have clicked the same image")
       alert("You have clicked the same image!")
    }
   
    if(cardsChosen[0]==cardsChosen[1]){
        alert("you have a match!")
        cards[optionOneId].setAttribute("src",'images/white.png')
        cards[optionTwoId].setAttribute("src",'images/white.png')

        cards[optionOneId].removeEventListener("click",flipCard)
        cards[optionTwoId].removeEventListener("click",flipCard)

        cardsWon.push(cardsChosen)
    }else{

        cards[optionOneId].setAttribute("src",'images/questionMark.jpg')
        cards[optionTwoId].setAttribute("src",'images/questionMark.jpg')
        alert("Sorry try Again!!")
    }

    resultDispaly.innerHTML=cardsWon.length

    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length==cardArray.length/2){
       
        resultDispaly.innerHTML="Congratulations You Found Them All"
    }
}

function flipCard(){
    const cardId=this.getAttribute('data-id');
    //console.log(cardArray[cardId].name)
   // console.log("clicked",cardId)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
   // console.log(cardsChosen)
    this.setAttribute("src",cardArray[cardId].img)

    if(cardsChosen.length==2){

        setTimeout(checkMatch,500)

    }
}