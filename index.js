
/*----------------------------------------part1----------------------------------------*/
var admin = require("firebase-admin");
// var faker = require('faker');
// import  faker  from '@faker-js/faker';

var serviceAccount = require("./serviceAccountKEY.json");
const { query } = require("express");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://egg-project-f7924-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore();

//นำค่าจาก Databases มาแสดง
// let customersRef = db.collection("customers");

// customersRef.get().then((querySnapshot) =>{
//     querySnapshot.forEach(document => {
//         console.log(document.data());
//     })
// })

//อัพเดทข้อมูลขึ้น firestore
// const data = {
//     id: 1,
//     name: "Aum"
// }

// const data1 = {
//     id: 2,
//     name: "Lues"
// }

// db.collection("Customers").doc(data.id.toString()).set(data);
// db.collection("Customers").doc(data1.id.toString()).set(data1);

//creat a new erite batch
// const batch = db.batch();

// const customers3 = db.collection("Customers").doc("3");
// const customers4 = db.collection("Customers").doc("4");
// const customers5 = db.collection("Customers").doc("5");
// const customers6 = db.collection("Customers").doc("6");
// const customers7 = db.collection("Customers").doc("7");

// batch.set(customers3, {id:3, name: "customer 3"});
// batch.set(customers4, {id:4, name: "customer 4"});
// batch.set(customers5, {id:5, name: "customer 5"});
// batch.set(customers6, {id:6, name: "customer 6"});
// batch.set(customers7, {id:3, name: "customer 7"});

// //run the batch
// batch.commit().then(res => {
//     console.log("BATCH RUN SUCCESSFULLY")
// });


/*----------------------------------------part2----------------------------------------*/
//delete documents
// db.collection("Customers").doc("5").delete().then(res => {
//     console.log("document deleted succrsffuly")
// });


/*----------------------------------------part3----------------------------------------*/
//get a document
// db.collection("customers").doc("3").get().then(doc =>{
//     console.log(doc.data());
// })

//get all document
// db.collection("customers").get().then(snapshot =>{
//     snapshot.forEach(element => {
//         console.log(element.data());
        
//     });
// });

//listen for real time changes
// db.collection("customers").doc("2").onSnapshot(docSnapshot =>{
//     console.log(docSnapshot.data());
// })

/*----------------------------------------part4----------------------------------------*/
/* for (let index = 0; index < 100; index++) {
    db.collection("Cutomer").doc(index.toString()).set({
        id: index,
        name: faker.name.firetName() + " " + faker.name.lastName()
    })
}
 */


