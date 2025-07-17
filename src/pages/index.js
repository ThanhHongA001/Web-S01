// ========== Dữ liệu sản phẩm mẫu (1000 sản phẩm) ==========
const anhSanPham = [
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
];

// ========== Tạo dữ liệu sản phẩm ==========
const dataSanPham = [];

for (let i = 1; i <= 1000; i++) {
  dataSanPham.push({
    id: i,
    ten: `Sản phẩm số ${i}`,
    gia: 100000 + (i * 1000),
    // Chọn ảnh theo index lặp (1 -> 10)
    img: `${anhSanPham[(i - 1) % anhSanPham.length]}?w=200&h=200&fit=crop`, // thêm kích thước cho đồng đều
  });
}


// ========== Biến và hàm xử lý banner sản phẩm ==========

// Index hiện tại của sản phẩm đang hiển thị
let index = 0;

// Hàm hiển thị sản phẩm theo index hiện tại
function hienThiBanner() {
  // Lấy phần tử DOM
  const bannerImage = document.getElementById("bannerImage");
  const bannerTen = document.getElementById("bannerTen");

  // Kiểm tra tồn tại để tránh lỗi nếu HTML chưa có phần tử
  if (!bannerImage || !bannerTen) {
    console.warn("Không tìm thấy phần tử banner trong HTML");
    return;
  }

  // Lấy sản phẩm hiện tại
  const sp = dataSanPham[index];

  // Gán thông tin sản phẩm vào banner
  bannerImage.src = sp.img;
  bannerTen.textContent = sp.ten;

  // Tăng index và quay lại 0 nếu hết danh sách
  index = (index + 1) % dataSanPham.length;
}

// Gọi ngay khi trang load xong
document.addEventListener("DOMContentLoaded", function () {
  hienThiBanner(); // Hiển thị lần đầu

  // Tự động chuyển banner sau mỗi 5 giây
  setInterval(hienThiBanner, 5000);
});
