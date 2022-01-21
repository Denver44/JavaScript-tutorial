// In this We have a Given an array we have to delete an element , add an element , read the Output array and Update the array by using One single Dunctions.

let arr = ["durgesh", "tesla", "Car"];

// The Splice function takes first arguent the Index from where u want to delete.
// 2 argument the numbers of the item u want to delete or u can say delete Count
// 3. this Optional if gives and element it will add there at that place.

// 1. We are going to add SPACEX at the end of the array
let newarr = arr.splice(arr.length, 0, "SPACEX");
console.log(arr);

// 2. Read the New Ouptut
console.log(
  newarr,
  " The output of the newarr will be empty as we didnt deleted any elemnt."
);

// 3. Update durgesh by ELON MUSK
let index = arr.indexOf("durgesh");
newarr = arr.splice(index, 1, "ELONMUSK");
console.log(newarr, " Now we have deleted durgesh");
console.log(arr);

// 4. Delete Car from the array

index = arr.indexOf("Car");
newarr = arr.splice(index, 1);
console.log(newarr, " Now we have deleted Car");
console.log(arr);
