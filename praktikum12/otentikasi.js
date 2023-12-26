const username = "der"
const password = "15"

function auth(){
    // Tangakp nilai yang diinput user
    let userInput = document.getElementById("username").value
    let passswordInput = document.getElementById("password").value
    
    let form = document.getElementById('form')

    if(username == userInput && password == passswordInput){
        alert("Login Berhasil")
        form.submit()
    }else{
        alert("Login Gagal!")
    }
}