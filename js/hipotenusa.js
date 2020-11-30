function calcular() {
    
    let cateto1_quadrado;
    let cateto2_quadrado;
    let hipotenusa;

    let cateto_1 = document.getElementById('cateto_1').value
    let cateto_2 = document.getElementById('cateto_2').value

    let  res = document.getElementById('res')

    let  passo1 = document.getElementById('passo1')
    let  passo2 = document.getElementById('passo2')
    let  passo3 = document.getElementById('passo3')
    let  passo4 = document.getElementById('passo4')

    if (cateto_1 == '' && cateto_2 == '') {

        alert('Nenhum cateto foi informado!')
        
    } else if(cateto_1 == '') {

        alert('Primeiro cateto não foi informado!')

    } else if(cateto_2 == '') {

        alert('Segundo cateto não foi informado!')

    } else {

        cateto1_quadrado = Math.pow(cateto_1, 2)
        cateto2_quadrado = Math.pow(cateto_2, 2)

        hipotenusa =  Math.sqrt(cateto1_quadrado + cateto2_quadrado)

        res.innerHTML = `Resulatado --> ${hipotenusa}`

        passo1.innerHTML = `A <sup>2</sup> = ${cateto_1} <sup>2</sup> + ${cateto_2} <sup>2</sup>`
        passo2.innerHTML = `A <sup>2</sup> = ${cateto1_quadrado} + ${cateto2_quadrado}`
        passo3.innerHTML = `A = &radic;<span>${cateto1_quadrado + cateto2_quadrado}</span>`
        passo4.innerHTML = `A = ${hipotenusa}`
    }

}
