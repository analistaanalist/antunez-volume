function calcularVolumen() {
    const diametro = parseFloat(document.getElementById('diametro').value);
    const altura = parseFloat(document.getElementById('altura').value);

    let a, b, c;
    if (diametro >= 7.5 && diametro < 32.5) {
        a = 0.000026;
        b = 2.129789;
        c = 0.984286;
    } else if (diametro >= 32.5 && diametro < 39) {
        a = 0.000054;
        b = 1.990294;
        c = 0.897275;
    } else if (diametro >= 39) {
        a = 0.000110;
        b = 1.871412;
        c = 0.828973;
    } else {
        document.getElementById('resultado').textContent = 'El diámetro debe ser mayor o igual a 7.5 cm.';
        return;
    }

    const volumen = a * Math.pow(diametro, b) * Math.pow(altura, c);
    document.getElementById('resultado').textContent = `El volumen fustal es: ${volumen.toFixed(2)} m³`;
    
    const smallText = document.querySelector('.small-text');
    smallText.textContent = 'Los parámetros se optimizaron mediante la regresión cuantílica (véase Antúnez et al., 2023)';
}
