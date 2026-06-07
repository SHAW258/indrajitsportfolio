import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAm2qMAVOBaAvBf5Hhp_0pNEjjeU9BNeVM',
  authDomain: 'portfolio-4f4d9.firebaseapp.com',
  databaseURL: 'https://portfolio-4f4d9-default-rtdb.firebaseio.com',
  projectId: 'portfolio-4f4d9',
  storageBucket: 'portfolio-4f4d9.firebasestorage.app',
  messagingSenderId: '543139036873',
  appId: '1:543139036873:web:a9249a39cbd536c4085718',
  measurementId: 'G-48T8GYJR75',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

export default app
