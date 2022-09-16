let altura;
let peso;

function calcular_imc(altura, peso){
  let altura_metros = (altura/100);
  let altura_quadrado = (altura_metros*altura_metros);
  let imc = peso / altura_quadrado;

  if(imc < 18.5){
    console.log('Abaixo do peso, IMC: ', imc);
  }
  if(imc >= 18.5 && imc < 25){
    console.log('Peso ideal, IMC: ', imc);
  }
  if(imc >= 25 && imc < 30){
    console.log('Sobrepeso, IMC: ', imc);
  }
  if(imc >= 30){
    console.log('Obeso, IMC: ', imc)
  }
}

calcular_imc(190, 100)