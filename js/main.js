// this function use to get input value 
function getInputValue(costAmount){
    const cost = document.getElementById(costAmount)
const costValue = parseFloat(cost.value)
    // cost.value = ""
return costValue
}
// error massage 
function errorMassage(){
    document.getElementById("show-error").style.display ="none"
}
// calculate expenses with even handler
document.getElementById("calculate-amount").addEventListener('click', function(){
    // food amount calculate
    const foodAmount = getInputValue("food-amount")
// rent amount calculate
const rentAmount = getInputValue("rent-amount")
// cloth amount calculate
const clothAmount = getInputValue("clothes-amount")
// condition apply to chack negative value and string 
if (foodAmount <= 0 ||rentAmount <= 0 || clothAmount <= 0 ||isNaN(foodAmount) || isNaN(rentAmount) ||isNaN(clothAmount)){
    document.getElementById("show-error").style.display = "block"
}
else if(foodAmount > 0 &&rentAmount > 0 && clothAmount > 0){
    const totalCost =  foodAmount + rentAmount + clothAmount
    const totalexpenses = document.getElementById("total-expenses-amount").innerText = totalCost
    const incomeAmount = getInputValue("income-amount")
    const remainAmount = incomeAmount - totalexpenses
    document.getElementById("show-error").style.display = "none"
    // condition apply to display error massange
    if(incomeAmount < totalexpenses){
        document.getElementById("balance-amount").innerText = "Not Enough Balance"
    }else{ document.getElementById("balance-amount").innerText = remainAmount
}
}
})
// bonus part start 
document.getElementById("calculate-saving-amount").addEventListener('click',function(){
    const incomeAmount = getInputValue("income-amount")
    const savingAmount = getInputValue("saving-input")
    const remainAmount =document.getElementById("balance-amount")
    const remainValue = parseFloat(remainAmount.innerText)
    const saving = (incomeAmount / 100)* savingAmount
    const finalAmount = remainValue - saving
    console.log(saving)
    if (saving < remainValue){
         document.getElementById("saving-amount").innerText = saving
         document.getElementById("remaining-amount").innerText = finalAmount
    }else{
        document.getElementById("saving-amount").innerText = "Sorry! You can't save more then what you  have"
        document.getElementById("remaining-amount").innerText = ""
    }
})