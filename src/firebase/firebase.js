import * as firebase from "firebase";
import moment from "moment";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Lights",
//   note: "",
//   amount: 25000,
//   createdAt: moment(0).add(4, "days").valueOf(),
// });

// database.ref("expenses").push({
//     description: "Credit Card",
//     note: "",
//     amount: 4500,
//     createdAt: moment(0).add(1, "days").valueOf(),
//   });

//   database.ref("expenses").push({
//     description: "Bear",
//     note: "",
//     amount: 14500,
//     createdAt: moment(0).add(100, "days").valueOf(),
//   });

// database.ref("notes/-M6FggyPBzBuL7XOw7P7").update({
//   title: "oh I dont know",
// });

// database.ref("notes").push({
//     title: "HEllo note",
//     body: "what is going on?"
// });

// // subscribe to data to get updates

// database.ref()
//   .on('value', (snapshot) => {
//     const data = snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
//   })

// setTimeout(() => {
//     database.ref().update(
//         {
//             'job/title': "CEO",
//             'job/company': "Google"
//         }
//     )
// },3500)

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val())
//     }, (e) => {
//         console.log("error wiith your subscription", e)
//     }) // we need to use callback pattern here as this is called multiple tiumes, promis can only be run once.

// setTimeout(()=> {
//     database.ref('age').set(40)
// }, 3500)

// setTimeout(()=> {
//     database.ref().off('value', onValueChange) // unsubscripbe from abouve
// }, 7000)

// setTimeout(()=> {
//     database.ref('age').set(50)
// }, 10500)
// get data once
// database.ref()
//     .once('value')
//     .then((snapshot)=> {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log("ups")
//     })

//   database.ref().set({
//       name: "Lukasz",
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: "Software Develope",
//           company: "Wokash"
//       },
//       isSingle: false,
//       location : {
//           city: "Edinburgh",
//           country: "GB"
//       }
//   }).then(() => {
//       console.log("data synced")
//   }).catch((e) => {
//       console.log(e)
//   })

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': "Tesla",
//       'location/city': "AUstin"
//   })

// database.ref("isSingle")
// .remove()
// .then(()=> {
//     console.log("data was removed")
// }).catch((e) => {
//     console.log("Did not remove data :(")
// })
