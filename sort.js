const x = [2, 4, 6, 2, 9, 4, 2];
for (let i = 0; i < x.length; i++) {
  for (let j = i + 1; j < x.length; j++) {
    if (x[i] > x[j]) {
      // Change the condition for ascending order
      [x[i], x[j]] = [x[j], x[i]]; // Swap the elements
    }
  }
}
console.log(x); // Outputs the sorted array
