function partida() {
    do {
        let op = parseInt(prompt("Digite sua opção (Pedra - 1, Papel - 2 ou Tesoura - 3): "));
        let pontou = 0;
        let pontoc = 0;
        let op2 = Math.floor(Math.random() * 3+1);
        let partida = 0;
        partida ++;

        alert(op2);
        if(op == 2 && op2 == 3) {
            pontoc = pontoc + 1;
        }
        else if(op == 3 && op2 == 2) {
            pontou = pontou + 1;
        }
        else if(op == 1 && op2 == 2) {
            pontoc = pontoc + 1;
        }
        else if(op == 2 && op2 == 1) {
            pontou = pontou + 1;
        }
        else if(op == 1 && op2 == 3) {
            pontou = pontou + 1;
        }
        else if(op == 3 && op2 == 1) {
            pontoc = pontoc + 1;
        }
        alert("Usuário: "+pontou+" pontos. \nComputador: "+pontoc+"pontos.");
    } while(partida < 9);
}