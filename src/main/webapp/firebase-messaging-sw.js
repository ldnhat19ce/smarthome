importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBIra0-RDrPOwA4jAc-x0WGXpnnaI7M9zc',
  authDomain: 'smarthome-3db14.firebaseapp.com',
  projectId: 'smarthome-3db14',
  storageBucket: 'smarthome-3db14.appspot.com',
  messagingSenderId: '487020548819',
  appId: '1:487020548819:web:23ad1fedb7a0f1860a3a26',
  measurementId: 'G-GB7KC92KZ5',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('subscriber the push notification when application in background');
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
