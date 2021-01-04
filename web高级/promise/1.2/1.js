new Promise(resolve => {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('then11');
    // return 
    new Promise(resolve => {
        console.log('promise2');
        resolve();
    }).then(() => {
        console.log('then21');
    }).then(() => {
        console.log('then22');
    });
}).then(() => {
    console.log('then12');
});