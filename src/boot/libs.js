import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";

export default boot(({ app }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCf4pNu5-xeFX23HnCFlBm9_Zki2M-HE54",
    authDomain: "cat-rescue-4d5fd.firebaseapp.com",
    projectId: "cat-rescue-4d5fd",
    storageBucket: "cat-rescue-4d5fd.appspot.com",
    messagingSenderId: "970679675724",
    appId: "1:970679675724:web:8857783356a668aa693de9",
    measurementId: "G-R7ZL2G9ZK8"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  app.use(firebaseApp);
});
