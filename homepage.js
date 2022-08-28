function goToDashboard(){
    let email=document.getElementById('logEmail').value
    let pwd=document.getElementById('logPwd').value

    if(email.length==0 && pwd.length==0){
        alert('Enter Email ID and Password to continue')
    }
    else if(email.length==0){
        alert('Enter Email ID to continue')
    }
    else if(pwd.length==0){
        alert('Enter Password to continue')
    }
    else{
        window.location.href="dashboard.html"
    }
}