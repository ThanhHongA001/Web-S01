import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Gán sự kiện click cho nút đăng nhập
document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Thực hiện đăng nhập bằng Firebase Auth
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Đăng nhập thành công
      const user = userCredential.user;
      document.getElementById('loginMessage').innerText = 'Đăng nhập thành công!';
      console.log("User:", user);
    })
    .catch(error => {
      // Lỗi đăng nhập
      document.getElementById('loginMessage').innerText = 'Lỗi: ' + error.message;
    });
});
