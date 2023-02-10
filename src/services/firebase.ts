import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD2JSnZICo1DcbSwjqedlhxNwRNHbfsKBI',
  authDomain: 'planning-poker-db644.firebaseapp.com',
  projectId: 'planning-poker-db644',
  storageBucket: 'planning-poker-db644.appspot.com',
  messagingSenderId: '915273631614',
  appId: '1:915273631614:web:c24d1e6df00401922b152f',
  measurementId: 'G-KF9ERPVZQ6'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export default { app, auth, firestore }
