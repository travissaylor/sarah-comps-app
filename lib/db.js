const firebaseConfig = {
    // paste your firebase config here:
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_API_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

  export default async function loadFirebase() {
    const firebase = await import('firebase/app');
    await import('firebase/firestore');
    try {
      if (!firebase.apps.length) {
        const app = firebase.initializeApp(firebaseConfig);
        firebase.firestore(app);
      }
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      console.log(err);
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }
    return firebase;
  }