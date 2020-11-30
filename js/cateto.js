function calcular() {

    let cateto1_quadrado;
    let hipotenusa_quadrado;
    let hipoQUA_menos_catetoQUA;
    let cateto_2;
    
    let hipotenusa = document.getElementById('hipotenusa').value
    let cateto_1 = document.getElementById('cateto_1').value

    let  res = document.getElementById('res')

    let  passo1 = document.getElementById('passo1')
    let  passo2 = document.getElementById('passo2')
    let  passo3 = document.getElementById('passo3')
    let  passo4 = document.getElementById('passo4')
    let  passo5 = document.getElementById('passo5')
    let  passo6 = document.getElementById('passo6')

    if (cateto_1 == '' && hipotenusa == '') {

        alert('Nenhum dado foi informado!')
        
    } else if(cateto_1 == '') {

        alert('Primeiro cateto não foi informado!')

    } else if(hipotenusa == '') {

        alert('Hipotenusa não foi informado!')

    } else {

        cateto1_quadrado = Math.pow(cateto_1, 2)
        hipotenusa_quadrado = Math.pow(hipotenusa, 2)

        hipoQUA_menos_catetoQUA = hipotenusa_quadrado - cateto1_quadrado

        cateto_2 = Math.sqrt(hipoQUA_menos_catetoQUA)

        res.innerHTML = `Resulatado --> ${cateto_2}`

        passo1.innerHTML = `${hipotenusa} <sup>2</sup> = ${cateto_1} <sup>2</sup> + C <sup>2</sup>`
        passo2.innerHTML = `${hipotenusa_quadrado} - ${cateto1_quadrado} = C <sup>2</sup>`
        passo3.innerHTML = `C <sup>2</sup> = ${hipotenusa_quadrado} - ${cateto1_quadrado}`
        passo4.innerHTML = `C <sup>2</sup> = ${hipoQUA_menos_catetoQUA}`
        passo5.innerHTML = `C = &radic;<span>${hipoQUA_menos_catetoQUA}</span>`
        
        if(cateto_2 > 0) {

            passo6.innerHTML = `C = ${cateto_2}`

        }
        
    }

}
