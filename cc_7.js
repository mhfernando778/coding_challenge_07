// Task 1 - Customer Invoice Calculation //

 function calculateInvoice(subtotal, taxRate, discount) { // starting a function to calculate invoice amount
    let total = (subtotal + (subtotal * taxRate)) - discount; // the equation being used
    return total.toFixed(2); // returning the calculation with 2 decimal places
 }

 console.log(`Final Invoice Amount: $${calculateInvoice(100, 0.08, 5)}`); // logging the function with specified values
 console.log(`Final Invoice Amount: $${calculateInvoice(500, 0.1, 20)}`); // logging the function with specified values


 // Task 2 - Employee Hourly Wage Calculation //

 let calculateHourlyWage = function(salary, hoursPerWeek) { // starting the function expression
   let hourlyWage = salary / (hoursPerWeek * 52); // declaring the equation that will be used
   return hourlyWage.toFixed(2); // setting the return to two decimal places
 };

 console.log(`Employee Hourly Wage: $${calculateHourlyWage(52000, 40)}`); // logging the calculation with given values
 console.log(`Employee Hourly Wage: $${calculateHourlyWage(75000, 35)}`); // logging the calculation with given values