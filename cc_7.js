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


 // Task 3 - Customer Loyalty Discount // 

 const calculateLoyaltyDiscount = (amount, years) => { // starting an arrow function to calcualte loyalty discount
   const rate = years >= 5 ? 0.15: years >= 3 ? 0.10: 0.05; // setting the parameters
   let discount = amount * (1 - rate); // delcaring the equation being used
   return discount.toFixed(2); // setting the return to two decimal places
};

 console.log(`Calculated Discount: $${calculateLoyaltyDiscount(100, 6)}`); // logging the calculausing the given values
 console.log(`Calculated Discount: $${calculateLoyaltyDiscount(200, 2)}`); // logging the calculausing the given values


 // Task 4 - Product Shipping Cost Calculation //
 function calculateShippingCost(weight, location, expedited = false) { // writing a fucntion to calculate shipping costs
   let cost;

    if (location === "USA") {
        cost = 5 + (.5 * weight);
    } else if (location === "Canada") {
        cost = 10 + (.7 * weight);
    }

    if (expedited) {
        cost += 10;
    }

    return cost.toFixed(2);
 };

 console.log(`USA Shipping Cost: $${calculateShippingCost(10, "USA", true)}`); // logging the calculated shipping costs
 console.log(`Canada Shipping Cost: $${calculateShippingCost(5, "Canada", false)}`); // logging the calculated shipping costs


 // Task 5 - Business Loan Interest Calculation //

 function calculateLoanInterest(principal, rate, years) { // starting a function to calculater interest
   let interest = principal * rate * years; // declaring the equation being used
   return interest.toFixed(2); // setting the return to two decimal places
 }

 console.log(`Total Interest: $${calculateLoanInterest(1000, .05, 3)}`); // logging the calculation with the given values
 console.log(`Total Interest: $${calculateLoanInterest(5000, .07, 5)}`); // logging the calculation with the given values


 // Task 6 - Filtering High-Value Transactions //

 let transactions = [500, 1200, 3000, 800, 2200]; // declaring an array 
 
 function filterHighValueTransactions(transactions, filterFunction) { // starting a function
   return transactions.filter(filterFunction);
 }
 let highValueTransactions = filterHighValueTransactions(transactions, transaction => transaction > 1000);

 console.log(`High-Value Transactions: ${highValueTransactions}`); // logging the the filtered values


 // Task 7 - Budget Tracker //

 function createBudgetTracker() {
   let balance = 0;
   return function(expense) {
      balance -= expense;
      return `$${balance}`;
   };
 }
 let budget = createBudgetTracker();

 console.log(`Current Balance: ${budget(300)}`);
 console.log(`Current Balance: ${budget(200)}`);