function meuEscopo(){
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    function preventEvent(evento) {
        evento.preventDefault();

        const peso = form.querySelector(`#peso`);
        const altura = form.querySelector(`#altura`);

        if ( peso.value === "" && altura.value === "") {
            resultado.innerHTML = `<p>não ha dados digitados</p>`;
        }

        // calculo IMC  
        let imc = (Number(peso.value) / (Number(altura.value**2)));
        imc = imc.toFixed(1);
        
        // verificação de estado 
        if (imc < 18.5) { 
            resultado.innerHTML = `<p>IMC: ${imc} / Abaixo do peso</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p>IMC: ${imc} / Peso normal </p>`;
        } else if (imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `<p>IMC: ${imc} / Acima do peso (sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.9) { 
            resultado.innerHTML = `<p>IMC: ${imc} / obesidade I</p>`;
        } else if (imc >= 35 && imc <= 39.9) { 
            resultado.innerHTML = `<p>IMC: ${imc} / obesidade II</p>`
        } else {
            resultado.innerHTML = `<p>IMC: ${imc} / obesidade III</p>`
        }

    }
    addEventListener(`submit`, preventEvent)
}

meuEscopo();