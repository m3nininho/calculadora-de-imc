const calcular = document.getElementById('calcular');


function imc(){
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if(nome !== '' && altura !== '' && peso !== ''){
    
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificao = '';

    if (valorIMC < 18.5){
      classificao = 'Abaixo do peso';
    } else if (valorIMC < 25){
      classificao = 'com peso ideal. Parabéns.';
    } else if (valorIMC < 30){
      classificao = 'levemente acima do peso.';
    } else if (valorIMC < 35){
      classificao = 'com obesidade grau I.';
    } else if (valorIMC < 40){
      classificao = 'com obesidade grau II';
    } else {
      classificao = 'com obesidade grau III. Cuidado';
    }
    
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificao}`;
  
  } else {
    resultado.textContent = 'Preencha todos os campos';
  }
}

calcular.addEventListener('click', imc);