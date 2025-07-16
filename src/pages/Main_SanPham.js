
function taoKhungSanPham(sanPham) {
  return `
    <div class="sanpham">
      <img src="${sanPham.img}" alt="${sanPham.ten}" />
      <h3>${sanPham.ten}</h3>
      <p>${sanPham.gia.toLocaleString()} đ</p>
      <button onclick="themVaoGio(${sanPham.id})">Mua hàng</button>
    </div>
  `;
}

// Hàm hiển thị toàn bộ sản phẩm
function hienThiSanPham() {
  const container = document.getElementById("danhSachSanPham");
  container.innerHTML = dataSanPham.map(sp => taoKhungSanPham(sp)).join("");
}

// Hàm thêm vào giỏ và lưu vào localStorage
function themVaoGio(idSanPham) {
  const sanPham = dataSanPham.find(sp => sp.id === idSanPham);
  if (!sanPham) return;

  let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

  const index = gioHang.findIndex(item => item.id === idSanPham);

  if (index !== -1) {
    gioHang[index].soLuong += 1;
  } else {
    gioHang.push({ ...sanPham, soLuong: 1 });
  }

  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  alert("Đã thêm vào giỏ hàng!");
}

// Load danh sách khi trang được load
document.addEventListener("DOMContentLoaded", hienThiSanPham);
