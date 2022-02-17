// calculate event haandler
// this function use to get input value 
function getInputValue(costAmount){
    const cost = document.getElementById(costAmount)
const costValue = parseFloat(cost.value)
    cost.value = ""
return costValue
}

document.getElementById("calculate-amount").addEventListener('click', function(){
    // food amount calculate
    const foodAmount = getInputValue("food-amount")
    console.log(foodAmount)
// rent amount calculate
const rentAmount = getInputValue("rent-amount")
console.log(rentAmount)
// cloth amount calculate
const clothAmount = getInputValue("clothes-amount")
console.log(clothAmount)
// total cost amount 
if (foodAmount <= 0 ||rentAmount <= 0 || clothAmount <= 0 ||isNaN(foodAmount) || isNaN(rentAmount) ||isNaN(clothAmount)){
    alert("enter valid number")
}
else if(foodAmount > 0 &&rentAmount > 0 && clothAmount > 0){
    const totalCost =  foodAmount + rentAmount + clothAmount
    console.log(totalCost)
    const totalexpenses = document.getElementById("total-expenses-amount").innerText = totalCost
    const incomeAmount = getInputValue("income-amount")
    const remainAmount = incomeAmount - totalexpenses
    // condition apply to display error massange
    if(incomeAmount < totalexpenses){
        document.getElementById("error-massage").style.display = "block"
    }else{ document.getElementById("balance-amount").innerText = remainAmount
        document.getElementById("error-massage").style.display = "none"
}
   
}

})