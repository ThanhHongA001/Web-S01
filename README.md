<!-- # Web-S01 -->
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang Chủ</title>
    <link rel="stylesheet" href="../src/styles/main.css">
</head>
<body>
    <div class="header">
        <div class="header-title">Trang Chủ</div>
        <div class="header-actions">
            <button id="loginBtn">Đăng nhập</button>
            <button id="registerBtn">Đăng ký</button>
        </div>
    </div>
    <script>
        document.getElementById('loginBtn').onclick = function() {
            window.location.href = 'Main_Home_01.html';
        };
        document.getElementById('registerBtn').onclick = function() {
            window.location.href = 'Main_Home_02.html';
        };
    </script>
    <script src="index.js"></script>
</body>
</html>
