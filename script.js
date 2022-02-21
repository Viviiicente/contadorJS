function contar() {
    var num = document.getElementById('txtnum')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpass')
    var res = document.getElementById('res')


    if (num.value.length == 0 ||fim.value.length == 0 || pas.value.length == 0){
        window.alert ('[ERRO] Digite um número, para seguirmos corretamente!')
    }else{
        res.innerHTML = 'Contando ...'
        
        var i = Number(num.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        for(var c = i ; c <= f ; c += p) {``
            res.innerHTML += ` ${c}  \u{1F449} ` 
        }
      
    } 


}

