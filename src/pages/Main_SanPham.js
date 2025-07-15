// src/pages/Main_SanPham.js
import danhSachSanPham from '../data/Data_SanPham.js';

// Hàm hiển thị sản phẩm ra giao diện
function hienThiSanPham() {
  const container = document.getElementById("sanpham-container");

  // Duyệt qua từng sản phẩm và tạo phần tử HTML tương ứng
  danhSachSanPham.forEach((sp) => {
    // Tạo thẻ div chứa từng sản phẩm
    const card = document.createElement("div");
    card.className = "card-sanpham";

    // Gắn nội dung HTML
    card.innerHTML = `
      <img src="${sp.hinh}" alt="${sp.ten}">
      <h3>${sp.ten}</h3>
      <p>${sp.gia.toLocaleString()} đ</p>
      <button>Thêm vào giỏ</button>
    `;

    // Thêm card vào container
    container.appendChild(card);
  });
}

// Gọi hàm khi DOM load xong
document.addEventListener("DOMContentLoaded", hienThiSanPham);
