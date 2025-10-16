// 20% tax

function calculateTax(income , expense){
    if(income < 0 || expense < 0 || income < expense){
        return "Invalid Input";
    } else {
        const profit = income - expense;
        const tax =( profit / 100) * 20;
        return tax;
    }
}

const tax = calculateTax(200, 100);
console.log(tax);