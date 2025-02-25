document.getElementById('cashoutbtn').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('cashoutpin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cashoutamount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const covertedMainBalance = parseFloat(mainBalance);
    if(convertedPin === 1234){
        const sum = covertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        alert('cashout done!');

    }
    else('enter valid pin!')

})