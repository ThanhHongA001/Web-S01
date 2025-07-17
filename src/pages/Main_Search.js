// Main_Search.js

// Hàm tạo giao diện HTML cho từng sản phẩm tìm được
function taoTheSanPham(sp) {
  return `
    <div class="sanpham">
      <img src="${sp.img}" alt="${sp.ten}">
      <h3>${sp.ten}</h3>
      <p>Giá: ${sp.gia.toLocaleString()} VND</p>
      <button onclick="themVaoGio(${sp.id})">Thêm vào giỏ</button>
    </div>
  `;
}

// Hàm xử lý tìm kiếm và hiển thị kết quả
function timKiemSanPham() {
  const tuKhoa = document.getElementById('searchInput').value.toLowerCase();
  const ketQuaDiv = document.getElementById('danhSachSanPham');

  // Lọc ra các sản phẩm có tên chứa từ khoá nhập vào
  const ketQua = dataSanPham.filter(sp =>
    sp.ten.toLowerCase().includes(tuKhoa)
  );

  // Hiển thị kết quả nếu có sản phẩm tìm thấy
  if (ketQua.length > 0) {
    ketQuaDiv.innerHTML = ketQua.map(sp => taoTheSanPham(sp)).join('');
  } else {
    ketQuaDiv.innerHTML = `<p style="text-align:center; width: 100%;">Không tìm thấy sản phẩm phù hợp.</p>`;
  }
}

// Hàm thêm sản phẩm vào giỏ hàng và lưu localStorage
function themVaoGio(idSanPham) {
  const sanPham = dataSanPham.find(sp => sp.id === idSanPham);
  if (!sanPham) return;

  // Lấy giỏ hàng từ localStorage, nếu chưa có thì tạo mảng rỗng
  let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

  // Kiểm tra sản phẩm đã có trong giỏ chưa
  const index = gioHang.findIndex(item => item.id === idSanPham);

  if (index !== -1) {
    gioHang[index].soLuong += 1; // nếu đã có thì tăng số lượng
  } else {
    gioHang.push({ ...sanPham, soLuong: 1 }); // nếu chưa có thì thêm mới
  }

  // Lưu lại vào localStorage
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  alert("Đã thêm vào giỏ hàng!");
}

// Gắn sự kiện mỗi khi nhập từ khóa sẽ gọi hàm tìm kiếm
document.getElementById('searchInput').addEventListener('input', timKiemSanPham);
