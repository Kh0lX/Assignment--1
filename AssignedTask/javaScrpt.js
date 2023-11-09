
const form = document.getElementById('form');

form.addEventListener('submit',(e) => {
    
    e.preventDefault()

    // get user input values
    const username = form.name.value
    const userpassword = form.password.value

    const authenticated = authentication(username,userpassword)

    if(authenticated){
        alert("Login Success")
    }else{
        alert("Error ! Incorrect details entered!")
    }

})


function authentication(username, password){

    if( username === "admin" && password === "123456"){
        return true
    }else{
        return false
    }

}