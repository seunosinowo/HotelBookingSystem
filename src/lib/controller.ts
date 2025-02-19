import { collection, getFirestore } from 'firebase/firestore'
import { app } from './firebase'

export const firestore = getFirestore(app)

//Hotels collections
export const hotelcollection = collection(firestore, 'hotels');