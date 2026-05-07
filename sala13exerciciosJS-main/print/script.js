function mostrar(){
    var texto = document.getElementById('i1').value 
    var cor = document.getElementById('i2').value 
    var data = document.getElementById('i3').value 
    var check = document.getElementById('i4').value 

    var printTexto = document.getElementById('printTexto')
    var printCor = document.getElementById('printColor')
    var printData = document.getElementById('printData')
    var printCheck = document.getElementById('printCheck')

    var apareca = document.getElementById('apareca')

    // printTexto.textContent = "Seu nome é: " + texto
    printTexto.textContent = `O texto digitado foi : ${texto}`
    printCor.innerHTML = `A cor em hexadecimal escolhida foi : ${cor}`
    printData.innerText = `A data escolhida foi : ${data}`
    printCheck.innerText = `Você escolheu : ${check}`

    apareca.style.display = 'block'

    console.log(texto, typeof texto)
    console.log(cor, typeof cor)
    console.log(data, typeof data)
    console.log(check, typeof check)
}