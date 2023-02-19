"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = (b**2-4*a*c);
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  } 
  if (d === 0){
    arr.push(-b/(2*a));  
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
    
  if (Number.isFinite(percent)){
    percent = Number(percent)
  } else {
      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;    
  }

  if (Number.isFinite(contribution)){
    contribution = Number(contribution)
  } else {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;    
  }

  if (Number.isFinite(amount)){
    amount = Number(amount)
  } else {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;    
  }

  let creditBody = (amount - contribution);
  let dateStart = new Date(); 
  
  let countMonths = (
    countMonths.getMonth() - dateStart.getMonth() + (12 * (date.getFullYear() - dateStart.getFullYear()))
    );

    //Платёж = S * (P + (P / (((1 + P)^n) - 1))), где: S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n — количество месяцев, ^ — возведение в степень.
    
  let monthPayment = (creditBody * (percent/1200 + ((percent/1200) / (((1 + (percent/1200)) ** countMonths) - 1))));

  totalAmount = monthPayment * monthsOfCredit;

  return Number(totalAmount.toFixed(2));
  
}