import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import firebaseApp, { db } from './firebase';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [subStocks, setSubStocks] = useState([]);
  const [otherStocks, setOtherStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const stockCollection = db.collection('Stocks');
  // const userCollection = db.collection('Users');
  const { currentUser } = useAuth();

  function subscribeStock(stockId) {
    return stockCollection.doc(stockId).update({
      subscribers: firebaseApp.firestore.FieldValue.arrayUnion(
        currentUser.email
      ),
    });
  }

  function unSubscribeStock(stockId) {
    return stockCollection.doc(stockId).update({
      subscribers: firebaseApp.firestore.FieldValue.arrayRemove(
        currentUser.email
      ),
    });
  }

  useEffect(() => {
    stockCollection.onSnapshot(
      (snapshot) => {
        const allStocksArr = snapshot.docs.map((doc) => doc.data());

        setOtherStocks(
          allStocksArr.filter(
            (stock) => !stock.subscribers?.includes(currentUser.email)
          )
        );
        // console.log('unSubscribed Stocks', otherStocks);

        setSubStocks(
          allStocksArr.filter((stock) =>
            stock.subscribers?.includes(currentUser.email)
          )
        );

        // console.log('Subscribed Stocks', subStocks);

        setLoading(false);
      },
      (error) => console.log(error)
    );

    return () =>
      stockCollection.onSnapshot(() =>
        console.log('Snapshot listening unsubscribed')
      );
  }, []);

  const value = {
    subStocks,
    otherStocks,
    subscribeStock,
    unSubscribeStock,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
}
