let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordString1 = document.getElementById("box1")
let passwordString2 = document.getElementById("box2")

let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {   
        passwordString1.textContent = ""
        passwordString2.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordString1.textContent += getRandomCharacter()
        passwordString2.textContent += getRandomCharacter()         
    }
    return passwordString1.textContent, passwordString2.textContent
}

function copyPass1(){
    let inp =document.createElement('input')
    document.body.appendChild(inp)
    inp.value =passwordString1.textContent
    inp.select()
    document.execCommand('copy',false)
    inp.remove()
    alert("You copy this password!")
}

function copyPass2(){
    let inp =document.createElement('input')
    document.body.appendChild(inp)
    inp.value =passwordString2.textContent
    inp.select()
    document.execCommand('copy',false)
    inp.remove()
    alert("You copy this password!")
}

function clearPass() {
    if (passwordString1.textContent !="" && passwordString2.textContent !="") {
            passwordString1.textContent = ""
            passwordString2.textContent = ""
        }
}