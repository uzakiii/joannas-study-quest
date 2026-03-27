
let code=""
let pass="2025"

let xp=Number(localStorage.getItem("xp"))||0
let streak=Number(localStorage.getItem("streak"))||0

const keypad=document.querySelector(".keypad")

for(let i=1;i<=9;i++){

createKey(i)

}

createKey(0)


function createKey(n){

let b=document.createElement("button")

b.innerText=n

b.onclick=()=>press(n)

keypad.appendChild(b)

}


function press(n){

code+=n

if(code===pass){

unlock()

}

if(code.length>=4 && code!==pass){

alert("Wrong passcode")

code=""

}

}


function unlock(){

document.getElementById("lockscreen").classList.add("hidden")

document.getElementById("title").classList.remove("hidden")

}


function startGame(){

document.getElementById("title").classList.add("hidden")

document.getElementById("game").classList.remove("hidden")

document.getElementById("lofi").play()

updateUI()

}


function updateUI(){

document.getElementById("xp").innerText="XP: "+xp

document.getElementById("streak").innerText="🔥 Streak: "+streak

}


function addXP(){

xp+=25

localStorage.setItem("xp",xp)

updateUI()

}


document.getElementById("uzik").onclick=()=>{

const messages=[

"Jo you're doing amazing",
"Maja hydrate please",
"bby keep studying",
"Mahuhh I'm proud of you",
"After studying we deserve scrumptious cakes"

]

alert(messages[Math.floor(Math.random()*messages.length)])

}



document.getElementById("pet").onclick=()=>{

alert("Your pet is happy!")

}



function startTimer(minutes){

let time=minutes*60

const timer=document.getElementById("timer")

const interval=setInterval(()=>{

time--

let m=Math.floor(time/60)

let s=time%60

timer.innerText=m+":"+String(s).padStart(2,"0")

if(time<=0){

clearInterval(interval)

alert("Study session complete!")

addXP()

}

},1000)

}


setInterval(()=>{

const windowBox=document.getElementById("window")

const weathers=["skyblue","#f97316","#111827","#0ea5e9"]

windowBox.style.background=weathers[Math.floor(Math.random()*weathers.length)]

},15000)
