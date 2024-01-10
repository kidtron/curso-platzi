//programa para la aleatoriedad del pc
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//eleccion entre piedra papel o tijera
function eleccion(tipoJugada){
    let resultado = ""
        if (tipoJugada == 1) {
            return resultado = "piedra 🪨"
        }else if (tipoJugada == 2) {
            return resultado = "papel 🧻"
        }else if (tipoJugada == 3) {
            return resultado = "tijera ✂️"
        }else {
        resultado = "Haz elegido una opcion INCORRECTA!!"
        return resultado
            }}
            //variables
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0
                while (triunfos < 3 && perdidas < 3){
                    pc = aleatorio(1,3)
                    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera")

                    alert("tu eliges " + eleccion(jugador))
                    alert("pc elige " + eleccion(pc))



                    //Empieza lo chido papus
                    if (jugador == pc) {
                    alert("EMPATE") 
                    } else if ((jugador - pc) == 1) {
                    alert("GANASTE")
                    triunfos = triunfos + 1
                    } else if ((jugador - pc) == -2) {
                    alert("GANASTE")
                    triunfos = triunfos + 1
                    } else {
                    alert("PERDISTE")
                    perdidas = perdidas + 1
                    }
                }
            alert("GANASTE " + triunfos + " veces. y PERDISTE " + perdidas + " veces.")