function getValueFromField(id) {
    let fieldValue = parseFloat(document.querySelector(id).value);
    document.querySelector(id).value = "";
    return fieldValue;
}

function setValue(id, value) {
    let setValue = document.querySelector(id);
    setValue.innerText = value;
}

document.querySelector("#calculateBtn").addEventListener("click", function () {
    // INCOME 
    let income = getValueFromField("#income-field");
    // EXPENSES
    let food = getValueFromField("#food-field");
    let rent = getValueFromField("#rent-field");
    let clothes = getValueFromField("#clothes-field");
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes) ||
        income < 0 || food < 0 || rent < 0 || clothes < 0) {
        alert("Please enter valid positive numbers for income and expenses.");
        return;
    }
    let totalExpense = food + rent + clothes;
    let totalBalance = income - totalExpense;
    if (totalExpense > income) {
        alert("Your Expence is greater than the income");
        return;
    }
    setValue("#totalExpense", totalExpense);
    setValue("#totalBalance", totalBalance);
});

document.querySelector("#discountBtn").addEventListener("click", function () {
    let savePercentage = getValueFromField("#saving-field");
    let totalBalance = parseFloat(document.querySelector("#totalBalance").innerText);
    if (isNaN(savePercentage) || savePercentage < 0) {
        alert("Please enter a valid positive number for saving percentage.");
        return;
    }
    let totalSave = (totalBalance * savePercentage) / 100;
    setValue("#saving-amount", totalSave);
    let remainingBalance = totalBalance - totalSave;
    setValue("#remaining-balance", remainingBalance);
});
