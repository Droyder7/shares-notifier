import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db } from './firebase';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const stockCollection = db.collection('Stocks');
  const { currentUser } = useAuth();

  // function logout() {
  //   return auth.signOut();
  // }

  useEffect(() => {
    const subscribe = stockCollection
      .where('subscribers', 'array-contains', currentUser.email)
      .onSnapshot(
        (snapshot) => {
          const stocksArr = snapshot.docs.map((doc) => doc.data());
          console.log('Subscribed to stocksArr', stocksArr);
          setStocks(stocksArr);
          setLoading(false);
        },
        (error) => {
          console.log(error);
          // ...
        }
      );

    return function unsubscribe() {
      stockCollection.onSnapshot(() =>
        console.log('Snapshot listening unsubscribed')
      );
    };
  }, []);

  // const value = {
  //   stocks,
  //   logout,
  // };

  return (
    <DataContext.Provider value={stocks}>
      {!loading && children}
    </DataContext.Provider>
  );
}
