import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { hotelcollection } from '../lib/controller'

function Card() {
  const [hotels, setHotels] = useState<DocumentData[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(hotelcollection, 
      (snapshot: QuerySnapshot<DocumentData>) => {
        setHotels(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, 
  []
);
  console.log(hotels, "hotels")

  return (
    <div className='card'>
      <h2 className='title'>All Hotels</h2>
      {hotels && hotels.length ? (
        <div>
          {
            hotels?.map((hotel) => (
              <Information hotel={hotel} />
            ))
          }
        </div>
      ) : null}
    </div>
  )
}

export default Card