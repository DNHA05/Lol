import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, runTransaction, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkAy-W-cQdRcSAhaEwf2SknsB5K4vBMTw",
    authDomain: "harblx-e3e8e.firebaseapp.com",
    projectId: "harblx-e3e8e",
    storageBucket: "harblx-e3e8e.firebasestorage.app",
    messagingSenderId: "942699698919",
    appId: "1:942699698919:web:931426388fb82f9b082042",
    databaseURL: "https://harblx-e3e8e-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const viewRef = ref(db, 'total_views');

// Tăng view
runTransaction(viewRef, (current) => (current || 0) + 1);

// Hiển thị view
onValue(viewRef, (snapshot) => {
    const count = snapshot.val();
    const display = document.getElementById('view-count-display');
    if (display) display.innerText = count ? count.toLocaleString() : '0';
});

// Kích hoạt hiệu ứng sao từ bypass.js nếu có
document.addEventListener('DOMContentLoaded', () => {
    if (typeof createUniverse === 'function') {
        createUniverse();
    }
});
