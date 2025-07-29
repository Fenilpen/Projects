document.addEventListener("DOMContentLoaded",()=>{

let expenseForm = document.getElementById("expense-form")
let expenseName = document.getElementById("expense-name")
let expenseAmount = document.getElementById("expense-amount")
let expenseList = document.getElementById("expense-list")
let totalAmountDisplay = document.getElementById("total-amount")

let expenses = []
  
expenseForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("Form submitted"); 
    let name = expenseName.value.trim()
    let amount = parseFloat(expenseAmount.value.trim())

    if (name !== "" && !isNaN(amount) && amount > 0) {
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        }
        expenses.push(newExpense)
        saveExpensesToLocal()
        renderDisplay(expenses)
        

    }else {
        alert("please enter the correct detail")
    }
    
})
  
}
