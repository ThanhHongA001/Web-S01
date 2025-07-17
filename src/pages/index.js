// ========== Banner sản phẩm tự động ===========
const dataSanPham = [
  {
    id: 1,
    ten: "Áo Thun Nam Basic",
    gia: 120000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 2,
    ten: "Quần Jean Nữ Cá Tính",
    gia: 250000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 3,
    ten: "Áo Hoodie Unisex",
    gia: 280000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 4,
    ten: "Áo Polo Nam",
    gia: 170000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 5,
    ten: "Chân Váy Dài",
    gia: 190000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 6,
    ten: "Quần Jogger Nam",
    gia: 210000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 7,
    ten: "Áo Khoác Bomber",
    gia: 320000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 8,
    ten: "Váy Hoa Nữ",
    gia: 230000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 9,
    ten: "Quần Short Thể Thao",
    gia: 140000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 10,
    ten: "Áo Croptop Nữ",
    gia: 160000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 11,
    ten: "Áo Dài Tay Nam",
    gia: 150000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 12,
    ten: "Set Bộ Nữ",
    gia: 290000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 13,
    ten: "Áo Tank Top Gym",
    gia: 135000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 14,
    ten: "Áo Vest Nam",
    gia: 350000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 15,
    ten: "Quần Tây Công Sở",
    gia: 240000,
    img: "../src/drawable/img_01.jpg",
  },
  {
    id: 16,
    ten: "Váy Body Gợi Cảm",
    gia: 275000,
    img: "../src/drawable/img_01.jpg",
  }
];

// Biến index dùng để biết đang hiển thị sp nào
let index = 1;

// Hàm hiển thị sản phẩm tiếp theo
function hienThiBanner() {
  const bannerImage = document.getElementById("bannerImage");
  const bannerTen = document.getElementById("bannerTen");

  const sp = dataSanPham[index];

  bannerImage.src = sp.img;
  bannerTen.textContent = sp.ten;

  // Tăng index và reset nếu hết mảng
  index = (index + 1) % dataSanPham.length;
}

// Gọi ngay để hiển thị ban đầu
hienThiBanner();

// Cứ 5s tự động chuyển ảnh
setInterval(hienThiBanner, 5000);
