import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyASnDFeAUTUYe__wH2JmUr0pQXDtIJDX-g",
    authDomain: "airbnb-544ba.firebaseapp.com",
    projectId: "airbnb-544ba",
    storageBucket: "airbnb-544ba.firebasestorage.app",
    messagingSenderId: "718379588800",
    appId: "1:718379588800:web:b916df2b3c8f4f6deb2125"
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };