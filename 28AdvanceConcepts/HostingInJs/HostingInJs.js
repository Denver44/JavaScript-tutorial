
    // this is called hsoting as we have called the fucntion before its declartion that us called hosting in javascript.
    // but this is applicable  to the function keyword only not for arrow function and variable function
    sum(5, 5);

    function sum(a, b) {
        console.log(a + b);
    }
    // this is called variable hositng as we define the value later but console.log eralier so the variable get undefined automatically by javcascipt engine.
    // only applicable with var we cann't do with let and const.
    console.log(a);
    var a = 10;
