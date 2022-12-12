// creo email fittizzie
// recupero dati utente
// accerto la possibilità di login
// stampo messaggio relativo al login


const emails = ["ginomail" , "paolomail", "francomail"];


console.log(emails)

const btn = document.getElementById("btn");
const mail = document.getElementById("control");
const accesso = document.getElementById ("login");

mail.value = " "

btn.addEventListener("click", function(){
   console.log(mail.value)

   
for (let i = 0 ; i < emails.length; i++ ){
    if(mail.value == emails[0]){
        accesso.innerText == ("Bentornato Gino");
    }else if(mail.value == emails[1]){
        accesso.innerText = ("Bentornato Paolo");
    }else if(mail.value == emails[2]){
        accesso.innerText = ("Bentornato Franco");
    }else{
        accesso.innerText = ("I dati inseriti non sono validi");

    }
}


})