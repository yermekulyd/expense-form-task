const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

function displayExpenses() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenseList.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${expense.date} - ${expense.amount}₸ - ${expense.category} - ${expense.comment}`;
    expenseList.appendChild(li);
  });
}

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const comment = document.getElementById("comment").value;

  const expense = { date, amount, category, comment };

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  expenseForm.reset();

  displayExpenses();
});

document.addEventListener("DOMContentLoaded", displayExpenses);
