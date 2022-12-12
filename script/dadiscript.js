// genero 2 numeri a caso da 1 a 6
// stabilisco il vincitore 
//stampo in pagina

const winner = document.getElementById("winner");


//genero 2 numeri 



// ! il massimo
const max = 6;

const player = Math.floor(Math.random()* max + 1)
const CPU = Math.floor(Math.random()* max + 1)

if(player === CPU){
    winner.innerText= ("CHE SFORTUNA! è un pareggio!")
}else if (player > CPU){
    winner.innerText= ("Il Giocatore vince la mano")
}else if (player < CPU){
    winner.innerText= ("CPU vince la mano")

}


console.log(player, CPU);