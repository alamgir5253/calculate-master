// calculate event haandler
// this function use to get input value 
function getInputValue(costAmount){
    const cost = document.getElementById(costAmount)
const costValue = parseFloat(cost.value)
    // cost.value = ""
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
    document.getElementById("show-error").style.display = "block"
}
else if(foodAmount > 0 &&rentAmount > 0 && clothAmount > 0){
    const totalCost =  foodAmount + rentAmount + clothAmount
    console.log(totalCost)
    const totalexpenses = document.getElementById("total-expenses-amount").innerText = totalCost
    const incomeAmount = getInputValue("income-amount")
    const remainAmount = incomeAmount - totalexpenses
    document.getElementById("show-error").style.display = "none"
    // condition apply to display error massange
    if(incomeAmount < totalexpenses){
        document.getElementById("error-massage").style.display = "block"
        document.getElementById("balance-amount").innerText = "not enough balance"
    }else{ document.getElementById("balance-amount").innerText = remainAmount
        document.getElementById("error-massage").style.display = "none"
}
   
}

})


// bonus part start 
document.getElementById("calculate-saving-amount").addEventListener('click',function(){

    const incomeAmount = getInputValue("income-amount")
    const savingAmount = getInputValue("saving-input")
    
    if (savingAmount < 50){
        const saving = (incomeAmount / 100)* savingAmount
        const savingTotal = document.getElementById("saving-amount").innerText = saving
    }else{
        const savingTotal = document.getElementById("saving-amount").innerText = "Sorry! You can't save more then 50%"
    }

})


















// error massage 
function errorMassage(){
    document.getElementById("show-error").style.display ="none"
}