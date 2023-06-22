const myNumber=Math.floor(Math.random() * 20) + 1
let scoreCount=0

let inputNumber=document.querySelector("input")
let aboutResult=document.querySelector(".about")
let scoreResult=document.querySelector(".score-result")
let myNum=document.querySelector("h2")

function check(){
    if (!inputNumber.value || inputNumber.value>myNumber){
        aboutResult.textContent="Higher than mine...Try Again"
        aboutResult.style.color="red"
        scoreCount--
        scoreResult.textContent=scoreCount
    } else if (!inputNumber.value || inputNumber.value<myNumber){
        aboutResult.textContent="Lower than mine...Try Again"
        aboutResult.style.color="red"
        scoreCount--
        scoreResult.textContent=scoreCount
    }else{
        aboutResult.textContent="Congratulations!!!"
        aboutResult.style.color="green"
        scoreCount++
        scoreResult.textContent=scoreCount
        myNum.textContent=myNumber
    }
}

function startAgain(){
    myNum.textContent=""
    inputNumber.value=""
    scoreCount=0
    aboutResult.textContent=""
    aboutResult.style.color="blue"
    scoreResult.textContent=scoreCount

}