function calcularMedia(){
    var media1 = parseFloat(document.getElementById('m1').value)
    var media2 = parseFloat(document.getElementById('m2').value)
    var media3 = parseFloat(document.getElementById('m3').value)
    var res = document.getElementById('resp')
    var media = (media1 + media2 + media3) / 3

    if(media >= 7){
            resp.textContent = `${media.toFixed(2)}. Parabéns, você passou de ano!`
    }
    else{
            resp.textContent = `${media.toFixed(2)}. Ce é buro pac? Reprovado.`
    }
}