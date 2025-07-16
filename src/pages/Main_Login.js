// src/pages/Main_Login.js

// Lắng nghe khi người dùng bấm nút Đăng nhập
document.getElementById("formDangNhap").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn reload trang

  const tenDangNhap = document.getElementById("tenDangNhap").value.trim();
  const matKhau = document.getElementById("matKhau").value.trim();
  const hienThiLoi = document.getElementById("loiDangNhap");

  // Tìm tài khoản khớp trong danh sách
  const taiKhoanHopLe = dataTaiKhoan.find(
    acc => acc.username === tenDangNhap && acc.password === matKhau
  );

  if (taiKhoanHopLe) {
    // Lưu trạng thái đăng nhập vào localStorage
    localStorage.setItem("nguoiDungDangNhap", tenDangNhap);

    // Chuyển hướng về trang chủ
    window.location.href = "../index.html";
  } else {
    hienThiLoi.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
  }
});
