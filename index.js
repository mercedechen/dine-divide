// subtotal = total cost of the bill before tax
// tipPercent = percentage you want to tip divided by 100, for example: 15 is 15%
// tip = total amount to pay towards tip
// taxRate = tax percentage based on location
// tax = total amount to pay towards sales tax
// people = 1 defaults to 1 person if no value is passed
// .toFixed(2) = formats numbers to 2 decimal places but turns it into a string
// + = add to the beginning to convert it back to a number
// result.(property) to access the arrays' properties, for example: result.tip

function calculateBill(subtotal, tipPercent, taxRate, people = 1) {
  let tip = subtotal * (tipPercent/100);
  let tax = subtotal * (taxRate/100);
  let total = +(subtotal + tip + tax).toFixed(2);
  let split = +(total / people).toFixed(2);
  // a function can only return one value but that "one value" can return an object or array containing multiple values
  return { 
    subtotal: subtotal,
    tipPercent: tipPercent,
    tip: tip, 
    taxRate: taxRate,
    tax: tax,
    total: total,
    people: people,
    split: split
  };
};