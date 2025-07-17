const dataSanPham = [];

for (let i = 1; i <= 1000; i++) {
  dataSanPham.push({
    id: i,
    ten: `Sản phẩm số ${i}`,
    gia: 100000 + (i * 1000),
    // Ảnh ngẫu nhiên có seed khác nhau, đảm bảo hiển thị
    img: `https://picsum.photos/seed/sp${i}/200/200`, 
  });
}
