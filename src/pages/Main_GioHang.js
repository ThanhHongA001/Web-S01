// src/pages/Main_GioHang.js

// Hàm hiển thị giỏ hàng từ localStorage
function hienThiGioHang() {
  const tbody = document.querySelector("#bangGioHang tbody");
  const gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

  let tongTien = 0;

  tbody.innerHTML = gioHang
    .map((sp, index) => {
      const thanhTien = sp.soLuong * sp.gia;
      tongTien += thanhTien;

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${sp.ten}</td>
          <td>${sp.gia.toLocaleString()} đ</td>
          <td>
            <button onclick="capNhatSoLuong(${sp.id}, -1)">-</button>
            <input type="number" min="1" value="${sp.soLuong}" onchange="doiSoLuong(${sp.id}, this.value)">
            <button onclick="capNhatSoLuong(${sp.id}, 1)">+</button>
          </td>
          <td>${thanhTien.toLocaleString()} đ</td>
          <td><button onclick="xoaSanPham(${sp.id})">Xóa</button></td>
        </tr>
      `;
    })
    .join("");

  document.getElementById("tongTien").innerText = tongTien.toLocaleString();
}

// Tăng hoặc giảm số lượng sản phẩm
function capNhatSoLuong(id, thayDoi) {
  let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
  const index = gioHang.findIndex(sp => sp.id === id);
  if (index !== -1) {
    gioHang[index].soLuong += thayDoi;
    if (gioHang[index].soLuong < 1) gioHang[index].soLuong = 1;
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    hienThiGioHang();
  }
}

// Thay đổi trực tiếp số lượng trong input
function doiSoLuong(id, soLuongMoi) {
  let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
  const index = gioHang.findIndex(sp => sp.id === id);
  if (index !== -1) {
    gioHang[index].soLuong = Math.max(parseInt(soLuongMoi), 1);
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    hienThiGioHang();
  }
}

// Xóa sản phẩm
function xoaSanPham(id) {
  let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
  gioHang = gioHang.filter(sp => sp.id !== id);
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  hienThiGioHang();
}

// Tải khi trang mở
document.addEventListener("DOMContentLoaded", hienThiGioHang);
