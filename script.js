const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1110];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
// for (let i = 0; i < bills.length; i++) {

// }
console.log(bills, tips, totals);
const calcAverage = function(totals) {
    let sum = 0;
    for (let i = 0; i < totals.length; i++) {
        sum = sum + totals[i];
    }
    return `the sum ${sum} and average ${sum/totals.length}`;
}
console.log(calcAverage(totals));