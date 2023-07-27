let registerFormVisible = true;
  // Lắng nghe sự kiện click trên phần tử có lớp "message"
  const messageLinks = document.querySelectorAll('.message');
  messageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng đến đường dẫn href="#"
      const registerForm = document.getElementById('register-form');
      const loginForm = document.getElementById('login-form');
      if (registerFormVisible) {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
      } else {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
      }
      // Chuyển đổi trạng thái hiện tại của biểu mẫu
      registerFormVisible = !registerFormVisible;
    });
  });