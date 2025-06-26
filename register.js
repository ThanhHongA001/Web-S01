import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Gán sự kiện click cho nút đăng ký
document.getElementById('registerBtn').addEventListener('click', () => {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Gọi hàm tạo tài khoản bằng Firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Đăng ký thành công
      const user = userCredential.user;
      document.getElementById('registerMessage').innerText = 'Đăng ký thành công! Hãy quay lại đăng nhập.';
      console.log("User đăng ký:", user);
    })
    .catch(error => {
      // Lỗi đăng ký
      document.getElementById('registerMessage').innerText = 'Lỗi: ' + error.message;
    });
});
