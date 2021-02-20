import { db } from './firebase';

const stockCollection = db.collection('Stocks');

export const getAllStocks = () =>
  new Promise((resolve, reject) => {
    stockCollection.get().then(
      (data) => {
        const stocksArr = data.docs.map((doc) => doc.data());
        console.log('stocksArr', stocksArr);
        resolve(stocksArr);
      },
      (error) => {
        console.log('Error getting stockData: ', error);
        reject(error);
      }
    );
  });

//   stockCollection.onSnapshot(
//     (querySnapshot) => {
//       // var cities = [];
//       // querySnapshot.forEach((doc) => {
//       //     cities.push(doc.data().name);
//       // });
//       // console.log("Current cities in CA: ", cities.join(", "));
//       console.log(querySnapshot);
//     },
//     (error) => {
//       console.log(error);
//       // ...
//     })
