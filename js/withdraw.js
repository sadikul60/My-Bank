// step-1: add click event listener/handler with the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2: get the withdraq amount from the withdraw input field
    // for input field use (.value) to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // step:3 
    withdrawField.value = '';
    // convert string to parsefloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)){
        alert('Please input a valid number');
        return;
    }
    
    // step-4: get the current withdraw total
    // for non-input(element other than input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // convert string to parsefloat
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-6: get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal){
        alert('ato taka nai bank e');
        return;
    }

    // step-5: add number to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-7: calculate current total balance
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentTotalBalance;
    
    
})