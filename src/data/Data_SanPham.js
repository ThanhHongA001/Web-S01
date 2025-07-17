// ========== Dữ liệu sản phẩm mẫu ==========
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
