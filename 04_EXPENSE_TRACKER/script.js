document.addEventListener("DOMContentLoaded",()=>{

let expenseForm = document.getElementById("expense-form")
let expenseName = document.getElementById("expense-name")
let expenseAmount = document.getElementById("expense-amount")
let expenseList = document.getElementById("expense-list")
let totalAmountDisplay = document.getElementById("total-amount")

let expenses = JSON.parse(localStorage.getItem("expenses")) || []
let totalAmount = calculateTotal()
  
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
        updateTotal()

        expenseName.value = ""
        expenseAmount.value = ""
        

    }else {
        alert("please enter the correct detail")
    }
    
})

  function saveExpensesToLocal(){
    localStorage.setItem("expenses",JSON.stringify(expenses))
}

  function calculateTotal() {
    return expenses.reduce((sum,expense) => sum + expense.amount ,0)
}

function updateTotal(){
    totalAmount = calculateTotal()
    totalAmountDisplay.textContent = totalAmount.toFixed(2)
}

  function renderExpenses () {
    expenseList.innerHTML = ""
    expenses.forEach(expense => {
        let li = document.createElement('li')
        li.innerHTML = `${expense.name} - $ ${expense.amount}
        <button data-id ="${expense.id}">Delete</button>`;
        expenseList.appendChild(li)
        console.log(li);
        
    })
    
}

  expenseList.addEventListener("click",(e)=>{
    if(e.target.tagName ===  "BUTTON"){
        const id = Number(e.target.getAttribute("data-id"));        
        expenses = expenses.filter(expense => expense.id !== id)

        // Alternative way to remove an expense by finding its index
      
        // let result = expenses.findIndex((value,index,obj)=> {
        //     return value.id === id
        // })
        
        // if (result > -1) {
        //     expenses.splice(result, 1);
        // }
            renderExpenses();
            updateTotal()
            saveExpensesToLocal()
        
    }
    
})
  
})
