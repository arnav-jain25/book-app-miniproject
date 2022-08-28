function goToHomepage() {
    let email = document.getElementById('regEmail').value
    let pwd = document.getElementById('regPwd').value
    let phone = document.getElementById('regPhone').value
    let name = document.getElementById('regName').value
    let dob = document.getElementById('regDOB').value
    let address = document.getElementById('regAdd').value

    if (email.length == 0 || pwd.length == 0 || phone.length == 0 || name.length == 0 || dob.length == 0 || address == 0) {
        alert('Few or more details are missing. Please completely fill the registration form')
    }
    else {
        window.location.href = "homepage.html"
    }
}