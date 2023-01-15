(function (a) {
  return (function () {
    console.log(a);
    a = 6;
  })();
})(21);

// Output 21

function solve(arr, rotations) {
    if (rotations == 0) return arr;
    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    return arr;
}
// solve([44, 1, 22, 111], 5);

// Output [111, 44, 1, 22]


<p id="example"></p>  
<script>  
function Func()  
{  
document.getElementById("example").innerHTML=Math.sqrt(81);  
}  
</script>
// output 9


var a = 1;  
var b = 0;  
while (a <= 3)  
{  
   a++;  
   b += a * 2;  
   print(b);
}

// OUTPUT 4 10 18


var a = Math.max();
var b = Math.min();
print(a);
print(b);

//  OUTPUT -Infinity Infinity


var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
print(a);
print(b);

// OUTPUT TRUE FALSE : In Javascript Math.max() is lesser than Math.min() because Math.max() returns -Infinity and Math.min() returns Infinity.

var a = true + true + true * 3;
print(a)

// OUTPUT 5  // In Javascript, true is considered as the number 1 when used in any arithmetic expression, hence the expression evaluates to 5.


print(NaN === NaN);

// OUTPUT : False In Javascript, NaN is not considered to be equal to NaN even after using the strict equality operator.


print(typeof(NaN));


// OUTPUT Number : NaN in Javascript is defined to be of type number despite its name(not a number).




Object Serialization is the process in which an object or data structure is translated into a format suitable for transferral over a network, or storage.




print(parseInt("123Hello"));
print(parseInt("Hello123"));

// OUTPUT 123 NAN : The parseInt() method converts a string to an integer if it is possible. If the string starts with a number, it will convert that numeric part and return it. Else, it will return NaN.

var a = "hello";
var sum = 0;
for(var i = 0; i < a.length; i++) {
   sum += (a[i] - 'a');
}
print(sum);

// OUTPUT NAN : In Javascript, the a[i] - ‘a’ is not typecasted to an integer type and hence the result is NaN.



const set = new Set();
set.add(5);
set.add('Hello');
set.add({ name: 'Scaler' });
for (let item of set) {
 console.log(item + 6);
}

// 11 Hello6 [object Object]6


function test(...args) {
    console.log(typeof args);
   }
   test(12);

//    The …args parameter allows us to collect all remaining arguments into an array, and in Javascript typeof an array is an object.


