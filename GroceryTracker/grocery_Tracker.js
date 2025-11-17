let amount1;
let amount2;
let amount3;

function calculateTotalAmount() 
{
    amount1= parseFloat(document.getElementById('Amount1').value);
    amount2= parseFloat(document.getElementById('Amount2').value);
    amount3= parseFloat(document.getElementById('Amount3').value);

let TotalAmount = amount1 + amount2 + amount3;
document.getElementById('result').innerText = `The Total Amount is $: ${TotalAmount}`;
}
