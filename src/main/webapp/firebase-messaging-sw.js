// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDNUu60eiiq0g83k9yWIj9_X7ceYXlCXFQ',
  authDomain: 'smart-home-2023-317af.firebaseapp.com',
  projectId: 'smart-home-2023-317af',
  storageBucket: 'smart-home-2023-317af.appspot.com',
  messagingSenderId: '508582573682',
  appId: '1:508582573682:web:5aebeca1873c221f7b74eb',
  measurementId: 'G-KXR7B208NM',
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log('subscriber the push notification when application in background');
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
// });
