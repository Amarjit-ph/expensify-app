import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzN0NuUgV7seu3IAhvMlo9Gpe-IVKupC4",
    authDomain: "expensify-app-c9d29.firebaseapp.com",
    databaseURL: "https://expensify-app-c9d29.firebaseio.com",
    projectId: "expensify-app-c9d29",
    storageBucket: "expensify-app-c9d29.appspot.com",
    messagingSenderId: "686762315312",
    appId: "1:686762315312:web:7c1f6c4f5813b817efe7f5",
    measurementId: "G-TW86QR31L2"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// database.ref().set({
//     name: 'Amarjit Pheiroijam',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: "Chandigarh",
//         country: 'India'
//     },
//     attributes: {
//         hight: 5.9,
//         weight: 80
//     },
//     job: 'Software Developer'
// });




//CREATE DATA

//REPLACE ALL DATA IN DATABASE
/*
database.ref().set("this is my data");

database.ref().set({
     age: 100
});

database.ref('age').set(100);

//

//UPDATE DATA TO DATABASE
database.ref('name').set('Pheiroijam Amarjit');

//UPDATE DATA TO SPECIFIC PART OF DATBASE
database.ref('location/city').set('New York');


//UPDATE WITH PROMISE
database.ref('location/city').set('Imphal')
    .then(() => {
        console.log('DATA: SAVED');
    })
    .catch((e) => {
        console.log("DATABSE ERROR : EXPENSIFY \n\n", e);
    })

//ASYNC
console.log('I made a request to change the date');




//REMOVE DATA

database.ref().remove()
    .then(() => {
        console.log(' DATA : WIPED COMPLETE');
    });

database.ref('isSingle').set(null)
    .then(() => {
        console.log(' DATA : WIPED COMPLETE');
    });



//UPDATE DATA

database.ref().update({
    name: 'Mike',
    age: 30,
    job: 'Software developer'
});

database.ref().update({
    job: 'Manager',
    'location/city': 'Boston'
});



database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log("Error :", e);
    });
*/

/*
const onValueChange = (snapshot) => {
    console.log(snapshot.val());
}
database.ref().on('value', onValueChange);

setTimeout(() => {
    database.ref('age').set(20)
}, 3000);
setTimeout(() => {
    database.ref('age').set(30)
}, 5000);

setTimeout(() => {
    database.ref().off(onValueChange)
}, 6000);

setTimeout(() => {
    database.ref('age').set(50)
}, 7000);
*/

// database.ref().on('value', (snapshot) => {
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job}`)
// });


// const notes = [{
//     id: 12,
//     title: 'note',
//     body: 'this body'
// },
// {
//     id: 122,
//     title: 'note2',
//     body: 'this sbody'
// },
// ];



// var expense = {
//     discription: "",
//     note: "",
//     amount: '1500',
//     createdAt: '97533555'
// }


// database.ref('expense').push({
//     discription: "Rent Bill",
//     note: "",
//     amount: '4500',
//     createdAt: '97533555'
// });
// database.ref('expense').push({
//     discription: "Water Bill",
//     note: "",
//     amount: '500',
//     createdAt: '97533555'
// });

// database.ref('expense').push({
//     discription: "Food Bill",
//     note: "",
//     amount: '1500',
//     createdAt: '97533555'
// });



// database.ref('expense').once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log('\n\n\n\n', expenses);
//     });


// database.ref('expense').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log('\n\n\n\n', expenses);
// });


// CHILD REMOVE
database.ref('expense').on('child_removed', (snapshot) => {
    console.log('REMOVED :', snapshot.val());
});
// CHILD CHANGED
database.ref('expense').on('child_changed', (snapshot) => {
    console.log('CHANGED :', snapshot.val());
});
// CHILD ADDED
database.ref('expense').on('child_added', (snapshot) => {
    console.log('CHANGED :', snapshot.val());
});