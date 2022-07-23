    // signup button:-<button onclick="open_signup_popup()">signup</button>
    // login  button :-<button onclick="open_login_popup()">login</button>

  var main_float=document.createElement("div")
  main_float.setAttribute("class","main_float")
  var right_menu=document.createElement("div")
  right_menu.setAttribute("class","right_menu")
  var menu_button=document.createElement("button")
  menu_button.setAttribute("class","menu_button")
//   menu_button.innerText="menu"
  var floater=document.createElement("div")
  floater.setAttribute("class","floater")
  var namefl=document.createElement("div")
//   namefl.innerText="menu"
  namefl.setAttribute("class","namefl")
  var spimg=document.createElement("img")
  spimg.src="https://www.kindmeal.my/images/no_photo_header.png"
 var mc= document.createElement("a")
 mc.innerText="My Coupons"
 var mr= document.createElement("a")
 mr.innerText="My Recipes"
 mr.href="my_recipes.html"
 var mp= document.createElement("a")
 mp.innerText="My KindMeal Profile"
 mp.href="myprofile.html"
 var up= document.createElement("a")  
 up.innerText="Update Profile"
 up.href="update_profile.html"
 var as= document.createElement("a")
 as.innerText="Account Settings"
 var lt= document.createElement("a")
 lt.innerText="Logout"
 floater.append(mc,mr,mp,up,as,lt)
 menu_button.append(namefl,spimg)
 right_menu.append(menu_button,floater)
 main_float.append(right_menu)
 document.querySelector("#navbar1").append(main_float)
  lt.addEventListener("click",logout)

function logout(){
    log_but.classList.remove("popup_button_visibility")
    sign_but.classList.remove("popup_button_visibility")
    fbb.classList.remove("popup_button_visibility")
    lg.classList.remove("popup_button_visibility")
    main_float.classList.add("popup_button_visibility")
    localStorage.setItem("logvalue",JSON.stringify("false"))
    var loggedin=false;
    alert("logout successful")
    console.log(loggedin)
    location.href="index.html"
}


    var sigup=document.createElement("div")
    sigup.setAttribute("class","signup_popup")
    document.querySelector("body").append(sigup)
    
        //  var sigup=document.querySelector(".signup_popup")
    
    function open_signup_popup(){
    sigup.classList.add("signup_popup_open")
    login.classList.remove("login_popup_open")
    }
    var signup_popup_close=document.querySelector("#signup_popup_cancel")
    function close_signup_popup(){
        sigup.classList.remove("signup_popup_open")
    }
    
    var login=document.createElement("div")
    login.setAttribute("class","login_popup")
    document.querySelector("body").append(login)
    
    // var login=document.querySelector(".login_popup")
    function open_login_popup(){
    login.classList.add("login_popup_open")
    sigup.classList.remove("signup_popup_open")
    }
    var login_popup_close=document.querySelector("#login_popup_cancel")
    function close_login_popup(){
    login.classList.remove("login_popup_open")
    }
    function signupform(){
        location.href="signupform.html"
    }

    



///////////////////////////////////////////////////////////

  