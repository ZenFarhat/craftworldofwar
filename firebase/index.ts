import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

import { DefaultListModel } from './../models/DefaultList.interface'

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
export const db = getFirestore(app)

const zones = [
  { name: "Rockclaw Peaks", imageUrl: "" },
  { name: "Eastrapids", imageUrl: "" },
  { name: "The Cyclone", imageUrl: "" },
  { name: "Belowtown", imageUrl: "" },
  { name: "Summerfall", imageUrl: "" },
  { name: "Chokepoint Jungle", imageUrl: "" },
  { name: "Million Stingers", imageUrl: "" },
  { name: "Amadan Forest", imageUrl: "" },
  { name: "Greyfissure Valley", imageUrl: "" },
  { name: "Whitestone Hill", imageUrl: "" },
  { name: "Gungle Hole", imageUrl: "" },
  { name: "Gon Ho Rea", imageUrl: "" },
  { name: "Marshes of Misery", imageUrl: "" },
  { name: "Outback", imageUrl: "" },
  { name: "Demonwood", imageUrl: "" },
  { name: "Eastern Rotgrounds", imageUrl: "" },
]

export const addZones = async () => {
  await setDoc(doc(db, "defaultList", "zones"), {
    zones,
  })
}

// get zones
export const getZones = async () => {
  const docRef = doc(db, "defaultList", "zones")
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data() as DefaultListModel
  } else {
    return null
  }
}
