import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBGk5kr70tKHVmUAJQO2EnPWtSPtSSGaXQ",
  authDomain: "craftworldofwar.firebaseapp.com",
  projectId: "craftworldofwar",
  storageBucket: "craftworldofwar.appspot.com",
  messagingSenderId: "1084422081057",
  appId: "1:1084422081057:web:0e28e5ab8e5701d0dd3160",
  measurementId: "G-0YCNMD4N1R",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
