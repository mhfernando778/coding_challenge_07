// Task 1 - Customer Invoice Calculation //
 function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return total.toFixed(2);
 }

 console.log(`Final Invoice Amount: $${calculateInvoice(100, 0.08, 5)}`);
 console.log(`Final Invoice Amount: $${calculateInvoice(500, 0.1, 20)}`);