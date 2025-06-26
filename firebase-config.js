// Import các function cần thiết từ Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Cấu hình Firebase (theo bạn cung cấp)
const firebaseConfig = {
  apiKey: "AIzaSyDVNfIx9hZrF7qGHt5aj87pxSjjoXHQNFw",
  authDomain: "web-s01.firebaseapp.com",
  projectId: "web-s01",
  storageBucket: "web-s01.firebasestorage.app",
  messagingSenderId: "689277345276",
  appId: "1:689277345276:web:5a6445a5ca794567ce6679",
  measurementId: "G-H8PKDY42JZ"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Khởi tạo auth để sử dụng đăng nhập/đăng ký

export { auth };
