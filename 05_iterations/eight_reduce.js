// Reduce

const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "c++",
        price: 2999
    },
    {
        itemName: "mobile",
        price: 7999
    },
    {
        itemName: "ai",
        price: 11999
    }
]

const priceToPay = shoppingCard.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);
