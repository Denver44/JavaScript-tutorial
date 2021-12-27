// Promise 
// -reject
// -resolve
// -pending

//  Promise is a Object it has two prameter resolve and reject
// either it return resolve or reject

function func1() {

  return new Promise(function (resolve, reject) {

    setTimeout(() => {

      const error = true;

      if (!error) {
        console.log("Function: Your Promise Has been Resolve")
        resolve();
      } else {
        console.log("Function: Your Promise Has not been Resolve")
        reject("Sorry");

      }

    }, 2000);

  })

}

func1().then(function () {
  console.log("Thanks for solving")
}).catch(function (error) {
  console.log("Bad luck bro and " + error)

})