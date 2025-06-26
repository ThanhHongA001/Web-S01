import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Gán sự kiện click cho nút đăng ký
document.getElementById('registerBtn').addEventListener('click', () => {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const message = document.getElementById('registerMessage');

  // Gọi hàm tạo tài khoản bằng Firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
    // Đăng ký thành công
    message.innerText = 'Đăng ký thành công! Bạn có thể đăng nhập.';
    message.style.color = 'green';
    console.log("User đăng ký:", userCredential.user);
    setTimeout(() => 
        {
        // Chuyển hướng về trang đăng nhập sau 1.5 giây
        window.location.href = "index.html";
        }, 1500);
    })
    .catch(error => {
      // Lỗi đăng ký
      message.innerText = 'Lỗi: ' + error.message;
      message.style.color = 'red';
    });
});
