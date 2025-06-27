export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const checkUserExists = (users, email) => {
  return users.some(user => user.email === email);
};

export const saveUserData = (users, newUser) => {
  users.push(newUser);
  // Logic to save users to a file or database can be added here
};