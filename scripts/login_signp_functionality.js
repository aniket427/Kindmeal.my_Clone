
function display_name(){
    var profile_data=JSON.parse(localStorage.getItem("profile_data")) || []
    console.log(profile_data)
    var mb=document.querySelector(".namefl")
    // mb.innerHTML="hii"
    namefl.innerText=innerText=`${profile_data.fname} ${profile_data.lname}`
}

display_name()


// document.querySelector(".signup_button").innerText="hiii"
// display_name()
// document.querySelector(".menu_button").innerText=`kaam krja`
main_float=document.querySelector(".main_float")
var loggedin=JSON.parse(localStorage.getItem("logvalue")) || false
console.log(loggedin)
var lg=document.querySelector(".lg")


var fbb=document.querySelector(".fbb")
var log_but=document.querySelector(".login_button")
var sign_but=document.querySelector(".signup_button")
if(loggedin == "yes"){
log_but.classList.add("popup_button_visibility")
sign_but.classList.add("popup_button_visibility")
fbb.classList.add("popup_button_visibility")
lg.classList.add("popup_button_visibility")
main_float.classList.remove("popup_button_visibility")

}
else{
log_but.classList.remove("popup_button_visibility")
sign_but.classList.remove("popup_button_visibility")
fbb.classList.remove("popup_button_visibility")
lg.classList.remove("popup_button_visibility")
main_float.classList.add("popup_button_visibility")
}



function mainlogin(){
    var sigdata=JSON.parse(localStorage.getItem("sigdata")) || []
    var login_email=document.querySelector("#login_email").value;
    var login_password=document.querySelector("#login_password").value;
    document.querySelector("#login_email").value=null;
     document.querySelector("#login_password").value=null
    var flag=true
    for(var i=0;i<sigdata.length;i++){
        if(sigdata[i].email==login_email && sigdata[i].password==login_password){
           
         console.log(sigdata[i])
        //  var profile_data=sigdata[i];
         localStorage.setItem("profile_data",JSON.stringify(sigdata[i]))
         alert("login succesful")
         flag=false
         login.classList.remove("login_popup_open")
         localStorage.setItem("logvalue",JSON.stringify("yes"))
        //  console.log("true")
        // display_name()
         document.querySelector(".namefl").innerText=`${sigdata[i].fname} ${sigdata[i].lname}`
        //  main_float.innerText="hii"
         log_but.classList.add("popup_button_visibility")
         sign_but.classList.add("popup_button_visibility")
         fbb.classList.add("popup_button_visibility")
         lg.classList.add("popup_button_visibility")
        main_float.classList.remove("popup_button_visibility")
        location.reload()
        }
    }
    if(flag){
        alert("email or password is incorrect")
    }
}