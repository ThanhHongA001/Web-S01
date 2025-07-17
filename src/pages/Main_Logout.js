// Main_Logout.js

// Hàm xử lý khi submit form đăng ký
document.getElementById('formDangKy').addEventListener('submit', function (e) {
  e.preventDefault(); // Ngăn submit reload trang

  const tenDangNhap = document.getElementById('username').value.trim();
  const matKhau = document.getElementById('password').value.trim();
  const thongBao = document.getElementById('thongBao');

  // Kiểm tra nhập thiếu
  if (!tenDangNhap || !matKhau) {
    thongBao.textContent = "Vui lòng nhập đầy đủ thông tin.";
    return;
  }

  // Lấy danh sách tài khoản từ localStorage hoặc từ dataTaiKhoan ban đầu
  let danhSachTaiKhoan = JSON.parse(localStorage.getItem('taiKhoan')) || [...dataTaiKhoan];

  // Kiểm tra tài khoản đã tồn tại chưa
  const tonTai = danhSachTaiKhoan.some(acc => acc.username === tenDangNhap);
  if (tonTai) {
    thongBao.textContent = "Tài khoản đã tồn tại. Vui lòng chọn tên khác.";
    return;
  }

  // Thêm tài khoản mới
  danhSachTaiKhoan.push({
    username: tenDangNhap,
    password: matKhau
  });

  // Lưu vào localStorage
  localStorage.setItem('taiKhoan', JSON.stringify(danhSachTaiKhoan));

  // Hiển thị thông báo thành công
  thongBao.style.color = "green";
  thongBao.textContent = "Đăng ký thành công! Bạn có thể đăng nhập.";

  // Reset form
  document.getElementById('formDangKy').reset();
});
