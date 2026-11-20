//question 1
let promise = new Promise((resolve,reject)=>
    {setTimeout(() => {
        reject("Rejected!");
    }, 5000);
});

promise
    .then(result=>console.log(result))
    .catch(error=>console.log(error));