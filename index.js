//5 dias = 8h
//60 reais

//unir salário Hora com  hora p/ dia de trabalhado

//index.html

function calcularSalario() {
  let diasTrabalhado = document.getElementById('dias').value
  let salarioHora = document.getElementById('salarioHora').value
  const valorDia = salarioHora * 8
  let salarioMes = diasTrabalhado * valorDia
  let salarioTotal = document.getElementById('resultado')

  salarioTotal.innerHTML = 'R$ ' + salarioMes.toFixed(2)
}

function calcularSalarioTotal() {
  let dias = document.getElementById('dias').value
  let salarioTotal = document.getElementById('salarioTotal').value
  let valorHora = salarioTotal / dias / 8
  let salarioHora = document.getElementById('resposta')
  salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
}
