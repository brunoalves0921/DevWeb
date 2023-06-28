class LoginService {
    login(username, password) {
      if (username === 'admin' && password === 'admin') {
        return true; // Successful login
      } else {
        return false; // Invalid username or password
      }
    }
  }
  
  module.exports = LoginService;
  