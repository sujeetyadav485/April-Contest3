let form = document.getElementById('form')
let errorText = document.getElementById('errorText')
let alert = document.getElementById('alert')
let token = ""
// let profile = document.querySelector('#profile')
// console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    let cpass = document.getElementById('cpass').value
    
    if(name==""||email==""||pass===""||cpass=="" ){
        console.log("fail");
        errorText.innerHTML = "<div class='alertText'>Error : All Fields are mandatory</div>"
    }
    else if(pass!==cpass){
        errorText.innerHTML = "<div class='alertText'>Error : Password is not matching</div>"
    }
    else{
      console.log("success");
       token = (Math.random()*1000000000);
      localStorage.setItem("name1", name);
      localStorage.setItem("email1", email);
      localStorage.setItem("pass1", pass);
      localStorage.setItem("token1", token);
      window.location.href = "./home.html";
     
    }
   
})
function profile(){
    if(localStorage.getItem("token1")===null){
        alert.innerHTML = "<div class='alertText'>Please Login first</div>"
       }
    else{
        window.location.href = "./home.html";
    }
}
console.log(token);






