import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9qkrHoGOjKE2aVFNskJ-K235vorFUQgc",
  authDomain: "flightready-97e61.firebaseapp.com",
  projectId: "flightready-97e61",
  storageBucket: "flightready-97e61.appspot.com", // ✅ Düzeltildi
  messagingSenderId: "276102696065",
  appId: "1:276102696065:web:82f8e0350e9abe5d7d1180",
  measurementId: "G-FX6WFDRBME"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;