// step-1: add click event listener/handler with the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposi input field
    // for input field use (.value) to the value inside the input field
    const depisitField = document.getElementById('deposit-field');
    const newDepositAmountString = depisitField.value;
    // convert string to parsefloat
    const newDepositAmount = parseFloat(newDepositAmountString);
    depisitField.value = '';
    if (isNaN(newDepositAmount)){
        alert('Please input a valid number');
        return;
    }
    
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // convert string to parsefloat
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentTotalBalance;
    
    // step-7:
    
})