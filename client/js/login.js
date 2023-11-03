async function handleLogin() {
    // lay value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    //gui value from clinet to sever
    const response = await axios.post('api/auth/login', {
        email: email,
        password: password

      });
      
      if(response.status == 200){
            const accessToken = response.data.accessToken;
            //lay thong tin payload
            const payload = jwt_decode(accessToken);

            if(payload.role ==='regular'){
                window.location.href ="index1.html";
            } else{
                window.location.href ="admin_page.html";
            }
            
            //save acesstoken to client
            localStorage.setItem('access_token',accessToken);
          


      }
    
}