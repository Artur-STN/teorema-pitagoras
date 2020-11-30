function calcular() {

    let hipotenusa = document.getElementById('a').value
    let cateto_1 = document.getElementById('b').value
    let cateto_2 = document.getElementById('c').value

    let passo1 = document.getElementById('passo1')
    let passo2 = document.getElementById('passo2')
    let passo3 = document.getElementById('passo3')

    let x;
    let y;

    let hipoQUA;
    let cateto1_QUA;
    let cateto2_QUA;
    let somaQUAcatetos;

    let res = document.getElementById('res')

    if (hipotenusa == '' && cateto_1 == '' && cateto_2 == '') {

        alert('Nenhum dado foi informado')

    } else if (hipotenusa == '') {

        alert('Hipotenusa não foi informado')

    } else if (cateto_1 == '') {

        alert('Primeiro Cateto não foi informado')

    } else if (cateto_2 == '') {

        alert('Segundo Cateto não foi informado')

    } else {

        x = Math.pow(hipotenusa, 2)
        y = Math.pow(cateto_1, 2) + Math.pow(cateto_2, 2)

        hipoQUA = Math.pow(hipotenusa, 2)
        cateto1_QUA = Math.pow(cateto_1, 2)
        cateto2_QUA = Math.pow(cateto_2, 2)
        somaQUAcatetos = cateto1_QUA + cateto2_QUA

        if (x == y) {

            res.innerHTML = 'Expressão é verdadeira!'

            passo1.innerHTML = `${hipotenusa} <sup>2</sup> = ${cateto_1} <sup>2</sup> + ${cateto_2} <sup>2</sup>`
            passo2.innerHTML = `${hipoQUA} = ${cateto1_QUA} + ${cateto2_QUA}`
            passo3.innerHTML = `${hipoQUA} = ${somaQUAcatetos}`

        } else if (x != y) {

            res.innerHTML = 'A Expressão é falsa!'

            passo1.innerHTML = `${hipotenusa} <sup>2</sup> = ${cateto_1} <sup>2</sup> + ${cateto_2} <sup>2</sup>`
            passo2.innerHTML = `${hipoQUA} = ${cateto1_QUA} + ${cateto2_QUA}`
            passo3.innerHTML = `${hipoQUA} != ${somaQUAcatetos}`

        }



    }

}