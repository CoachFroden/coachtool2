importScripts('https://www.gstatic.com/firebasejs/12.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAKZMu2HZPmmoZ1fFT7DNA9Q6ystbKEPgE",
  authDomain: "samnanger-g14-f10a1.firebaseapp.com",
  projectId: "samnanger-g14-f10a1",
  storageBucket: "samnanger-g14-f10a1.firebasestorage.app",
  messagingSenderId: "926427862844",
  appId: "1:926427862844:web:5e6d11bb689c802d01b039",
  measurementId: "G-EJL3YYC63R"
};

// ✅ VIKTIG
firebase.initializeApp(firebaseConfig);

self.addEventListener("push", function(event) {
  if (!event.data) return;

  const payload = event.data.json();
  const { title, body } = payload.data || {};

  event.waitUntil(
    self.registration.showNotification(title || "Varsel", {
      body: body || "",
      icon: "/icons/icon-192.png"
    })
  );
});