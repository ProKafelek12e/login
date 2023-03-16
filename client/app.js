async function checkLogin(){
    const login =document.getElementById("login").value
    const password = document.getElementById("password").value

    const data = await fetch(`http://localhost:3000/login/${login}/${password}`)
    console.log(login)
    console.log(password)
    const json = await data.json()
    console.log(json)
}
function checkAdmin(){
    const admin = localStorage.getItem('login')
    if(admin != 'admin'){
        window.location.href = "/client/login.html"
    }
    checkIfLogged()
}
function checkIfLogged(){
    const login = localStorage.getItem('login')
    if(login == 'admin'){
        const button = document.createElement("button")
        button.innerHTML = "logout"
        button.setAttribute("onclick","logout()")
        document.getElementById("menu").appendChild(button)
    }
}

function logout(){
    localStorage.setItem('login','false')
    window.location.reload()
}