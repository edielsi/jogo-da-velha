var jogador_da_vez = 'X';
var acabou = false;

var jogador1 = 'X';
var jogador2 = '0';

var jogadas = 9;

var locais = document.querySelectorAll('.local');

locais.forEach((local) => {
    local.addEventListener('click', () => {
        if (!acabou && local.innerHTML == "") {

            local.innerHTML = jogador_da_vez;
            jogadas--;
        } else {
            alert('aqui não pode')
        }
        ver_se_ganhou();
        ver_se_empatou();
        troca_jogador();
    })
});

function ver_se_ganhou() {
    var jogadas_ganhadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < jogadas_ganhadoras.length; i++) {

        let v0 = locais[jogadas_ganhadoras[i][0]].innerHTML;
        let v1 = locais[jogadas_ganhadoras[i][1]].innerHTML;
        let v2 = locais[jogadas_ganhadoras[i][2]].innerHTML;

        if(v0 != "" & v0 == v1 && v0 == v2){

            alert(jogador_da_vez + " ganhou");
            acabou = true;
        }

    }
}
function ver_se_empatou() {
    if(!acabou && jogadas<=0){
        alert('empatou')
    }
}

function troca_jogador() {
    if (jogador_da_vez == "X") {
        jogador_da_vez = jogador2;
    } else {
        jogador_da_vez = jogador1;
    }
}
