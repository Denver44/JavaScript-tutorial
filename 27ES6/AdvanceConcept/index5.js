let arr = [5, 7, 8, 99, 10, 5500];
console.log("\nold Technique");
// Normal of
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// For in <- in -> Index
console.log("\nnew Technique using in it gives index");
arr1 = [50, 70, 80, 990, 100, 5500];
for (let i in arr1) {
  console.log(arr1[i]);
}

// For of
console.log("\nnew Technique using of it gives direct element");
arr1 = [50, 70, 80, 990, 100, 5500];
for (let i of arr1) {
  console.log(i);
}
