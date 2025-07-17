// File: Data_SanPham.js

const dataSanPham = [];

for (let i = 1; i <= 1000; i++) {
  dataSanPham.push({
    id: i,
    ten: `Sản phẩm số ${i}`, // tên sản phẩm sẽ là "Sản phẩm số 1", "Sản phẩm số 2", ...
    gia: 100000 + (i * 1000), // mỗi sản phẩm có giá khác nhau, tăng dần
    img: `../src/drawable/img_${String(i).padStart(2, '0')}.jpg`, // tự động sinh tên ảnh từ img_01.jpg đến img_100.jpg
  });
}
