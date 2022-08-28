var logout=null
function goToHomepage(){
    logout=prompt('Would you like to log out of Bookkeeper? (Yes/No)')
    if(logout=='Yes'){
        window.location.href="homepage.html"
    }
    else if(logout=='No'){
        window.location.href=""
    }
    else{
        alert('Incorrect Input. Try Again')
    }
}