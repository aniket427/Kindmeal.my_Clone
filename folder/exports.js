function signupfunc(){
 return`
    <button id="signup_popup_cancel"  onclick="close_signup_popup()" >✕</button>
    <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" id="headimg">
    <div style="font-size: 21px; font-weight: 600; text-align: center;margin-top: 12px;">Join KindMeal For FREE Now</div>
    <p style="text-align: center;margin-top: 7px;">Please select the type of membership to proceed
    </p>   
    <div id="card" onclick="signupform()">
        <img src="https://www.kindmeal.my/images/join_normal.png" alt="">
        <div class="box">
            <span>Food Lover</span>
            <!-- <br> -->
            <span>Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers</span>
        </div>
    </div>
    <div id="card">
        <img src="https://www.kindmeal.my/images/join_shop.png" alt="" style="margin-left: 40px;">
        <div class="box">
            <span>Restaurant / Shop Owner</span>
            <span>List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</span>
        </div>
    </div>
    <p class="foot_signup" onclick="open_login_popup()">Member Login</p>
    <p class="foot_signup" style="left: 70%; top: 12px;" >Forgot password?</p>

 `   
}

function loginfunc(){
    return`
    <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" id="headimg">
    <button id="login_popup_cancel"  onclick="close_login_popup()" >✕</button>
    <div style="font-size: 28px; font-weight: 500; text-align: center;margin-top: 12px;">Member Login</div>
    <input type="text" name="" id="login_email" placeholder="Your Email" style="margin-top: 25px;">
    <input type="text" name="" id="login_password" placeholder="Your Password"><br>
    <button id="the_login_button" onclick="mainlogin()">Login</button>
    <hr style="margin-top: 25px  ; width:90%;margin-left: 5%; height: 0.5px;">
    <button id="facebook_login">
        <img src="https://www.kindmeal.my/images/icon_button_fb.png" alt="">
        <span>Login With Facebook</span>
        </button>
        <p class="foot_login" style="top: 27px;" >Forgot password?</p>
        <p class="foot_login" style="left: 56%;top: 6px" onclick="open_signup_popup()">Not a member? Sign up FREE!</p>
 
    `
}

// function floater(){
//     return`<div class="right_menu">
//     <button class="menu_button">menu</button>
//     <div class="floater">
//         <a href="">My Coupans</a>
//         <a href="">My Recipes</a>
//         <a href="myprofile.html">My KindMeal Profile</a>
//         <a href="">Update Profile</a>
//         <a href="">Account Settings</a>
//         <a  onclick="logout()">Logout</a>
//     </div>
//    </div>`
// }

function css(){
    return `
    .signup_popup{
        font-family: Roboto,arial;
        width: 615px;
        height: 690px;
        border: 1px solid;
        border-radius: 10px;
        position: absolute;
        /* margin-left: 29.5%; */
        background-color: #FFFFFF;
        left: 50%;
        /* top:50%; */
        transform: translate(-50%,-50%) scale(0.1);
        visibility: hidden;
        color: gray;
        transition:tansform 0.4s,top 0.4s
    }
    .login_popup{
        font-family: Roboto,arial;
        width: 615px;
        height: 560px;
        border: 1px solid;
        border-radius: 10px;
        position: absolute;
        /* margin-left: 29.5%; */
        background-color: #FFFFFF;
        left: 50%;
        /* top:50%; */
        transform: translate(-50%,-50%) scale(0.1);
        visibility: hidden;
        color: gray;
        transition:tansform 0.4s,top 0.4s
    }
    .main_float{
  visibility:visible;
    }
    .popup_button_visibility{
   display: none;
   visibility: hidden;
    }

    .signup_popup_open{
        visibility: visible;
        top: 50%;
        transform: translate(-50%,-50%) scale(1);
        
    }
    .login_popup_open{
        visibility: visible;
        top: 50%;
        transform: translate(-50%,-50%) scale(1);
        
    }
    

    #headimg{
        height: 89px;
        margin-top: 40px;
        margin-left: 17.2%;
    }
    #card{
        width: 89%;
        height: 175px;
        border: 1px solid;
        margin-left: 34px;
        border-radius: 20px;
        margin-top: 30px;
        display: flex;
    }
    #card>img{
        height: 140px;
        margin-top: 17px;
        margin-left: 20px;

    }
    #card:hover{
        background-color: rgb(238,238,238);
   }
    .box{
        margin-left: 30px;
    }
    .box>span:nth-child(1){
        font-size: 20px;
        font-weight: 600;
        position: relative;
        top: 30px;
    }
    .box>span:nth-child(2){
        position: relative;
        /* font-size: 20px; */
        top: 50px;
        display: flex;
        flex-direction: column
        ;
    }
    .foot_signup{
        text-decoration: none;
        color: grey;
        font-size: 20px;
        position: relative;
        top: 35px;
        left: 20px;
    }
    .foot_login{
        text-decoration: none;
        color: grey;
        font-size: 18px;
        position: relative;
        /* top: 35px; */
        left: 20px;
    }
    #signup_popup_cancel{
        background-color: white;
        border: 0px;
        position: relative;
        left: 92.5%;
        top: -14%;
        font-size: 18px;
        color: grey;
        font-weight: 800;
    }
    #login_popup_cancel{
        background-color: white;
        border: 0px;
        position: relative;
        left: 10%;
        top: -17%;
        font-size: 18px;
        color: grey;
        font-weight: 800;
    }
    *{
        margin: 0%;
        padding: 0%;
    }
    input{
        height: 40px;
        width: 350px;
        border-radius: 5px;
        margin-left: 22%;
        margin-top: 15px;
        font-size: 19px;
        padding-left: 15px;
    }
    #the_login_button{
        background-color: rgb(4,190,90);
        border: 0px;
        border-radius: 10px;
        color: white;
        width: 240px;
        height: 50px;
        font-size: 23px;
        font-weight: 600;
        margin-top: 27px;
        margin-left: 31%;
    }
    #the_login_button:hover{
        background-color: rgb(3, 150, 72);
    }
    #facebook_login{
        background-color: rgb(59,89,152);
        border: 0px;
        border-radius: 10px;
        color: white;
        width: 310px;
        height: 52px;
        font-size: 20px;
        font-weight: 600;
        margin-top: 27px;
        margin-left: 25.65%;
        display: flex;
    }
    #facebook_login>span{
        margin-top: 15px;
        margin-left: 15px;
    }
    #facebook_login>img{
        height: 85%;
        margin-top: 5px;
        margin-left: 20px;
    }
    
    .floater{
        /* display: none; */
        display: none;
        flex-direction: column;
        text-align: center;
        // border: 1px solid;
        width: 150px;
    }
    
    .floater>a{
        text-align: center;
        text-decoration:none;
        color: black;
        font-weight:500;
        font-size:16px;
        padding-top: 15xp;
        padding-bottom: 15px;
    }
    .floater>a:hover{
        text-align: center;
        /* display: flex; */
        background-color: whitesmoke;
    }

      
    .right_menu:hover .floater{
        display: flex;
    }
    .right_menu{
        width: 150px;
    }
    .menu_button{
        width: 150px;
    }
    .main_float{
        // border: 1px solid ;
        width: 180px;
    }
    `
}

export {signupfunc,loginfunc,css}
