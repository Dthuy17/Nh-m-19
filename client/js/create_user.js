async function handleSunmitAddUser() {
   try {
       // Lấy giá trị từ form
       const username = document.getElementById('username').value;
       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;
       const role = document.getElementById('role').value;

       // Gửi giá trị từ client lên server
       const response = await axios.post('auth/admin/user/create', {
           username: username,
           email: email,
           password: password,
           role: role
       });

       console.log(response); // Thêm câu lệnh log này để hiển thị response trong console

       if (response.status === 200) {
           // Xử lý kết quả trả về
           window.location.href = 'admin_page.html';
       }
   } catch (error) {
       // Xử lý lỗi
   }
}
