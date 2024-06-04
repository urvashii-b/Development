/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};
  transactions.forEach(transaction => {
    if(categoryTotal.hasOwnProperty(transaction.category)){
      categoryTotal[transaction.category] += transaction.price
    }
    else{
      categoryTotal[transaction.category] = transaction.price
    }
  });
  const results = Object.keys(categoryTotal.map(category => {
    return {category, totalSpent: categoryTotal[category]}
  }))
  return results;
}

module.exports = calculateTotalSpentByCategory;
