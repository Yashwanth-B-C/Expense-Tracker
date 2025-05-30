let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function displayExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";
    expenses.forEach((expense, index) => {
        const item = document.createElement("li");
        item.innerHTML = `${expense.amount} - ${expense.category} - ${expense.description} 
            <button onclick="deleteExpense(${index})">Delete Expense</button>
            <button onclick="editExpense(${index})">Edit Expense</button>`;
        list.appendChild(item);
    });
}

function addExpense() {
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    if (amount === "" || description === "") {
        alert("Please enter valid amount and description");
        return;
    }

    expenses.push({ amount, description, category });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById("amount").value = expense.amount;
    document.getElementById("description").value = expense.description;
    document.getElementById("category").value = expense.category;
    deleteExpense(index);
}

// Initial display
displayExpenses();
