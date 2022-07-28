var primvisor = window.document.getElementById('primvisor')
var segvisor = window.document.getElementById('segvisor')
var espera = 0 // 0 - primeiro numero | 1 - operacao | 2 - segundo numero
var op = ''
var n1 = ''
var n2 = ''

//==========================
function numero(x){
    if (primvisor.innerText.length < 9){
        if (primvisor.innerText == '0'){
            primvisor.innerText = x
        } else if (primvisor.innerText == n1){

        } else {
            primvisor.innerText = primvisor.innerText + x
        }
    }
}

function resultado(){
    if (op == '+'){
       n1 = Number(primvisor.innerText)
       n2 = Number(segvisor.innerText)
       primvisor.innerText = n1+n2
       segvisor.innerText = '' 
    }else if (op == '-'){
        n1 = Number(primvisor.innerText)
        n2 = Number(segvisor.innerText)
        primvisor.innerText = n2-n1
        segvisor.innerText = '' 
     }else if (op == '*'){
        n1 = Number(primvisor.innerText)
        n2 = Number(segvisor.innerText)
        primvisor.innerText = n1*n2
        segvisor.innerText = '' 
     }else if (op == '/'){
        n1 = Number(primvisor.innerText)
        n2 = Number(segvisor.innerText)
        primvisor.innerText = n2/n1
        segvisor.innerText = '' 
     }
}

function operacao(x){
    if(segvisor.innerText == ''){
        segvisor.innerText = primvisor.innerText
        primvisor.innerText = '0'
        if (x == '+'){
            op = '+'
        }else if (x == '-'){
            op = '-'
        }else if (x == '*'){
            op = '*'
        }else if (x == '/'){
            op = '/'
        }
    }else {
        resultado()
        segvisor.innerText = primvisor.innerText
        primvisor.innerText = '0'
    }
}
//==========================

function calculadora(x){
    if (x == 'zerar'){
        primvisor.innerText = '0'
        segvisor.innerText = ''
        op = ''
        n1 = ''
        n2 = ''
    } else if (x == '/'){
        operacao(x)
    } else if(x == '*'){
        operacao(x)
    } else if(x == '-'){
        operacao(x)
    } else if(x == '+'){
        operacao(x)
    } else if (x == '='){
        resultado()
    } else if (x == '.'){
        ponto()
    }
    else{
        numero(x)
    }

}
