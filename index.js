function calculateBill(subtotal, tipRate, taxRate, people = 1) {
  let tip = subtotal * (tipRate/100);
  let tax = subtotal * (taxRate/100);
  let total = +(subtotal + tip + tax);
  let split = +(total / people);
  
  return {     
    subtotal: subtotal,
    tipRate: tipRate,
    tip: tip, 
    taxRate: taxRate,
    tax: tax,
    total: total,
    people: people,
    split: split
  };
};

function updateBill() {
  // Get input values
  const subtotal = parseFloat(document.getElementById("subtotalInput").value || 0);
  const tipRate = parseFloat(document.getElementById("tipRateInput").value || 0);
  const taxRate = parseFloat(document.getElementById("taxRateInput").value || 0);
  const people = parseFloat(document.getElementById("people").value || 1);

  // Call the function
  const result = calculateBill(subtotal, tipRate, taxRate, people);

  // Round up to 2 decimals and update results in HTML
  document.getElementById("tipResult").textContent = `Tip: $${result.tip.toFixed(2)}`;
  document.getElementById("taxResult").textContent = `Tax: $${result.tax.toFixed(2)}`;
  document.getElementById("totalResult").textContent = `Total: $${result.total.toFixed(2)}`;
  document.getElementById("perPersonResult").textContent = `You Pay: $${result.split.toFixed(2)}`;
}

const form = document.getElementById("billForm");

form.addEventListener("input", updateBill);