    // signup button:-<button onclick="open_signup_popup()">signup</button>
    // login  button :-<button onclick="open_login_popup()">login</button>

    var main_float=document.createElement("div")
    main_float.setAttribute("id","main_float")
    document.querySelector("body").append(main_float)

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