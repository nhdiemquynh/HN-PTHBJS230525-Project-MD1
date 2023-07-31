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

  // localStorage.clear()
  // Đăng ký
  function handleSubmit(event) {
    event.preventDefault(); // 
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    // Check if there is already data in localStorage
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    // Check if the email already exists in the registered users
    const emailExists = registeredUsers.some((user) => user.email === email);
    if (password.length < 6) {
        alert("Thiếu kí tự!");
    } else if (emailExists) {
        alert("Email bị trùng");
    } else {
        // Create an object to store user data
        const userData = {
            email: email,
            password: password
        };
        console.log(userData);
        // Add the new user data to the array
        registeredUsers.push(userData);
        // Save the updated data back to localStorage
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
        // Clear the form fields for the next registration
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
        alert("Đăng kí thành công!");
    }
}
// Add event listener to the form
const registrationForm = document.getElementById("register-form");
registrationForm.addEventListener("submit", handleSubmit)

// Đăng nhập
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission to a server
  // Get user input values
  const username = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  // Check if there is already data in localStorage
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
  // Check if the username and password match any registered user
  const user = registeredUsers.find((user) => user.email === username && user.password === password);
  if (user) {
      alert("Đăng nhập thành công!");
      window.location.href = "http://127.0.0.1:5500/PRODUCTS/products.html";
  } else {
      alert("Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
  }
}
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLogin);