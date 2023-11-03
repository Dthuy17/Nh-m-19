async function handleRegister(){

   try {
      //lay value tren form
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
     
      //gui value from clinet to sever
       const response = await axios.post('api/auth/register', {
          username: username,
          email: email,
          password: password
  
        })
        if(response.status == 200){
          window.location.href = "login.html";

        }
   } catch (error) {
    
   }    

}