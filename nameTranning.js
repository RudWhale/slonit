function sumAllExpenses(arrayExpenses) {
    let expensesAll = 0;
    arrayExpenses.forEach(expense => {
      expensesAll += expense;
    });
    return expensesAll;
  }
  
  let expensesVIP = [10000, 20000, 30000];
  console.log(sumAllExpenses(expensesVIP));