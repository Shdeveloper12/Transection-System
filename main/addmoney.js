document.getElementById('btnClick').addEventListener('click',function(event){
    
    event.preventDefault();
   const amount = document.getElementById('add-amount').value;
   const convertedAmount = parseFloat(amount);
   const pin = document.getElementById('pin').value;
   const convertedPin = parseInt(pin);
   const mainBalance = document.getElementById('main-balance').innerText;
   const convertedMainBalance = parseFloat(mainBalance);
   if(amount && pin){
    if(convertedPin === 1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('main-balance').innerText = sum;
        alert('add money done!');
    }
    else{
        alert('plese enter valid pin!')
    }
   }
   else{
    alert("enter amount")
   }

})