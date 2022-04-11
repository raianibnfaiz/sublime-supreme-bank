// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositText = document.getElementById('deposit-amount');
//     const depositAmount = parseFloat(depositText.value);
//     const showDepositText = document.getElementById('show-deposit-amount');
//     showDepositText.innerText = depositAmount;
//     //depositText.value = '';
//     const balanceText = document.getElementById('balance-amount');
//     const balance = parseFloat(balanceText.innerText);
//     const newBalance = balance + depositAmount;
//     balanceText.innerText = newBalance

// })
function getInputValue(fieldId) {
    const inputText = document.getElementById(fieldId);
    const valueInText = inputText.value;
    const value = parseFloat(valueInText);
    inputText.value = '';
    return value;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount) {
    console.log(fieldId, amount);
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;

}
function updateBalance(amount, isAdd) {
    let newBalance;
    // const balanceTag = document.getElementById('balance-amount');
    // const balanceTagInText = balanceTag.innerText;
    // const balanceNumber = parseFloat(balanceTagInText);
    const balanceNumber = getInnerTextValue('balance-amount')
    if (isAdd) {
        newBalance = balanceNumber + amount;
    }
    else {
        newBalance = balanceNumber - amount;
    }
    document.getElementById('balance-amount').innerText = newBalance;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-amount')
    if (amount > 0) {
        updateTotal('show-deposit-amount', amount);
        updateBalance(amount, true)
    }
    console.log(amount);
})
//handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-amount');
    if (amount > 0) {
        updateTotal('show-withdraw-amount', amount);
        updateBalance(amount, false);
    }
})