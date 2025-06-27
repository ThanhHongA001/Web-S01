const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Đọc danh sách người dùng
function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

// Ghi danh sách người dùng
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// API đăng ký
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json({ success: false, message: 'Thiếu thông tin!' });
  let users = readUsers();
  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: 'Tài khoản đã tồn tại!' });
  }
  users.push({ username, password });
  writeUsers(users);
  res.json({ success: true });
});

// API đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json({ success: false, message: 'Thiếu thông tin!' });
  let users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.json({ success: false, code: 'NOT_FOUND', message: 'Tài khoản chưa tồn tại!' });
  if (user.password !== password) return res.json({ success: false, code: 'WRONG_PASSWORD', message: 'Sai mật khẩu!' });
  res.json({ success: true });
});

// Trang home
app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));